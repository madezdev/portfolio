// Test del formulario de contacto sin Astro
import nodemailer from 'nodemailer';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    console.log('📬 Received contact form submission:', req.body);
    
    const { name, email, subject, message, budget } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Todos los campos requeridos deben estar completos' 
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    console.log('🔍 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP verified');

    // Send email to owner
    const ownerEmail = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `💼 Nuevo contacto: ${subject} - ${name}`,
      html: `
        <h2>📬 Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        ${budget ? `<p><strong>Presupuesto:</strong> ${budget}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Enviado desde el formulario de contacto - ${new Date().toLocaleString()}</small></p>
      `,
      replyTo: email
    };

    console.log('📧 Sending email to owner...');
    const ownerResult = await transporter.sendMail(ownerEmail);
    console.log('✅ Email sent to owner:', ownerResult.messageId);

    // Send confirmation to sender
    const confirmationEmail = {
      from: `"Martin - Portfolio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '✅ Mensaje recibido - Te responderé pronto',
      html: `
        <h2>✅ Mensaje Recibido</h2>
        <p>Hola <strong>${name}</strong>,</p>
        <p>He recibido tu mensaje y te responderé lo antes posible.</p>
        <p><strong>Resumen:</strong></p>
        <ul>
          <li>Asunto: ${subject}</li>
          <li>Email: ${email}</li>
          ${budget ? `<li>Presupuesto: ${budget}</li>` : ''}
        </ul>
        <p>¡Gracias por contactarme!</p>
        <p><strong>Martin</strong><br>Full Stack Developer</p>
      `
    };

    console.log('📧 Sending confirmation to sender...');
    const confirmResult = await transporter.sendMail(confirmationEmail);
    console.log('✅ Confirmation sent:', confirmResult.messageId);

    res.json({ 
      success: true, 
      message: 'Emails enviados correctamente',
      messageIds: {
        owner: ownerResult.messageId,
        confirmation: confirmResult.messageId
      }
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!', time: new Date().toISOString() });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Test server running on http://localhost:${PORT}`);
  console.log(`📧 SMTP configured for: ${process.env.SMTP_USER}`);
});
import nodemailer from 'nodemailer';

// Email templates
const emailTemplates = {
  es: {
    toOwner: {
      subject: (subject) => `Nuevo contacto: ${subject}`,
      html: (data) => `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nuevo mensaje de contacto</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Datos del contacto:</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Asunto:</strong> ${data.subject}</p>
            ${data.budget ? `<p><strong>Presupuesto:</strong> ${data.budget}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0;">
            <h3>Mensaje:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <p style="color: #64748b; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
          </p>
        </div>
      `
    },
    toSender: {
      subject: 'Confirmación: Hemos recibido tu mensaje',
      html: (name) => `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">¡Gracias por contactarme!</h2>
          
          <p>Hola ${name},</p>
          
          <p>He recibido tu mensaje y me pondré en contacto contigo muy pronto. Generalmente respondo dentro de las 24 horas.</p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af;">¿Qué sigue ahora?</h3>
            <ul>
              <li>Revisaré tu mensaje cuidadosamente</li>
              <li>Te responderé con una propuesta detallada</li>
              <li>Programaremos una llamada si es necesario</li>
            </ul>
          </div>
          
          <p>Mientras tanto, puedes:</p>
          <ul>
            <li>Revisar mis proyectos en <a href="https://github.com/martin-dev">GitHub</a></li>
            <li>Conectar conmigo en <a href="https://linkedin.com/in/martin-dev">LinkedIn</a></li>
            <li>Seguirme en redes sociales</li>
          </ul>
          
          <p>¡Espero trabajar contigo pronto!</p>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
            <p><strong>Martin</strong><br>
            Desarrollador Full Stack & Diseñador UX/UI<br>
            <a href="mailto:madezdev@gmail.com">madezdev@gmail.com</a></p>
          </div>
        </div>
      `
    }
  },
  en: {
    toOwner: {
      subject: (subject) => `New contact: ${subject}`,
      html: (data) => `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New contact message</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `
    },
    toSender: {
      subject: 'Confirmation: We received your message',
      html: (name) => `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank you for reaching out!</h2>
          
          <p>Hello ${name},</p>
          
          <p>I've received your message and will get back to you very soon. I typically respond within 24 hours.</p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af;">What happens next?</h3>
            <ul>
              <li>I'll review your message carefully</li>
              <li>I'll respond with a detailed proposal</li>
              <li>We'll schedule a call if needed</li>
            </ul>
          </div>
          
          <p>In the meantime, you can:</p>
          <ul>
            <li>Check out my projects on <a href="https://github.com/martin-dev">GitHub</a></li>
            <li>Connect with me on <a href="https://linkedin.com/in/martin-dev">LinkedIn</a></li>
            <li>Follow me on social media</li>
          </ul>
          
          <p>Looking forward to working with you!</p>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
            <p><strong>Martin</strong><br>
            Full Stack Developer & UX/UI Designer<br>
            <a href="mailto:madezdev@gmail.com">madezdev@gmail.com</a></p>
          </div>
        </div>
      `
    }
  }
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Get environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    
    if (!emailUser || !emailPassword) {
      console.error('Email credentials not configured');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured'
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword
      }
    });

    const templates = emailTemplates[formData.language || 'es'];

    // Email to owner (you)
    const ownerMailOptions = {
      from: emailUser,
      to: 'madezdev@gmail.com',
      subject: templates.toOwner.subject(formData.subject),
      html: templates.toOwner.html(formData),
      replyTo: formData.email
    };

    // Confirmation email to sender
    const senderMailOptions = {
      from: emailUser,
      to: formData.email,
      subject: templates.toSender.subject,
      html: templates.toSender.html(formData.name)
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions)
    ]);

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // More specific error handling
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    return res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}
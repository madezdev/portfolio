import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { name, email, subject, message } = data;
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Todos los campos requeridos deben estar completos' 
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Por favor ingresa un email válido' 
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || import.meta.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || import.meta.env.SMTP_PORT || '587'),
      secure: (process.env.SMTP_SECURE || import.meta.env.SMTP_SECURE) === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || import.meta.env.SMTP_USER,
        pass: process.env.SMTP_PASS || import.meta.env.SMTP_PASS
      },
      // Add debug info
      debug: true,
      logger: true
    });

    // Test the connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError: any) {
      console.error('SMTP verification failed:', verifyError);
      throw new Error(`SMTP configuration error: ${verifyError.message}`);
    }

    // Email template for owner
    const ownerEmailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f8fafc; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4a5568; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #3b82f6; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 Nuevo Mensaje de Contacto</h1>
            <p>Portfolio - madez.dev</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 Nombre:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${email}</div>
            </div>
            
            <div class="field">
              <div class="label">📝 Asunto:</div>
              <div class="value">${subject}</div>
            </div>
            
            ${data.budget ? `
              <div class="field">
                <div class="label">💰 Presupuesto:</div>
                <div class="value">${data.budget}</div>
              </div>
            ` : ''}
            
            <div class="field">
              <div class="label">💬 Mensaje:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>Este mensaje fue enviado desde tu formulario de contacto en madez.dev</p>
            <p>📅 ${new Date().toLocaleDateString('es-ES', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </body>
      </html>
    `;

    // Email template for sender (confirmation)
    const senderEmailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f8fafc; }
            .message { background: white; padding: 20px; border-radius: 10px; border-left: 4px solid #10b981; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
            .cta { text-align: center; margin: 20px 0; }
            .button { display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✅ Mensaje Recibido</h1>
            <p>¡Gracias por contactarme!</p>
          </div>
          
          <div class="content">
            <p>Hola <strong>${name}</strong>,</p>
            
            <div class="message">
              <p>📬 He recibido tu mensaje y te responderé lo antes posible, generalmente en menos de 24 horas.</p>
              
              <p><strong>Resumen de tu mensaje:</strong></p>
              <ul>
                <li><strong>Asunto:</strong> ${subject}</li>
                <li><strong>Email:</strong> ${email}</li>
                ${data.budget ? `<li><strong>Presupuesto:</strong> ${data.budget}</li>` : ''}
              </ul>
            </div>
            
            <p>Mientras tanto, puedes:</p>
            <ul>
              <li>🔗 Conectar conmigo en <a href="https://linkedin.com/in/madezdev">LinkedIn</a></li>
              <li>💼 Ver mis proyectos en <a href="https://github.com/madezdev">GitHub</a></li>
              <li>💬 Enviarme un mensaje directo por <a href="https://wa.me/5491133266874">WhatsApp</a></li>
            </ul>
            
            <div class="cta">
              <a href="https://madez.dev" class="button">🌐 Visitar Portfolio</a>
            </div>
            
            <p>¡Espero trabajar contigo pronto!</p>
            <p><strong>Martin</strong><br>
            Full Stack Developer & UX/UI Designer</p>
          </div>
          
          <div class="footer">
            <p>Este es un email automático de confirmación</p>
            <p>📧 madezdev@gmail.com | 🌐 madez.dev</p>
          </div>
        </body>
      </html>
    `;

    // Get SMTP user from environment variables
    const smtpUser = process.env.SMTP_USER || import.meta.env.SMTP_USER;
    
    // Send email to owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: smtpUser,
      subject: `💼 Nuevo contacto: ${subject} - ${name}`,
      html: ownerEmailHTML,
      replyTo: email
    });

    // Send confirmation email to sender
    await transporter.sendMail({
      from: `"Martin - Portfolio" <${smtpUser}>`,
      to: email,
      subject: '✅ Mensaje recibido - Te responderé pronto',
      html: senderEmailHTML
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email enviado correctamente' 
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Error interno del servidor. Por favor intenta más tarde.';
    
    if (error.message?.includes('SMTP')) {
      errorMessage = 'Error de configuración SMTP. Verifica las credenciales.';
    } else if (error.message?.includes('authentication')) {
      errorMessage = 'Error de autenticación. Verifica el usuario y contraseña SMTP.';
    } else if (error.message?.includes('connection')) {
      errorMessage = 'Error de conexión SMTP. Verifica host y puerto.';
    }
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
  language: 'es' | 'en';
}

// Email templates
const emailTemplates = {
  es: {
    toOwner: {
      subject: (subject: string) => `💼 Nuevo contacto: ${subject}`,
      html: (data: ContactFormData) => `
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
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${data.email}</div>
              </div>
              
              <div class="field">
                <div class="label">📝 Asunto:</div>
                <div class="value">${data.subject}</div>
              </div>
              
              ${data.budget ? `
                <div class="field">
                  <div class="label">💰 Presupuesto:</div>
                  <div class="value">${data.budget}</div>
                </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
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
      `
    },
    toSender: {
      subject: '✅ Mensaje recibido - Te responderé pronto',
      html: (name: string) => `
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
      `
    }
  },
  en: {
    toOwner: {
      subject: (subject: string) => `💼 New contact: ${subject}`,
      html: (data: ContactFormData) => `
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
              <h1>📬 New Contact Message</h1>
              <p>Portfolio - madez.dev</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${data.email}</div>
              </div>
              
              <div class="field">
                <div class="label">📝 Subject:</div>
                <div class="value">${data.subject}</div>
              </div>
              
              ${data.budget ? `
                <div class="field">
                  <div class="label">💰 Budget:</div>
                  <div class="value">${data.budget}</div>
                </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This message was sent from your contact form at madez.dev</p>
              <p>📅 ${new Date().toLocaleDateString('en-US', { 
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
      `
    },
    toSender: {
      subject: '✅ Message received - I will respond soon',
      html: (name: string) => `
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
              <h1>✅ Message Received</h1>
              <p>Thank you for reaching out!</p>
            </div>
            
            <div class="content">
              <p>Hello <strong>${name}</strong>,</p>
              
              <div class="message">
                <p>📬 I have received your message and will respond as soon as possible, usually within 24 hours.</p>
              </div>
              
              <p>In the meantime, you can:</p>
              <ul>
                <li>🔗 Connect with me on <a href="https://linkedin.com/in/madezdev">LinkedIn</a></li>
                <li>💼 Check out my projects on <a href="https://github.com/madezdev">GitHub</a></li>
                <li>💬 Send me a direct message on <a href="https://wa.me/5491133266874">WhatsApp</a></li>
              </ul>
              
              <div class="cta">
                <a href="https://madez.dev" class="button">🌐 Visit Portfolio</a>
              </div>
              
              <p>Looking forward to working with you!</p>
              <p><strong>Martin</strong><br>
              Full Stack Developer & UX/UI Designer</p>
            </div>
            
            <div class="footer">
              <p>This is an automatic confirmation email</p>
              <p>📧 madezdev@gmail.com | 🌐 madez.dev</p>
            </div>
          </body>
        </html>
      `
    }
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json() as ContactFormData;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Missing required fields'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid email format'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development'
    });

    // Test connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError: any) {
      console.error('SMTP verification failed:', verifyError);
      throw new Error(`SMTP configuration error: ${verifyError.message}`);
    }

    const templates = emailTemplates[formData.language || 'es'];
    const smtpUser = import.meta.env.SMTP_USER || process.env.SMTP_USER;

    // Send email to owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: smtpUser,
      subject: templates.toOwner.subject(formData.subject),
      html: templates.toOwner.html(formData),
      replyTo: formData.email
    });

    // Send confirmation email to sender
    await transporter.sendMail({
      from: `"Martin - Portfolio" <${smtpUser}>`,
      to: formData.email,
      subject: templates.toSender.subject,
      html: templates.toSender.html(formData.name)
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Emails sent successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'Failed to send email';
    if (error.message?.includes('SMTP')) {
      errorMessage = 'SMTP configuration error. Please check credentials.';
    } else if (error.message?.includes('authentication')) {
      errorMessage = 'SMTP authentication error. Please verify user and password.';
    } else if (error.message?.includes('connection')) {
      errorMessage = 'SMTP connection error. Please verify host and port.';
    }
    
    return new Response(JSON.stringify({
      success: false,
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
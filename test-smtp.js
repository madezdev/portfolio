import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('🔧 Testing SMTP Configuration...\n');

console.log('Configuration:');
console.log('Host:', process.env.SMTP_HOST);
console.log('Port:', process.env.SMTP_PORT);
console.log('User:', process.env.SMTP_USER);
console.log('Pass:', process.env.SMTP_PASS ? '****' + process.env.SMTP_PASS.slice(-4) : 'NOT SET');
console.log('Secure:', process.env.SMTP_SECURE);
console.log('');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  debug: true
});

try {
  console.log('🔍 Verifying SMTP connection...');
  await transporter.verify();
  console.log('✅ SMTP connection verified successfully!');
  
  console.log('\n📧 Sending test email...');
  const result = await transporter.sendMail({
    from: `"Test Portfolio" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: '🧪 Test Email from Portfolio',
    html: `
      <h2>✅ SMTP Test Successful!</h2>
      <p>This is a test email to verify your SMTP configuration is working.</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Configuration:</strong></p>
      <ul>
        <li>Host: ${process.env.SMTP_HOST}</li>
        <li>Port: ${process.env.SMTP_PORT}</li>
        <li>Secure: ${process.env.SMTP_SECURE}</li>
      </ul>
    `
  });
  
  console.log('✅ Test email sent successfully!');
  console.log('Message ID:', result.messageId);
  console.log('\n🎉 Your SMTP configuration is working correctly!');
  
} catch (error) {
  console.error('❌ SMTP test failed:');
  console.error('Error:', error.message);
  
  if (error.code) {
    console.error('Error Code:', error.code);
  }
  
  console.log('\n🔧 Troubleshooting tips:');
  console.log('1. Make sure you have a Gmail App Password (not your regular password)');
  console.log('2. Check that 2-factor authentication is enabled on your Gmail account');
  console.log('3. Verify the SMTP credentials in your .env file');
  console.log('4. Try using port 465 with secure: true instead of port 587');
}

process.exit(0);
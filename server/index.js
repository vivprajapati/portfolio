const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { entity, name, email, scope, details } = req.body;

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required.',
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  const msg = {
    to: process.env.RECIPIENT_EMAIL || 'vivprajapati1520@gmail.com',
    from: process.env.SENDER_EMAIL || 'vivprajapati1520@gmail.com', // Must be a verified sender in SendGrid
    replyTo: email,
    subject: `Portfolio Inquiry from ${name}${entity ? ` (${entity})` : ''}`,
    text: [
      `New portfolio inquiry received:`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      entity ? `Entity: ${entity}` : null,
      scope ? `Project Scope: ${scope}` : null,
      ``,
      `Details:`,
      details || 'No additional details provided.',
    ]
      .filter(Boolean)
      .join('\n'),
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; border-radius: 16px; overflow: hidden;">
        <div style="padding: 32px; border-bottom: 2px solid #cafd00;">
          <h1 style="font-family: 'Manrope', sans-serif; font-size: 24px; margin: 0 0 4px; color: #cafd00;">New Portfolio Inquiry</h1>
          <p style="font-size: 14px; color: #8a8a8a; margin: 0;">Received via vivekprajapati.dev</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #8a8a8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #f5f5f5; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #8a8a8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #f5f5f5; font-size: 15px;"><a href="mailto:${email}" style="color: #cafd00; text-decoration: none;">${email}</a></td>
            </tr>
            ${entity ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #8a8a8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Entity</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #f5f5f5; font-size: 15px;">${entity}</td>
            </tr>
            ` : ''}
            ${scope ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #8a8a8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Scope</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #f5f5f5; font-size: 15px;">${scope}</td>
            </tr>
            ` : ''}
          </table>
          ${details ? `
          <div style="margin-top: 24px; padding: 20px; background: #161616; border-radius: 12px; border: 1px solid #2a2a2a;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #8a8a8a; margin: 0 0 8px;">Project Details</p>
            <p style="font-size: 14px; line-height: 1.7; color: #f5f5f5; margin: 0; white-space: pre-wrap;">${details}</p>
          </div>
          ` : ''}
        </div>
        <div style="padding: 24px 32px; background: #111; text-align: center;">
          <p style="font-size: 12px; color: #555; margin: 0;">Powered by Vivek Prajapati Portfolio • SendGrid</p>
        </div>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ Email sent successfully from ${name} (${email})`);
    res.json({
      success: true,
      message: 'Your inquiry has been transmitted successfully!',
    });
  } catch (error) {
    console.error('❌ SendGrid error:', error.response?.body || error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to send inquiry. Please try again or email directly.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Contact API server running on port ${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Contact: POST http://localhost:${PORT}/api/contact`);
});

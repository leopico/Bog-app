import { ActiveToken } from '@prisma/client';
import nodemailer, { Transporter } from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const apiEndpoint = process.env.API_ENDPOINT;

// Create a transporter instance
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass //if you have 2FA authentication then go to google account and take application password
  }
});

export async function sendNotificationEmail(name: string, recipientToken: string, recipientEmail: string): Promise<void> {
  const mailOptions = {
    from: email,
    to: recipientEmail,
    subject: 'Please Activate Your Account (Expired in 24hrs)',
    text: `Hello ${name}, please activate your account by clicking this link: ${apiEndpoint}/activate/${recipientToken}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
}


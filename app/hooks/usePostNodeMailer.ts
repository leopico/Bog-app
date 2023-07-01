import nodemailer, { Transporter } from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// Create a transporter instance
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass //if you have 2FA authentication then go to google account and take application password
  }
});

export async function sendNotificationEmail(title: string, recipientEmail: string[]): Promise<void> {
  const mailOptions = {
    from: email,
    to: recipientEmail.join(', '),
    subject: 'New Post Notification',
    text: `A new post titled "${title}" has been created.`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
}


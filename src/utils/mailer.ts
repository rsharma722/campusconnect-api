import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendJoinEmail(
  to: string,
  eventTitle: string,
  eventDate: string
) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: `You joined: ${eventTitle}`,
    text: `You have successfully joined the event "${eventTitle}" on ${eventDate}.`,
  });
}

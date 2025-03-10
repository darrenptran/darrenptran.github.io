import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set the SendGrid API key from environment variables
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'darrenptran@gmail.com', // Receiver's email address
      from: 'your_verified_sender@example.com', // Verified sender email from SendGrid
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    // Respond with 405 if method is not POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

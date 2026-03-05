const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, subject, message } = req.body;

    // IMPORTANT: Vercel uses process.env without needing dotenv!
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Website Contact: ${subject} from ${name}`,
            text: `You have received a new message from the contact form on your website.\n\nName: ${name}\nSubject: ${subject}\n\nMessage:\n${message}`,
            replyTo: undefined // They didn't provide an email field, so we omit this or fake it
        };

        await transporter.sendMail(mailOptions);

        // Vercel serverless functions send responses differently than Express
        return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error("Vercel Function Error:", error);
        return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
}

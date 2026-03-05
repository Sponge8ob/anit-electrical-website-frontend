const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("Starting server with EMAIL_USER:", process.env.EMAIL_USER ? "Configured" : "MISSING");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log("SMTP Connection Error at Startup:");
        console.error(error);
    } else {
        console.log("SMTP Server is ready to take our messages");
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, subject, message } = req.body;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Website Inquiry: ${subject}`,
            text: `Name: ${name}\n\nMessage:\n${message}`,
        });
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error("FAILED TO SEND EMAIL. Full Error:", error);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

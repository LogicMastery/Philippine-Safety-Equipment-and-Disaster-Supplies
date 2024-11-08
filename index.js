// index.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON and URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Enable cross-origin requests if needed

// Set up Nodemailer transporter (replace with your credentials)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Can use other services like Yahoo, Outlook, etc.
    auth: {
        user: 'silicon.logic.tech@gmail.com',  // Replace with your email address
        pass: 'Make-My-Life-Successful-06129845',   // Replace with your email password (or use OAuth2 for better security)
    }
});

// Serve the HTML file
app.use(express.static('public'));

// POST route to handle contact form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Set up email data
    const mailOptions = {
        from: email,        // Sender's email
        to: 'recipient-email@example.com', // Replace with the recipient's email
        subject: `New Message from ${name}`,
        text: message,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error sending email.');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Your message has been sent!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
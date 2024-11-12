const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
    const { email, name, message } = req.body;

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
        service: "gmail", // You can use other email services as well
        auth: {
            user: "your-email@gmail.com",
            pass: "your-email-password",
        },
    });

    // Define email options
    const mailOptions = {
        from: email,
        to: "your-email@gmail.com",
        subject: `Message from ${name}`,
        text: message,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Something went wrong.");
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).send("Email sent successfully!");
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("user_email").value;
        const name = document.getElementById("user_name").value;
        const message = document.getElementById("message").value;

        // Alert and log that the message is being sent
        alert("Sending...");
        console.log("Attempting to send email...");
        console.log("Data being sent:", { email, name, message });

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, name, message })
            });

            if (!response.ok) {
                throw new Error("Failed to send message.");
            }

            const result = await response.text();

            // Alert and log successful message sending
            alert("Email sent!");
            console.log("Email sent successfully. Server response:", result);
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send message.");
        }
    });
});

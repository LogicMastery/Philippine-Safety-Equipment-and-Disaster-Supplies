$(document).sendMail(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Collect form data
        const formData = {
            name: $('#user_name').val(),
            email: $('#user_email').val(),
            message: $('#message').val()
        };

        // Send data to server using AJAX
        $.ajax({
            type: 'POST',
            url: '/send', // The endpoint where we will send the form data
            data: formData,
            success: function(response) {
                alert('Your message has been sent!');
            },
            error: function() {
                alert('There was an error sending your message.');
            }
        });
    });
});



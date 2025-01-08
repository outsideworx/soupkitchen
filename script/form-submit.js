$(document).ready(function() {
    $('#uploadForm').on('submit', function(e) {
        e.preventDefault();  // Prevents the form from submitting the traditional way

        var formData = $(this).serialize();  // Serializes the form data

        $.ajax({
            type: 'POST',  // Set the request type
            url: 'https://example.com/submit',  // Replace with your URL
            data: formData,  // Send the form data
            success: function(response) {
                alert('Form submitted successfully!');
                console.log(response);  // You can log the server's response here
            },
            error: function(xhr, status, error) {
                alert('An error occurred. Please try again later.');
                console.error(error);  // Log any errors
            }
        });
    });
});

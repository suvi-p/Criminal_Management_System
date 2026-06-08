// forget.js

function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch the email entered by the user
    let email = document.getElementById('email').value.trim();

    // Perform validation if needed
    if (isValidEmail(email)) {
        // Here you can add logic to send a reset password link or show a success message
        alert('Reset password link sent to ' + email);

        // Redirect to login page
        window.location.href = 'login.html';
    } else {
        // Handle invalid email input
        alert('Please enter a valid email address.');
    }
}

function isValidEmail(email) {
    // Basic email validation using regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Attach event listener to the form
let form = document.getElementById('forgotPasswordForm');
form.addEventListener('submit', submitForm);

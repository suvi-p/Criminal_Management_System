document.addEventListener('DOMContentLoaded', function() {
    const verificationForm = document.querySelector('.verification-form');

    verificationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Perform form validation here (example: checking if OTP field is not empty)
        const otp = document.getElementById('otp').value.trim();

        if (otp === '') {
            alert('Please enter the 2FA code.');
            return;
        }

        // Simulate verification process (replace with actual backend integration)
        // Assuming successful verification, redirect to login page
        alert('Verification successful! Redirecting to login page.');
        window.location.href = 'login.html';
    });
});

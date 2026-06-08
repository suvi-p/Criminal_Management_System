// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Simulate login process (replace with actual login logic)
    const station = document.getElementById('station').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Example: Validate inputs (can be more robust in a real application)
    if (station && email && password) {
        // Simulating API call (replace with actual backend call)
        // Example: Check login credentials
        if (email === 'example@email.com' && password === 'password123') {
            // Successful login
            // Simulate sending OTP (replace with actual OTP logic)
            // For demo, always go to OTP verification page
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('otpForm').style.display = 'block';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('active');
    });
});


// Function to handle OTP form submission (simulated 2FA verification)
document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Simulate 2FA verification process (replace with actual 2FA logic)
    const otp = document.getElementById('otp').value.trim();

    // Example: Validate OTP (for demo, just check if it's a number)
    if (!isNaN(otp) && otp.length === 6) {
        // Simulating successful 2FA verification
        alert('2FA verified successfully. Redirecting to dashboard.');
        // Example: Redirect to dashboard.html (replace with actual redirection logic)
        window.location.href = '../dashboard/dashboard.html';
    } else {
        alert('Invalid OTP. Please try again.');
    }
});

// Optional: Function to handle redirect to signup page
document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Redirect to signup.html (replace with actual path)
    window.location.href = 'signup.html';
});

// Optional: Function to handle redirect to forgot password page
document.getElementById('forgotPasswordLink').addEventListener('click', function(event) {
    event.preventDefault();
    // Redirect to forget.html (replace with actual path)
    window.location.href = 'forget.html';
});

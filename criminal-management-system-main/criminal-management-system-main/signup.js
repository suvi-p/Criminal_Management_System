document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Perform form validation here
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (fullname === '' || email === '' || username === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }
        function redirectToLogin() {
            window.location.href = "http://127.0.0.1:5500/login/login.html";
            return false; // Prevents form submission
        }
    });
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

function redirectToLogin() {
    window.location.href = "login.html";
    return false; // Prevents form submission
}

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('password-strength');

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const criteria = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            numeric: /[0-9]/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        updatePasswordStrength(criteria);
    });

    function updatePasswordStrength(criteria) {
        const criteriaList = [
            { name: 'Length (8 characters)', satisfied: criteria.length },
            { name: 'Uppercase letter', satisfied: criteria.uppercase },
            { name: 'Lowercase letter', satisfied: criteria.lowercase },
            { name: 'Numeric character', satisfied: criteria.numeric },
            { name: 'Special character', satisfied: criteria.special }
        ];

        let html = '';

        criteriaList.forEach(item => {
            const className = item.satisfied ? 'matched' : '';
            html += `<div class="criteria-item"><span>${item.name}:</span> <span class="${className}">${item.satisfied ? 'Yes' : 'No'}</span></div>`;
        });

        passwordStrength.innerHTML = html;
    }
});




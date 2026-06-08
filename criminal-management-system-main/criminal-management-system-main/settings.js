// Example JavaScript for handling settings interactions (not essential for basic functionality)

// Example of changing theme
const themeSelect = document.getElementById('theme');

themeSelect.addEventListener('change', function() {
    const selectedTheme = themeSelect.value;
    document.body.classList.toggle('dark-theme', selectedTheme === 'dark');
});

// Example of handling email notifications toggle
const emailNotifications = document.getElementById('emailNotifications');

emailNotifications.addEventListener('change', function() {
    if (emailNotifications.checked) {
        alert('Email notifications enabled!');
    } else {
        alert('Email notifications disabled.');
    }
});

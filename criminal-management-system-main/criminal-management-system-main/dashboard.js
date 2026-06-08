// Get modal and button elements
const profileModal = document.getElementById('profileModal');
const viewProfileBtn = document.getElementById('viewProfileBtn');
const closeProfileModal = document.getElementById('closeProfileModal');
const logoutBtn = document.getElementById('logoutBtn');
const profileDropdown = document.querySelector('.profile .dropdown'); // Select the profile dropdown

// Function to open profile modal
viewProfileBtn.addEventListener('click', function(event) {
    event.preventDefault();
    profileModal.style.display = 'block';
});

// Function to close profile modal
closeProfileModal.addEventListener('click', function() {
    profileModal.style.display = 'none';
});

// Function to handle logout (redirect to login page)
logoutBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Perform logout logic, e.g., clearing session
    window.location.href = 'http://127.0.0.1:5500/login/login.html'; // Replace with your actual login page URL
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.closest('.profile')) {
        profileDropdown.style.display = 'none'; // Close dropdown if clicked outside the profile area
    }
});

// Prevent closing dropdown when clicking inside the dropdown
profileDropdown.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event bubbling
});

// Close modal on ESC key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        profileModal.style.display = 'none';
    }
});

// Close modal on window resize (for responsive behavior)
window.addEventListener('resize', function() {
    profileModal.style.display = 'none';
});

// Ensure dropdown remains visible after closing modal
profileModal.addEventListener('click', function(event) {
    if (event.target === profileModal) {
        profileModal.style.display = 'none';
    }
});

// Show dropdown on profile icon hover
document.querySelector('.profile').addEventListener('mouseover', function() {
    profileDropdown.style.display = 'block';
});

// Hide dropdown on profile icon mouse leave
document.querySelector('.profile').addEventListener('mouseleave', function() {
    profileDropdown.style.display = 'none';
});

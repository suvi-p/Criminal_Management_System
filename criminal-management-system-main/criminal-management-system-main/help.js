// JavaScript to handle FAQ interaction
document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            // Toggle active class to expand/collapse answer
            question.classList.toggle('active');
        });
    });
});

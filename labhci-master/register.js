document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const gender = document.getElementById('gender').value;
        const agree = document.getElementById('agree').checked;

        // Basic validation example, you can customize based on your needs
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || gender.trim() === '' || !agree) {
            alert('Please fill in all required fields and agree to the terms and conditions.');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match. Please re-enter your password.');
        } else {
            // Form is valid, you can submit it or perform additional actions here
            alert('Registration successful!');
        }
    }
});

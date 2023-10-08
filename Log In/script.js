document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Validate email
        if (!validateEmail(emailInput.value)) {
            isValid = false;
            emailInput.classList.add("error");
        } else {
            emailInput.classList.remove("error");
        }

        // Validate password
        if (passwordInput.value.length < 8) {
            isValid = false;
            passwordInput.classList.add("error");
        } else {
            passwordInput.classList.remove("error");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle theme
    themeSwitch.addEventListener("click", function () {
        if (body.classList.contains("darkmode")) {
            body.classList.remove("darkmode");
            localStorage.setItem("theme", "");
        } else {
            body.classList.add("darkmode");
            localStorage.setItem("theme", "darkmode");
        }
    });

    // Function to toggle password visibility
    function togglePasswordVisibility(inputId, toggleButton) {
        const passwordInput = document.getElementById(inputId);
        if (passwordInput && toggleButton) {
            toggleButton.addEventListener('click', function () {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                toggleButton.textContent = type === 'password' ? '👁️' : '🙈';
            });
        }
    }

    // Select all toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-password');

    // Attach event listeners to each toggle button
    toggleButtons.forEach((toggleButton) => {
        const inputId = toggleButton.previousElementSibling.id; // Get the associated input's ID
        togglePasswordVisibility(inputId, toggleButton);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 1, 1)"; // Smooth fade to solid color
        } 
        else {
            navbar.style.background = "linear-gradient(180deg, rgba(0, 0, 1, 0.9) 0%, transparent 100%)";
        }
    });
});


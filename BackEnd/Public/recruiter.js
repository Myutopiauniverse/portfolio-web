// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#")) { // Only prevent default for internal links
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
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


// Add animations to cards (optional)
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "3";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Add click event to cards for navigation
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Redirect to the specified page
            }
        });
    });
});

function copyEmailToClipboard(event) {
    event.preventDefault(); // Prevents page reload
    const email = "Luyandajnr19zondi@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied: " + email);
    }).catch(err => {
        console.error("Failed to copy email: ", err);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const avatarContainer = document.getElementById("avatar-container");
    const avatarImage = document.getElementById("selected-avatar");
    
    // Get saved avatar
    const selectedAvatar = localStorage.getItem("selectedAvatar");

    if (selectedAvatar) {
        avatarImage.src = selectedAvatar;
        avatarContainer.classList.remove("hidden"); // Show avatar
    }
});

// Function to go back to Blogs page when avatar is clicked
function goToBlogs() {
    window.location.href = "blogs.html";
}

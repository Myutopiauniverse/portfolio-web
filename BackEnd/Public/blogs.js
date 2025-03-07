document.querySelectorAll(".profile").forEach(profile => {
    profile.addEventListener("click", () => {
        const url = profile.getAttribute('data-url');
        window.location.href = url;
    });
});


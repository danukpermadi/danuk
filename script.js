function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let themeIcon = document.querySelector(".theme-toggle");
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.innerHTML = "☀️";
    } else {
        themeIcon.innerHTML = "🌙";
    }
}
// script.js

const themeSwitch = document.getElementById('themeSwitch');
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on load
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
    }
}

// Toggle theme on switch change
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
});

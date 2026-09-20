// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.style.setProperty('--bg-color', '#1c1917');
        document.documentElement.style.setProperty('--card-bg', '#292524');
        document.documentElement.style.setProperty('--card-hover', '#383230');
        document.documentElement.style.setProperty('--text-main', '#f5f5f4');
        document.documentElement.style.setProperty('--text-muted', '#a8a29e');
        document.documentElement.style.setProperty('--accent', '#d97706');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.style.setProperty('--bg-color', '#f7f3ee');
        document.documentElement.style.setProperty('--card-bg', '#eae3db');
        document.documentElement.style.setProperty('--card-hover', '#f2ede7');
        document.documentElement.style.setProperty('--text-main', '#3b3024');
        document.documentElement.style.setProperty('--text-muted', '#796d60');
        document.documentElement.style.setProperty('--accent', '#8b6b43');
        themeToggle.textContent = '🌙';
    }
});

// Category Active Selection
const catCards = document.querySelectorAll('.cat-card');
catCards.forEach(card => {
    card.addEventListener('click', () => {
        catCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

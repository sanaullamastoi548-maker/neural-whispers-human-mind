// Theme Toggle & Interactive Click
const themeToggle = document.getElementById('theme-toggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.style.setProperty('--bg-color', '#1c1917');
        document.documentElement.style.setProperty('--card-bg', '#292524');
        document.documentElement.style.setProperty('--text-main', '#f5f5f4');
        document.documentElement.style.setProperty('--text-muted', '#a8a29e');
        document.documentElement.style.setProperty('--accent', '#d97706');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.style.setProperty('--bg-color', '#f5f0eb');
        document.documentElement.style.setProperty('--card-bg', '#eae3dc');
        document.documentElement.style.setProperty('--text-main', '#3d352a');
        document.documentElement.style.setProperty('--text-muted', '#786d5f');
        document.documentElement.style.setProperty('--accent', '#8c6d48');
        themeToggle.textContent = '🌙';
    }
});

// Category Selection Effect
const catCards = document.querySelectorAll('.cat-card');
catCards.forEach(card => {
    card.addEventListener('click', () => {
        catCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

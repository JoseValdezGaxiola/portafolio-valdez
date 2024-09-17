function updateTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark', theme === 'dark');
}

function switchTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    updateTheme();
}

document.getElementById('themeToggle').addEventListener('click', () => {
    if (!document.startViewTransition) {
        switchTheme();
    } else {
        document.startViewTransition(switchTheme);
    }
});

// Initial theme setup
updateTheme();

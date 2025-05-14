//Modo escuro

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeSelector('dark');
    } else {
        body.classList.remove('dark-mode');
        updateThemeSelector('light');
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);

    updateThemeSelector(newTheme);
}

function updateThemeSelector(theme) {
    const lightBtn = document.querySelector('.theme-option[data-theme="light"]');
    const darkBtn = document.querySelector('.theme-option[data-theme="dark"]');
    
    if (lightBtn && darkBtn) {
        lightBtn.classList.toggle('active', theme === 'light');
        darkBtn.classList.toggle('active', theme === 'dark');
    }
}

function setupTheme() {
    applyTheme();
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.dataset.theme;
            localStorage.setItem('theme', theme);
            applyTheme();
        });
    });
}

document.addEventListener('DOMContentLoaded', setupTheme);

(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
})();

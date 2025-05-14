// LOGIN //
function mostrarSenha() {
    const inputPass = document.getElementById('senha');
    const btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') {
        inputPass.type = 'text';
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.type = 'password';
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved user preference or use system preference
const savedTheme = localStorage.getItem('theme') || 
                 (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the saved theme
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'light');
    }
});
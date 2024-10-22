function mostrarSenha() {
    const inputPass = document.getElementById('senha');
    const btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bxs-lock-alt', 'bxs-lock-open-alt');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bxs-lock-open-alt', 'bxs-lock-alt');
    }
}

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-lateral');
let overlay = document.getElementById('overlay-topo');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block'; 
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    fecharMenu();
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    fecharMenu();
});

function fecharMenu() {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
}

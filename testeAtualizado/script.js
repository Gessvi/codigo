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

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona as barras de navegação
    const bars = document.querySelectorAll('.bar');

    // Seleciona a div que contém os slides
    const slideContainer = document.querySelector('.slide');

    // Variáveis para controlar qual imagem está ativa
    let currentIndex = 0; // Começa com a primeira imagem

    // Adiciona o evento de click nas barras
    bars.forEach((bar, index) => {
        bar.addEventListener('click', () => {
            // Muda a posição da imagem com base no índice
            if (index === 0) {
                slideContainer.style.transform = 'translateX(0)'; // Exibe a primeira imagem
                currentIndex = 0;
            } else if (index === 1) {
                slideContainer.style.transform = 'translateX(-100vw)'; // Exibe a segunda imagem
                currentIndex = 1;
            }
        });
    });
});


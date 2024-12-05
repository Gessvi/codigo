// == Mostrar Senha == //

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

// Quando clicar no overlay, fecha o menu lateral
overlay.addEventListener('click', () => {
    // Fecha o menu lateral
    menu.classList.remove('abrir-menu');
    
    // Esconde o overlay
    overlay.style.display = 'none';
});



// == Slide == //

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

// JavaScript do Local do Site

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os inputs de rádio e as bolinhas de navegação
    const radios = document.querySelectorAll('input[name="btn-radio"]');
    const labels = document.querySelectorAll('.nav-manual label');
    const totalSlides = radios.length;

    // Função para avançar para o próximo slide automaticamente
    let currentSlide = 0;
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        radios[currentSlide].checked = true;
    }

    // Muda de slide a cada 5 segundos
    setInterval(nextSlide, 5000); // Altere para o intervalo desejado (em milissegundos)

    // Navegação manual: clicar nas bolinhas
    labels.forEach((label, index) => {
        label.addEventListener('click', function() {
            radios[index].checked = true;
        });
    });
});

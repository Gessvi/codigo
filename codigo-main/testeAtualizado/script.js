
// MENU LATERAL //

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

overlay.addEventListener('click', () => {

    menu.classList.remove('abrir-menu');

    overlay.style.display = 'none';
});


// CARDS //

const cards = document.querySelectorAll('.card');

const observerOptions = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5 
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
};


const observer = new IntersectionObserver(observerCallback, observerOptions);


cards.forEach(card => {
    observer.observe(card);
});

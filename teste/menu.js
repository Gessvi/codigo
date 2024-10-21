// Seleciona o botão de expandir e o menu lateral
const btnExpandir = document.querySelector('.btn-expandir');
const menuLateral = document.querySelector('.menu-lateral');

// Adiciona um evento de clique ao botão
btnExpandir.addEventListener('click', function() {
    // Alterna a classe 'expandido' no menu lateral
    menuLateral.classList.toggle('expandido');
});

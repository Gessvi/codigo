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

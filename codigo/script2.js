const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const resumoDiv = document.getElementById('resumo-compra');

if (carrinho.length === 0) {
    resumoDiv.innerHTML = "<p>Seu carrinho está vazio.</p>";
} else {
    let total = 0;
    carrinho.forEach(item => {
        const itemTotal = (item.preco * item.quantidade).toFixed(2);
        resumoDiv.innerHTML += `<p>${item.nome} (x${item.quantidade}): R$ ${itemTotal}</p>`;
        total += item.preco * item.quantidade;
    });
    resumoDiv.innerHTML += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
}

document.getElementById('meuBotao').addEventListener('click', function () {
    alert('Compra finalizada!');
    window.location.href = 'home.html'
});

document.getElementById('meuBotao').addEventListener('click', function () {
    const nome = document.getElementById('nome-completo').value;
    const cpf = document.getElementById('rg-cpf').value;

    if (!nome || !cpf) {
        alert("Por favor, preencha o nome e o CPF.");
        return;
    }

    // Recupera compras anteriores
    let compras = JSON.parse(localStorage.getItem('compras')) || [];

    const novaCompra = {
        usuario: {
            nome: nome,
            cpf: cpf
        },
        itens: carrinho,
        total: carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0).toFixed(2)
    };

    // Adiciona a nova compra à lista de compras e salva novamente no local storage
    compras.push(novaCompra);
    localStorage.setItem('compras', JSON.stringify(compras));

    // Limpa o carrinho do local storage após finalizar a compra
    //localStorage.removeItem('carrinho');

    alert('Compra finalizada!');
    window.location.href = 'home.html';
});


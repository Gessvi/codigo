const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const resumoDiv = document.getElementById('resumo-compra');

// Exibe o conteúdo do carrinho ou uma mensagem de carrinho vazio
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

// Adiciona o evento de clique ao botão para finalizar a compra
document.getElementById('meuBotao').addEventListener('click', function () {
    // Recupera os valores de nome e CPF
    const nome = document.getElementById('nome-completo').value;
    const cpf = document.getElementById('rg-cpf').value;

    // Valida se os campos de nome e CPF estão preenchidos
    if (!nome || !cpf) {
        alert("Por favor, preencha o nome e o CPF.");
        return;  // Impede a execução posterior se faltar algum dado
    }

    // Recupera as compras anteriores
    let compras = JSON.parse(localStorage.getItem('compras')) || [];

    // Cria um objeto de nova compra
    const novaCompra = {
        usuario: {
            nome: nome,
            cpf: cpf
        },
        itens: carrinho,
        total: carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0).toFixed(2)
    };

    // Adiciona a nova compra à lista de compras e salva novamente no localStorage
    compras.push(novaCompra);
    localStorage.setItem('compras', JSON.stringify(compras));

    // Limpa o carrinho do localStorage após finalizar a compra
    localStorage.removeItem('carrinho');

    // Alerta o usuário e redireciona para a página inicial
    alert('Compra finalizada!');
    window.location.href = 'home.html';
});

const produtos = [
    { id: 1, nome: 'Feijão', preco: 3.75, descricao: 'Sapeca, Kicaldo, Camil | Unidade' },
    { id: 2, nome: 'Arroz', preco: 2.99, descricao: 'moções, Camil, Prato Fino | Unidade' },
    { id: 3, nome: 'Farinha', preco: 2.99, descricao: 'Venturelli, Suprema | Unidade' },
    { id: 4, nome: 'Açúcar', preco: 1.99, descricao: 'União, Barra, Caeté | Unidade' },
    { id: 5, nome: 'Café', preco: 2.50, descricao: 'Melilha, Santa Clara,  | Unidade' },
    { id: 6, nome: 'Sal', preco: 0.99, descricao: 'União, Jasmine, Globo | Unidade' },
    { id: 7, nome: 'Biscoito', preco: 1.99, descricao: 'Bauducco, Passatempo, Club Social | Unidade' },
    { id: 8, nome: 'Pão de Forma', preco: 2.99, descricao: 'Limiar, Visconti | Unidade' },
    { id: 9, nome: 'Tapioca', preco: 1.99, descricao: 'BeijuBom, Amafil, Yoki | Unidade' },
    { id: 10, nome: 'Pão de Forma Integral', preco: 1.99, descricao: 'auducco, Panco, Plusvita | Unidade' },
    { id: 11, nome: 'Suco em Caixa', preco: 3.99, descricao: 'Valle, Mascarello | 1L' },
    { id: 12, nome: 'Suco em Pó', preco: 0.70, descricao: 'Frisco, Tang, Mid | Unidade' },
];

const produtoss = [
    { id: 13, nome: 'Margarina', preco: 1.99, descricao: 'Qualy, Claybom, Deline | 500g' },
    { id: 13, nome: 'Manteiga', preco: 1.99, descricao: 'Qualy, Delicia, Delicata  | 500g' },
    { id: 15, nome: 'Queijo Lanche', preco: 2.99, descricao: 'Queijo Tipo Lanche  | 500g' },
    { id: 16, nome: 'Queijo Mussarela', preco: 2.99, descricao: 'Queijo Mussarela Fatiado  | 500g' },
    { id: 17, nome: 'Queijo Branco', preco: 2.50, descricao: 'Queijo Branco Fresco  | 500g' },
    { id: 18, nome: 'Queijo Parmesão', preco: 3.00, descricao: 'Queijo Parmesão Cilindro  |200g' },
    { id: 19, nome: 'Presunto', preco: 2.99, descricao: 'Presunto Fatiado  | 500g' },
    { id: 20, nome: 'Mortadela', preco: 2.99, descricao: 'Mortadela Tradiciona  | 500g' },
    { id: 21, nome: 'Calabresa', preco: 1.99, descricao: 'Linguiça Calabresa  | Kg' },
    { id: 22, nome: 'Carne do Sol', preco: 1.99, descricao: 'Carne do Sol  | Kg' },
    { id: 23, nome: 'Bacon', preco: 1.99, descricao: 'Bacon Fatiad  | Kg' },
    { id: 24, nome: 'Costela', preco: 1.99, descricao: 'Costela Bovina  | Kg' },
];

const produtoos = [
    { id: 25, nome: 'Fio Dental', preco: 1.75, descricao: 'Colgate, Oral B | Unidade' },
    { id: 26, nome: 'Escova de Dente', preco: 1.99, descricao: 'Colgate, Oral B | Unidade' },
    { id: 27, nome: 'Amaciante', preco: 3.99, descricao: '1L: Downy, Confort, Baby Soft' },
    { id: 28, nome: 'Pasta de Dente', preco: 1.99, descricao: 'Oral B, Colgate, CloseUp | Unidade' },
    { id: 29, nome: 'Sabão de Coco', preco: 1.50, descricao: 'Barra, Ypê, Aguiar | Unidade' },
    { id: 30, nome: 'Pedra Sanitária', preco: 1.99, descricao: 'Pato, Font, Harpicc | Unidade' },
    { id: 31, nome: 'Detergente', preco: 1.99, descricao: 'Detergente para Louças | Unidade' },
    { id: 32, nome: 'Sabonete em Barra', preco: 2.99, descricao: 'Protex, Dove, Giorno Bagno | Unidade' },
    { id: 33, nome: 'Sabonete Líquido', preco: 2.99, descricao: 'Nivea, Protex, Lux, Monange | 500ml' },
    { id: 34, nome: 'Desinfetante', preco: 1.99, descricao: 'Ypê, Urca, Sol  | 1L' },
    { id: 35, nome: 'Álcool 70% | Líquido', preco: 1.99, descricao: 'New Age, Top  | 1L' },
    { id: 36, nome: 'Álcool 70% | Gel', preco: 1.99, descricao: 'New Age, Top  | 1L' },
];

let carrinho = [];

function exibirProdutos() {
    const produtosContainer = document.querySelector('.produtos');
    const produtossContainer = document.querySelector('.produtoss');
    const produtoosContainer = document.querySelector('.produtoos');

    // Limpa as listas antes de adicionar
    produtosContainer.innerHTML = '';
    produtossContainer.innerHTML = '';
    produtoosContainer.innerHTML = '';

    // Adiciona produtos de alimentos
    produtos.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <p>${produto.descricao}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        produtosContainer.appendChild(div);
    });

    // Adiciona produtos de frios
    produtoss.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <p>${produto.descricao}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        produtossContainer.appendChild(div);
    });

    // Adiciona produtos de limpeza
    produtoos.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <p>${produto.descricao}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        produtoosContainer.appendChild(div);
    });
}

function adicionarAoCarrinho(produtoId) {
    const produto = [...produtos, ...produtoss, ...produtoos].find(p => p.id === produtoId);
    const itemCarrinho = carrinho.find(item => item.id === produtoId);
    
    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    atualizarCarrinho();
}

function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.querySelector('.itens-carrinho');
    itensCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item-carrinho';
        div.innerHTML = `
            <span>${item.nome} (x${item.quantidade})</span>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            <button onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        itensCarrinho.appendChild(div);
        total += item.preco * item.quantidade;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', exibirProdutos);

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        return;
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    window.location.href = 'dados.html'; 
}

document.getElementById('meuBotao').addEventListener('click', function() {
    alert('Você clicou no botão!');
});

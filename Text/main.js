function mostrarSenha() {
  const inputPass = document.getElementById('senha')
    const btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bxs-lock-alt','bxs-lock-open-alt')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bxs-lock-open-alt','bxs-lock-alt')

    }

}

let carrinho = [];

document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;
        const id = produto.getAttribute('data-id');
        const nome = produto.querySelector('h3').textContent;
        const preco = parseFloat(produto.querySelector('p:nth-of-type(2)').textContent.replace('Preço: R$ ', ''));

        const item = { id, nome, preco };
        carrinho.push(item);
        atualizarCarrinho();
    });
});

function atualizarCarrinho() {
    const carrinhoCount = document.getElementById('carrinho-count');
    carrinhoCount.textContent = carrinho.length;
}
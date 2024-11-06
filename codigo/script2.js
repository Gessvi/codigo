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

        document.getElementById('meuBotao').addEventListener('click', function() {
            alert('Compra finalizada!'); 
            window.location.href = 'home.html'
        });
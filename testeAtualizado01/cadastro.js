//Cadastro 02//

document.querySelectorAll('.genre-button').forEach(button => {
    button.addEventListener('click', function() {
      // Remove seleção anterior
      document.querySelectorAll('.genre-button').forEach(btn => {
        btn.classList.remove('selected');
      });
      
      this.classList.add('selected');
      
      const btnSalvar = document.getElementById('btnSalvar');
      btnSalvar.textContent = `Salvar: ${this.textContent}`;
      btnSalvar.className = 'btn';
      
      btnSalvar.classList.add(`btn-${this.dataset.genre}`);
    });
});

//Função para salvar 

function salvarPreferencias() {
    try {
        const selected = document.querySelector('.genre-button.selected');
        if (!selected) {
            alert('Por favor, selecione um gênero!');
            return false;
        }
        
        if (typeof createFairyDust === 'function') {
            const btn = document.getElementById('btnSalvar');
            if (btn) {
                const rect = btn.getBoundingClientRect();
                createFairyDust(rect.left + 50, rect.top + 10);
            }
        }
       
        // Mostra mensagem de confirmação
        alert(`Preferência "${selected.textContent}" salva com sucesso!`);

        // Remove o alerta para evitar bloqueio
        console.log(`Preferência "${selected.textContent}" salva com sucesso!`);
        
        setTimeout(() => {
            try {
                window.location.href = "index.html";
            } catch (e) {
                console.error("Erro no redirecionamento:", e);
                window.location = "index.html";
            }
        }, 1000);
        
        return false; 
    } catch (error) {
        console.error("Erro ao salvar preferências:", error);
        return false;
    }
}

// EFEITO DE PÓ DE FADA
function createFairyDust(x, y) {
    const colors = ['#fde5cf', '#ffd700', '#ffffff', '#b08855'];
    const container = document.querySelector('.conteiner') || document.body;
    
    for (let i = 0; i < 15; i++) {
        const dust = document.createElement('div');
        dust.className = 'fairy-dust';
        dust.style.left = `${x}px`;
        dust.style.top = `${y}px`;
        dust.style.background = colors[Math.floor(Math.random() * colors.length)];
        dust.style.setProperty('--tx', `${Math.random() * 200 - 100}px`);
        dust.style.setProperty('--ty', `${Math.random() * -200}px`);
        dust.style.width = `${Math.random() * 6 + 4}px`;
        dust.style.height = dust.style.width;
        container.appendChild(dust);
        setTimeout(() => dust.remove(), 2000);
    }
}

// SELECIONAR GÊNERO
document.querySelectorAll('.genre-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Remove seleção anterior
        document.querySelectorAll('.genre-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Adiciona seleção atual
        this.classList.add('selected');
        
        // Efeito visual
        createFairyDust(e.clientX, e.clientY);
        
        // Atualiza botão principal
        const btnSalvar = document.getElementById('btnSalvar');
        btnSalvar.textContent = `✨ Revelar ${this.textContent} ✨`;
        btnSalvar.className = 'btn magic-btn';
        btnSalvar.classList.add(`btn-${this.dataset.genre}`);
        
        // Efeito mágico no botão
        btnSalvar.classList.add('animate');
        setTimeout(() => btnSalvar.classList.remove('animate'), 700);
    });
});
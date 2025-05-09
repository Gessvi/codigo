// LOGIN //

// COLOQUE O CIDGO AQUI AKIRA//

//Cadastro//

document.querySelectorAll('.genre-button').forEach(button => {
    button.addEventListener('click', function() {
      // Remove seleção anterior
      document.querySelectorAll('.genre-button').forEach(btn => {
        btn.classList.remove('selected');
      });
      
      // Adiciona seleção atual
      this.classList.add('selected');
      
      // Atualiza botão principal
      const btnSalvar = document.getElementById('btnSalvar');
      btnSalvar.textContent = `Salvar: ${this.textContent}`;
      btnSalvar.className = 'btn'; // Reseta classes
      
      // Adiciona classe de cor baseada no gênero
      btnSalvar.classList.add(`btn-${this.dataset.genre}`);
    });
  });

  function salvarPreferencias() {
    const selected = document.querySelector('.genre-button.selected');
    if (!selected) {
      alert('Por favor, selecione um gênero!');
      return;
    }
    alert(`Preferência "${selected.textContent}" salva com sucesso!`);
  }

  // BANCO DE DADOS DE LIVROS POR GÊNERO//

  const bookDatabase = {
    ficcao: [
      { title: "Duna", author: "Frank Herbert", emoji: "🏜️" },
      { title: "1984", author: "George Orwell", emoji: "👁️" },
      { title: "O Guia do Mochileiro das Galáxias", author: "Douglas Adams", emoji: "🌌" }
    ],
    comedia: [
      { title: "O Diário de um Banana", author: "Jeff Kinney", emoji: "🍌" },
      { title: "Meu Pé de Laranja Lima", author: "José Mauro de Vasconcelos", emoji: "🍊" }
    ],
    romance: [
      { title: "Orgulho e Preconceito", author: "Jane Austen", emoji: "💘" },
      { title: "A Culpa é das Estrelas", author: "John Green", emoji: "⭐" }
    ],
    terror: [
      { title: "It: A Coisa", author: "Stephen King", emoji: "🎈" },
      { title: "Drácula", author: "Bram Stoker", emoji: "🧛" }
    ],
    darkromance: [
      { title: "Corte de Espinhos e Rosas", author: "Sarah J. Maas", emoji: "🌹" },
      { title: "Corrupt", author: "Penelope Douglas", emoji: "🔥" }
    ],
    misterio: [
      { title: "O Assassinato no Expresso do Oriente", author: "Agatha Christie", emoji: "🔍" },
      { title: "Garota Exemplar", author: "Gillian Flynn", emoji: "🕵️" }
    ],
    autoajuda: [
      { title: "O Poder do Hábito", author: "Charles Duhigg", emoji: "🔄" },
      { title: "Mindset", author: "Carol S. Dweck", emoji: "🧠" }
    ]
  };

  // VARIÁVEL PARA RASTREAR SELEÇÃO
  let selectedGenre = null;

  // EFEITO DE PÓ DE FADA
  function createFairyDust(x, y) {
    const colors = ['#fde5cf', '#ffd700', '#ffffff', '#b08855'];
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
      document.querySelector('.conteiner').appendChild(dust);
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
      selectedGenre = this.dataset.genre;
      
      // Efeito visual
      createFairyDust(e.clientX, e.clientY);
      
      // Atualiza botão principal
      const btnSalvar = document.getElementById('btnSalvar');
      btnSalvar.textContent = `✨ Revelar ${this.textContent} ✨`;
      btnSalvar.className = 'btn magic-btn';
      btnSalvar.classList.add(`btn-${this.dataset.genre}`);
    });
  });

  // GERAR RECOMENDAÇÕES
  document.getElementById('btnSalvar').addEventListener('click', function() {
    if (!selectedGenre) {
      alert('Por favor, selecione um gênero primeiro!');
      return;
    }
    
    // Efeito mágico no botão
    this.classList.add('animate');
    setTimeout(() => this.classList.remove('animate'), 700);
    
    // Mostrar recomendações
    const recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = '';
    
    bookDatabase[selectedGenre].forEach(book => {
      const card = document.createElement('div');
      card.className = 'book-card animate__animated animate__fadeInUp';
      card.innerHTML = `
        <div class="book-title">${book.emoji} ${book.title}</div>
        <div class="book-author">${book.author}</div>
      `;
      recommendations.appendChild(card);
    });
    
    recommendations.classList.add('show');
    
    // Efeito final
    setTimeout(() => {
      createFairyDust(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
    }, 300);
  });
  
  let candleInterval;
    
    function activateTerrorMode() {
      document.body.classList.add('terror-mode');
      document.getElementById('mainContainer').classList.add('terror-mode');
      
      // Criar velas dinâmicas
      clearInterval(candleInterval);
      createCandles();
      candleInterval = setInterval(createCandles, 3000);
      
      // Efeito sonoro opcional (descomente se quiser)
      // const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-creepy-horror-ambience-289.mp3');
      // audio.loop = true;
      // audio.volume = 0.3;
      // audio.play();
    }
    
    function createCandles() {
      const candleLight = document.getElementById('candleLight');
      candleLight.innerHTML = '';
      
      // Criar 3-5 velas em posições aleatórias
      const candleCount = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < candleCount; i++) {
        const flame = document.createElement('div');
        flame.className = 'candle-flame';
        flame.style.left = `${10 + Math.random() * 80}%`;
        flame.style.top = `${10 + Math.random() * 80}%`;
        flame.style.width = `${80 + Math.random() * 40}px`;
        flame.style.height = `${120 + Math.random() * 60}px`;
        candleLight.appendChild(flame);
      }
    }
    
    // MODIFICAR A SELEÇÃO DE GÊNERO PARA INCLUIR O TERROR
    document.querySelectorAll('.genre-button').forEach(button => {
      button.addEventListener('click', function(e) {
        // ... (código anterior mantido) ...
        
        // Ativar modo terror se selecionado
        if (this.dataset.genre === 'terror') {
          activateTerrorMode();
        } else {
          document.body.classList.remove('terror-mode');
          document.getElementById('mainContainer').classList.remove('terror-mode');
          clearInterval(candleInterval);
        }
      });
    });
    
    // ADICIONAR LIVROS DE TERROR ESPECIAIS
    bookDatabase.terror = [
      { 
        title: "O Chamado de Cthulhu", 
        author: "H.P. Lovecraft", 
        emoji: "🐙",
        specialEffect: true
      },
      { 
        title: "Drácula", 
        author: "Bram Stoker", 
        emoji: "🧛",
        specialEffect: true
      },
      { 
        title: "It: A Coisa", 
        author: "Stephen King", 
        emoji: "🎈",
        specialEffect: true
      }
    ];
    
    // MODIFICAR A EXIBIÇÃO PARA INCLUIR EFEITOS ESPECIAIS
    function displayRecommendations() {
      // ... (código anterior) ...
      
      bookDatabase[selectedGenre].forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card animate__animated animate__fadeInUp';
        
        // Efeito especial para livros de terror
        if (book.specialEffect && selectedGenre === 'terror') {
          card.style.background = 'linear-gradient(to right, rgba(40, 10, 25, 0.7), rgba(80, 20, 45, 0.5))';
          card.style.borderLeft = '3px solid #8a2a52';
          card.style.boxShadow = '0 0 10px rgba(138, 42, 82, 0.5)';
        }
        
        card.innerHTML = `...`; // Mantenha o conteúdo anterior
        recommendations.appendChild(card);
      });
    }
// MENU LATERAL //

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-lateral');
let overlay = document.getElementById('overlay-topo');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu'); 
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

// SENHA //
function mostrarSenha() {
  const input = document.getElementById('senha');
  const icon = document.getElementById('btn-senha');
  
  if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("bi-eye-slash-fill");
      icon.classList.add("bi-eye-fill");
  } else {
      input.type = "password";
      icon.classList.remove("bi-eye-fill");
      icon.classList.add("bi-eye-slash-fill");
  }
}

/* PERFIL */
    document.addEventListener('DOMContentLoaded', function() {
            // Elementos do DOM
            const bannerUploadInput = document.getElementById('banner-upload');
            const profileBanner = document.getElementById('profile-banner');
            const profilePictureInput = document.getElementById('profile-picture');
            const profilePicturePreview = document.getElementById('profile-picture-preview');
            const form = document.getElementById('profile-form');
            const bioTextarea = document.getElementById('bio');
            const bioCounter = document.getElementById('bio-counter');
            const successMessage = document.getElementById('success-message');
            const cancelButton = document.querySelector('.cancel-button');
            const backButton = document.getElementById('back-button');

            // 1. Função para alterar o BANNER
            bannerUploadInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                
                if (!file) return;
                
                // Verifica se é uma imagem
                if (!file.type.match('image.*')) {
                    alert('Por favor, selecione um arquivo de imagem (JPEG, PNG, etc.)');
                    return;
                }
                
                // Verifica o tamanho (máximo 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('A imagem deve ter no máximo 5MB');
                    return;
                }
                
                const reader = new FileReader();
                
                reader.onload = function(event) {
                    profileBanner.style.backgroundImage = `url(${event.target.result})`;
                    profileBanner.style.backgroundSize = 'cover';
                    profileBanner.style.backgroundPosition = 'center';
                };
                
                reader.onerror = function() {
                    alert('Erro ao ler a imagem. Tente novamente.');
                };
                
                reader.readAsDataURL(file);
            });

            // 2. Função para alterar a FOTO DE PERFIL
            profilePictureInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                
                if (!file) return;
                
                if (!file.type.match('image.*')) {
                    alert('Por favor, selecione um arquivo de imagem (JPEG, PNG, etc.)');
                    return;
                }
                
                if (file.size > 5 * 1024 * 1024) {
                    alert('A imagem deve ter no máximo 5MB');
                    return;
                }
                
                const reader = new FileReader();
                
                reader.onload = function(event) {
                    profilePicturePreview.src = event.target.result;
                };
                
                reader.onerror = function() {
                    alert('Erro ao ler a imagem. Tente novamente.');
                };
                
                reader.readAsDataURL(file);
            });

            // 3. Botão de voltar
            backButton.addEventListener('click', function() {
                window.location.href = 'index.html';
            });

            // 4. Contador de caracteres para bio
            bioTextarea.addEventListener('input', function() {
                const currentLength = this.value.length;
                bioCounter.textContent = currentLength;
                
                if (currentLength > 200) {
                    this.value = this.value.substring(0, 200);
                    bioCounter.textContent = 200;
                }
            });

            // 5. Validação de nome
            document.getElementById('name').addEventListener('blur', function() {
                const nameError = document.getElementById('name-error');
                if (!this.value.trim()) {
                    showError(nameError, 'O nome é obrigatório');
                } else if (this.value.length < 3) {
                    showError(nameError, 'O nome deve ter pelo menos 3 caracteres');
                } else {
                    hideError(nameError);
                }
            });
            
            // 6. Validação de username
            document.getElementById('username').addEventListener('blur', function() {
                const usernameError = document.getElementById('username-error');
                const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
                
                if (!this.value.trim()) {
                    showError(usernameError, 'O username é obrigatório');
                } else if (!usernameRegex.test(this.value)) {
                    showError(usernameError, 'Use apenas letras, números e underline (4-20 caracteres)');
                } else {
                    hideError(usernameError);
                }
            });
            
            // 7. Validação de e-mail
            document.getElementById('email').addEventListener('blur', function() {
                const emailError = document.getElementById('email-error');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (!this.value.trim()) {
                    showError(emailError, 'O e-mail é obrigatório');
                } else if (!emailRegex.test(this.value)) {
                    showError(emailError, 'Digite um e-mail válido');
                } else {
                    hideError(emailError);
                }
            });
            
            // 8. Botão cancelar
            cancelButton.addEventListener('click', function() {
                if (confirm('Tem certeza que deseja cancelar? Todas as alterações serão perdidas.')) {
                    form.reset();
                    profilePicturePreview.src = 'https://via.placeholder.com/150';
                    profileBanner.style.backgroundImage = 'none';
                    profileBanner.style.backgroundColor = '#C9A98C';
                    bioCounter.textContent = '0';
                    hideAllErrors();
                }
            });
            
            // 9. Envio do formulário
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                document.getElementById('name').dispatchEvent(new Event('blur'));
                document.getElementById('username').dispatchEvent(new Event('blur'));
                document.getElementById('email').dispatchEvent(new Event('blur'));
                
                const errors = document.querySelectorAll('.error-message[style="display: block;"]');
                if (errors.length > 0) {
                    alert('Por favor, corrija os erros antes de enviar.');
                    return;
                }
                
                simulateSubmit();
            });
            
            // Funções auxiliares
            function showError(element, message) {
                element.textContent = message;
                element.style.display = 'block';
                element.previousElementSibling.style.borderColor = '#f72585';
            }
            
            function hideError(element) {
                element.style.display = 'none';
                element.previousElementSibling.style.borderColor = '#C9A98C';
            }
            
            function hideAllErrors() {
                document.querySelectorAll('.error-message').forEach(el => {
                    el.style.display = 'none';
                    el.previousElementSibling.style.borderColor = '#C9A98C';
                });
            }
            
            function simulateSubmit() {
                form.style.opacity = '0.7';
                form.querySelector('button[type="submit"]').disabled = true;
                
                setTimeout(function() {
                    successMessage.style.display = 'flex';
                    form.style.display = 'none';
                    
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                        form.style.display = 'block';
                        form.style.opacity = '1';
                        form.querySelector('button[type="submit"]').disabled = false;
                    }, 3000);
                }, 1500);
            }
        });


// LIVROS FAVORITOS//

// RECOMENDAÇÕES E NOVIDADES//


// LOGIN //
function mostrarSenha() {
    const inputPass = document.getElementById('senha');
    const btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') {
        inputPass.type = 'text';
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.type = 'password';
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}


// COLOQUE O CIDGO AQUI AKIRA//

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

//MENU LATERAL//

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

document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelectorAll('.bar');
    const slideContainer = document.querySelector('.slide');
    let currentIndex = 0;

    bars.forEach((bar, index) => {
        bar.addEventListener('click', () => {

            if (index === 0) {
                slideContainer.style.transform = 'translateX(0)'; 
                currentIndex = 0;
            } else if (index === 1) {
                slideContainer.style.transform = 'translateX(-100vw)';
                currentIndex = 1;
            }
        });
    });
});

// LIVROS SALVOS// 

function carregarLivrarias() {
    const container = document.querySelector('#submenu-livrarias .submenu-items');
    
    const livrariasExemplo = [];
    
    livrariasExemplo.forEach(livraria => {
        const livrariaHTML = `
            <li class="livraria-item">
                <div class="livraria-container">
                    <img src="${livraria.imagem}" alt="${livraria.nome}" class="livraria-imagem">
                    <div class="livraria-info">
                        <span class="livraria-nome">${livraria.nome}</span>
                        <span class="livraria-local">${livraria.local}</span>
                    </div>
                    <div class="livraria-actions">
                        <i class="bi bi-trash lixeira"></i>
                        <i class="bi bi-three-dots livraria-menu"></i>
                    </div>
                </div>
            </li>
        `;
        container.insertAdjacentHTML('afterbegin', livrariaHTML);
    });
    
    document.querySelectorAll('#submenu-livrarias .lixeira').forEach(lixeira => {
        lixeira.addEventListener('click', function(event) {
            event.stopPropagation();
            livroParaRemover = this.closest('.livraria-item');
            showModal();
        });
    });
    
    document.querySelectorAll('#submenu-livrarias .livraria-imagem').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            expandirImagem(this);
        });
    });
}

function expandirImagem(imgElement) {
    const modal = document.getElementById('imageModal');
    const expandedImg = document.getElementById('expandedImage');
    const imageTitle = document.getElementById('imageTitle');
    
    expandedImg.src = imgElement.src;
    expandedImg.alt = imgElement.alt;
    
    const container = imgElement.closest('.livro-container, .livraria-container');
    if (container) {
        const titleElement = container.querySelector('.livro-titulo, .livraria-nome');
        if (titleElement) {
            imageTitle.textContent = titleElement.textContent;
        }
    }
    
    modal.style.display = 'flex';
}

//CODIGO DE IMAGEM //
// Configuração inicial para imagens ampliáveis
document.addEventListener('DOMContentLoaded', function() {
    // Modal para imagem ampliada
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close-btn');
    
    // Adiciona evento de clique para imagens dos livros
    document.querySelectorAll('.livro-imagem').forEach(img => {
        img.addEventListener('click', function() {
            expandirImagem(this);
        });
    });
    
    // Fecha o modal ao clicar no botão de fechar
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Fecha o modal ao pressionar a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
    
    // Configuração do menu de livrarias (mantida conforme seu código)
    document.getElementById('livrarias-menu').addEventListener('click', function() {
        if (!this.dataset.carregado) {
            carregarLivrarias();
            this.dataset.carregado = true;
        }
    }, { once: true });
});


// LIVRARIAS //

document.addEventListener('DOMContentLoaded', function() {
    // ===== [1] ELEMENTOS PRINCIPAIS =====
    const btnMenu = document.getElementById('btn-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const overlay = document.getElementById('overlay-topo');
    const btnFechar = document.querySelector('.btn-fechar');
    
    // ===== [2] FUNÇÕES DO MENU PRINCIPAL =====
    function abrirMenuPrincipal() {
        menuLateral.classList.add('abrir-menu');
        overlay.style.display = 'block';
        fecharSubmenus();
    }
    
    function fecharTodosMenus() {
        menuLateral.classList.remove('abrir-menu');
        fecharSubmenus();
        overlay.style.display = 'none';
    }
    
    function fecharSubmenus() {
        document.querySelectorAll('.submenu-lateral').forEach(sub => {
            sub.classList.remove('active');
        });
    }
    
    // ===== [3] EVENTOS DO MENU PRINCIPAL =====
    btnMenu.addEventListener('click', abrirMenuPrincipal);
    btnFechar.addEventListener('click', fecharTodosMenus);
    overlay.addEventListener('click', fecharTodosMenus);
    
    // ===== [4] SUBMENU LIVROS SALVOS =====
    const livrosSalvosBtn = document.getElementById('livros-salvos');
    const submenuLivros = document.getElementById('submenu-livros');
    
    livrosSalvosBtn.addEventListener('click', function(event) {
        event.preventDefault();
        menuLateral.classList.remove('abrir-menu');
        submenuLivros.classList.add('active');
        overlay.style.display = 'block';
    });
    
    document.querySelector('#submenu-livros .voltar-submenu').addEventListener('click', function() {
        submenuLivros.classList.remove('active');
        abrirMenuPrincipal();
    });
    
    // ===== [5] SUBMENU LIVRARIAS =====
    const livrariasMenu = document.getElementById('livrarias-menu');
    const submenuLivrarias = document.getElementById('submenu-livrarias');
    
    livrariasMenu.addEventListener('click', function(event) {
        event.preventDefault();
        menuLateral.classList.remove('abrir-menu');
        submenuLivrarias.classList.add('active');
        overlay.style.display = 'block';
        
        // Carrega dados adicionais na primeira vez
        if (!this.dataset.carregado) {
            carregarLivrariasAdicionais();
            this.dataset.carregado = true;
        }
    });
    
    document.getElementById('voltar-livrarias').addEventListener('click', function() {
        submenuLivrarias.classList.remove('active');
        abrirMenuPrincipal();
    });
    
    // ===== [7] SISTEMA DE REMOÇÃO =====
    let livroParaRemover = null;
    let ultimoLivroRemovido = null;
    let timeoutRemocao = null;
    
    document.querySelectorAll('.lixeira').forEach(lixeira => {
        lixeira.addEventListener('click', function(event) {
            event.stopPropagation();
            livroParaRemover = this.closest('.livro-item, .livraria-item');
            showModal();
        });
    });
    
    // Modal functions
    function showModal() {
        document.getElementById('confirm-modal').style.display = 'flex';
    }
    
    function hideModal() {
        document.getElementById('confirm-modal').style.display = 'none';
    }
    
    document.querySelector('.btn-confirm').addEventListener('click', function() {
        hideModal();
        removerItem();
    });
    
    document.querySelector('.btn-cancel').addEventListener('click', hideModal);
    
    function removerItem() {
        if (!livroParaRemover) return;
        
        ultimoLivroRemovido = {
            element: livroParaRemover,
            parent: livroParaRemover.parentNode,
            nextSibling: livroParaRemover.nextElementSibling
        };
        
        // Animação
        livroParaRemover.style.opacity = '0';
        livroParaRemover.style.transform = 'translateX(-100%)';
        livroParaRemover.style.transition = 'all 0.5s ease';
        
        setTimeout(function() {
            livroParaRemover.style.display = 'none';
        }, 500);
        
        showSnackbar();
        
        timeoutRemocao = setTimeout(function() {
            if (livroParaRemover && livroParaRemover.parentNode) {
                livroParaRemover.remove();
            }
            ultimoLivroRemovido = null;
        }, 5000);
    }
    
    function showSnackbar() {
        document.getElementById('snackbar').classList.add('show');
        setTimeout(function() {
            document.getElementById('snackbar').classList.remove('show');
        }, 5000);
    }
    
    document.getElementById('btn-undo').addEventListener('click', function() {
        if (!ultimoLivroRemovido) return;
        
        clearTimeout(timeoutRemocao);
        const element = ultimoLivroRemovido.element;
        const parent = ultimoLivroRemovido.parent;
        const nextSibling = ultimoLivroRemovido.nextSibling;
        
        element.style.display = '';
        element.style.opacity = '0';
        element.style.transform = 'translateX(100%)';
        
        if (nextSibling) {
            parent.insertBefore(element, nextSibling);
        } else {
            parent.appendChild(element);
        }
        
        void element.offsetWidth;
        element.style.transition = 'all 0.5s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
        element.classList.add('restored');
        
        document.getElementById('snackbar').classList.remove('show');
        ultimoLivroRemovido = null;
    });
    
    // ===== [8] CARREGAMENTO DE LIVRARIAS =====
    function carregarLivrariasAdicionais() {
        // Array vazio ou com outras livrarias que desejar manter
        const livrariasAdicionais = [];
    
        const container = document.getElementById('lista-livrarias');
        
        livrariasAdicionais.forEach(function(liv) {
            const livrariaHTML = `
                <li class="livraria-item" data-distancia="${liv.distancia}">
                    <div class="livraria-container">
                        <img src="${liv.imagem}" alt="${liv.nome}" class="livraria-imagem">
                        <div class="livraria-info">
                            <span class="livraria-nome">${liv.nome}
                                ${liv.promocao ? '<span class="tag-promocao">PROMO</span>' : ''}
                            </span>
                            <div class="livraria-metadata">
                                <span class="livraria-status ${liv.status}">${liv.status === 'aberto' ? 'Aberto' : 'Fechado'}</span>
                                <span class="livraria-local">${liv.distancia}km</span>
                            </div>
                            <div class="livraria-avaliacao">
                                ${renderEstrelas(liv.avaliacao)}
                                <span class="avaliacao-texto">${liv.avaliacao.toFixed(1)} (${liv.reviews})</span>
                            </div>
                            <div class="livraria-funcionamento">
                                <span class="livraria-status" data-horario="${liv.horario}"></span>
                                <span class="livraria-contador"></span>
                                <span class="livraria-horario"></span>
                            </div>
                        </div>
                        <div class="livraria-actions">
                            <i class="bi bi-trash lixeira"></i>
                            <a href="https://maps.google.com?q=${liv.endereco}" class="btn-mapa" target="_blank">
                                <i class="bi bi-geo-alt-fill"></i>
                            </a>
                        </div>
                    </div>
                </li>
            `;
            container.insertAdjacentHTML('beforeend', livrariaHTML);
        });
        
        // Atualiza horários após carregar
        atualizarHorarios();
    }
    
    function renderEstrelas(nota) {
        let estrelas = '';
        const estrelasCheias = Math.floor(nota);
        const temMeia = nota % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= estrelasCheias) {
                estrelas += '<i class="bi bi-star-fill"></i>';
            } else if (i === estrelasCheias + 1 && temMeia) {
                estrelas += '<i class="bi bi-star-half"></i>';
            } else {
                estrelas += '<i class="bi bi-star"></i>';
            }
        }
        return estrelas;
    }

    // Função para atualizar horários (se necessário)
    function atualizarHorarios() {
        // Implementação da função se necessário
    }
});

// PERFIL//

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

// EXIBIR LIVROS//

        document.addEventListener('DOMContentLoaded', function() {
            const paginas = document.querySelectorAll('.paginacao button');
            
            paginas.forEach(pagina => {
                pagina.addEventListener('click', function() {
                    // Remove a classe active de todos os botões
                    paginas.forEach(p => p.classList.remove('active'));
                    
                    // Adiciona a classe active ao botão clicado
                    this.classList.add('active');
                    
                });
            });
        });

        //CARROSSEL DAS NOVIDADES E RECOMENDAÇÕES//

 document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os carrosséis
    const carrosseis = document.querySelectorAll('.carrossel-container');
    
    carrosseis.forEach(carrosselContainer => {
        const carrossel = carrosselContainer.querySelector('.carrossel');
        const containerImagens = carrosselContainer.querySelector('.container-imagens');
        const prevBtn = carrosselContainer.querySelector('.prev-btn');
        const nextBtn = carrosselContainer.querySelector('.next-btn');
        
        const itemWidth = 200;
        const scrollAmount = itemWidth * 3;
        
        // Botão Anterior
        prevBtn.addEventListener('click', () => {
            carrossel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Botão Próximo
        nextBtn.addEventListener('click', () => {
            carrossel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Opcional: Desativar botões quando chegar ao início/fim
        const updateButtons = () => {
            prevBtn.disabled = carrossel.scrollLeft <= 0;
            nextBtn.disabled = carrossel.scrollLeft + carrossel.clientWidth >= containerImagens.scrollWidth;
        };
        
        carrossel.addEventListener('scroll', updateButtons);
        updateButtons();
    });
});
// LOGIN //

// COLOQUE O CIDGO AQUI AKIRA//


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


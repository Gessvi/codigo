 // DOM Elements
 const themeToggle = document.getElementById('theme-toggle');
 const emailNotifications = document.getElementById('email-notifications');
 const toast = document.getElementById('toast');
 const changeEmailBtn = document.getElementById('change-email');
 const termsModal = document.getElementById('terms-modal');
 const closeTermsBtn = document.getElementById('close-terms');

 
 // Modal Elements
 const emailModal = document.getElementById('email-modal');
 const passwordModal = document.getElementById('password-modal');
 const recoveryEmailModal = document.getElementById('recovery-email-modal');
 const confirmDeleteModal = document.getElementById('confirm-delete-modal');
 const feedbackModal = document.getElementById('feedback-modal');
 
 // Buttons
 const deleteAccountBtn = document.getElementById('delete-account');
 const addRecoveryEmailBtn = document.getElementById('add-recovery-email');
 const changePasswordBtn = document.getElementById('change-password');
 const rateAppBtn = document.getElementById('rate-app');
 const rateLocationsBtn = document.getElementById('rate-locations');
 const rateCommsBtn = document.getElementById('rate-comms');
 const viewTermsBtn = document.getElementById('view-terms');
 
 // Form Buttons
 const cancelEmailBtn = document.getElementById('cancel-email');
 const saveEmailBtn = document.getElementById('save-email');
 const cancelPasswordBtn = document.getElementById('cancel-password');
 const savePasswordBtn = document.getElementById('save-password');
 const cancelRecoveryBtn = document.getElementById('cancel-recovery');
 const saveRecoveryBtn = document.getElementById('save-recovery');
 const cancelDeleteBtn = document.getElementById('cancel-delete');
 const confirmDeleteBtn = document.getElementById('confirm-delete');
 const cancelFeedbackBtn = document.getElementById('cancel-feedback');
 const submitFeedbackBtn = document.getElementById('submit-feedback');
 
 // Load saved settings
 document.addEventListener('DOMContentLoaded', () => {
     // Load theme preference
     if (localStorage.getItem('darkMode') === 'enabled') {
         document.body.classList.add('dark-mode');
     }
     
     // Load notification preference
     if (localStorage.getItem('emailNotifications') === 'false') {
         emailNotifications.checked = false;
     }
 });
 
 // Theme Toggle
 themeToggle.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
     
     if (document.body.classList.contains('dark-mode')) {
         localStorage.setItem('darkMode', 'enabled');
         showToast('Modo escuro ativado');
     } else {
         localStorage.setItem('darkMode', 'disabled');
         showToast('Modo claro ativado');
     }
 });
 
 // Email Notifications Toggle
 emailNotifications.addEventListener('change', () => {
     localStorage.setItem('emailNotifications', emailNotifications.checked);
     showToast(`Notificações por e-mail ${emailNotifications.checked ? 'ativadas' : 'desativadas'}`);
 });
 
 // Delete Account Confirmation
 deleteAccountBtn.addEventListener('click', () => {
     confirmDeleteModal.style.display = 'flex';
 });
 
 cancelDeleteBtn.addEventListener('click', () => {
     confirmDeleteModal.style.display = 'none';
 });
 
 confirmDeleteBtn.addEventListener('click', () => {
     confirmDeleteModal.style.display = 'none';
     showToast('Conta excluída com sucesso');
     // In a real app, you would send a request to delete the account
     setTimeout(() => {
         alert('Redirecionando para a página inicial...');
         // window.location.href = '/';
     }, 1500);
 });

 cancelEmailBtn.addEventListener('click', () => {
    emailModal.style.display = 'none';
    document.getElementById('new-email').value = '';
    document.getElementById('confirm-email').value = '';
});
 
 // Change Password
 changeEmailBtn.addEventListener('click', () => {
    emailModal.style.display = 'flex';
});
 changePasswordBtn.addEventListener('click', () => {
     passwordModal.style.display = 'flex';
 });
 
 cancelPasswordBtn.addEventListener('click', () => {
     passwordModal.style.display = 'none';
 });
 
 saveEmailBtn.addEventListener('click', () => {
    const newEmail = document.getElementById('new-email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    
    if (!newEmail || !confirmEmail) {
        showToast('Preencha todos os campos', true);
        return;
    }
    
    if (newEmail !== confirmEmail) {
        showToast('Os e-mails não coincidem', true);
        return;
    }
    
    if (!validateEmail(newEmail)) {
        showToast('Por favor, insira um e-mail válido', true);
        return;
    }
    
    document.getElementById('current-email').textContent = newEmail;
    emailModal.style.display = 'none';
    showToast('E-mail alterado com sucesso');
    // Clear form
    document.getElementById('new-email').value = '';
    document.getElementById('confirm-email').value = '';
});
 // Add Recovery Email
 addRecoveryEmailBtn.addEventListener('click', () => {
     recoveryEmailModal.style.display = 'flex';
 });
 
 cancelRecoveryBtn.addEventListener('click', () => {
     recoveryEmailModal.style.display = 'none';
 });
 
 saveRecoveryBtn.addEventListener('click', () => {
     const recoveryEmail = document.getElementById('recovery-email').value;
     if (validateEmail(recoveryEmail)) {
         recoveryEmailModal.style.display = 'none';
         showToast('E-mail de recuperação adicionado com sucesso');
         document.getElementById('recovery-email').value = '';
     } else {
         showToast('Por favor, insira um e-mail válido', true);
     }
 });
 
 // Feedback Modals
 rateAppBtn.addEventListener('click', () => {
     document.getElementById('feedback-title').textContent = 'Avaliação do Aplicativo';
     feedbackModal.style.display = 'flex';
 });
 
 rateLocationsBtn.addEventListener('click', () => {
     document.getElementById('feedback-title').textContent = 'Avaliação da Precisão das Localizações';
     feedbackModal.style.display = 'flex';
 });
 
 rateCommsBtn.addEventListener('click', () => {
     document.getElementById('feedback-title').textContent = 'Avaliação das Comunicações Recebidas';
     feedbackModal.style.display = 'flex';
 });
 
 cancelFeedbackBtn.addEventListener('click', () => {
     feedbackModal.style.display = 'none';
     document.getElementById('feedback-rating').value = '';
     document.getElementById('feedback-comment').value = '';
 });
 
 submitFeedbackBtn.addEventListener('click', () => {
     const rating = document.getElementById('feedback-rating').value;
     const comment = document.getElementById('feedback-comment').value;
     
     if (rating && rating >= 1 && rating <= 5) {
         feedbackModal.style.display = 'none';
         showToast('Obrigado pelo seu feedback!');
         document.getElementById('feedback-rating').value = '';
         document.getElementById('feedback-comment').value = '';
         
         // In a real app, you would send this data to your server
         console.log('Feedback submitted:', { rating, comment });
     } else {
         showToast('Por favor, dê uma nota entre 1 e 5', true);
     }
 });
 
 // View Terms
 viewTermsBtn.addEventListener('click', () => {
    termsModal.style.display = 'flex';
});
closeTermsBtn.addEventListener('click', () => {
    termsModal.style.display = 'none';
});
 // Helper Functions
 function validateEmail(email) {
     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return re.test(email);
 }
 
 function showToast(message, isError = false) {
     toast.textContent = message;
     toast.className = isError ? 'toast error show' : 'toast show';
     
     setTimeout(() => {
         toast.classList.remove('show');
     }, 3000);
 }

 
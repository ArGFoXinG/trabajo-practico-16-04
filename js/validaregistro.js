document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-register');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('passw');
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');
    const dateInput = document.getElementById('date');
    const countryInput = document.getElementById('country');
    const registerBtn = document.getElementById('registerBtn');
    const termsCheckbox = document.getElementById('terms');

    registerBtn.addEventListener('click', function(event) {
        
        if (!nameInput.value || !lastNameInput.value || !emailInput.value || !passwordInput.value || !dateInput.value || !countryInput.value) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Validar email
        const emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            alert('Por favor, introduce un correo electrónico válido.');
            emailInput.focus();
            return;
        }

        // Validar contraseña
        const passwordValue = passwordInput.value.trim();
        if (!isValidPassword(passwordValue)) {
            alert('La contraseña debe tener al menos 6 caracteres y contener números y letras.');
            passwordInput.focus();
            return;
        }

        // Validar aceptación de términos y condiciones
        if (!termsCheckbox.checked) {
            alert('Por favor, acepta los términos y condiciones.');
            return;
        }

        // Si todas las validaciones pasan, se envía el formulario
        form.submit();
    });

    // Función para validar el formato del correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Función para validar el formato de la contraseña
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return passwordRegex.test(password);
    }
})
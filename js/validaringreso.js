document.getElementById('form-enter').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var passw = document.getElementById('passw').value;

    // Validación del correo electrónico
    if (!email || email.trim() === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault();
        return;
    }

    // Validación de la contraseña
    if (!passw || passw.trim() === '' || passw.length < 6 || !/\d/.test(passw) || !/[a-zA-Z]/.test(passw)) {
        alert('La contraseña debe tener al menos 6 caracteres y contener números y letras.');
        event.preventDefault();
        return;
    }

   
});
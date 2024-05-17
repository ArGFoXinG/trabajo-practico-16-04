document.getElementById("form-contact").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var lastNameInput = document.getElementById("last-name");
    var emailInput = document.getElementById("email");
    var dateInput = document.getElementById("date");
    var consultaSelect = document.getElementById("consulta");
    var comentarioTextarea = document.getElementById("comentario");

    var nameError = document.getElementById("name-error");
    var lastNameError = document.getElementById("last-name-error");
    var emailError = document.getElementById("email-error");
    var dateError = document.getElementById("date-error");
    var consultaError = document.getElementById("consulta-error");
    var comentarioError = document.getElementById("comentario-error");

    // Reiniciar los mensajes de error
    nameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    dateError.textContent = "";
    consultaError.textContent = "";
    comentarioError.textContent = "";

    // Validar campos
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Por favor, ingresa tu nombre";
        event.preventDefault(); 
    }

    if (lastNameInput.value.trim() === "") {
        lastNameError.textContent = "Por favor, ingresa tu apellido";
        event.preventDefault(); 
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Por favor, ingresa tu correo electrónico";
        event.preventDefault(); 
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido";
        event.preventDefault(); 
    }

    if (dateInput.value.trim() === "") {
        dateError.textContent = "Por favor, ingresa tu fecha de nacimiento";
        event.preventDefault(); 
    }

    if (consultaSelect.value === "") {
        consultaError.textContent = "Por favor, selecciona una opción";
        event.preventDefault(); 
    }

    if (comentarioTextarea.value.trim() === "") {
        comentarioError.textContent = "Por favor, escribe tu consulta";
        event.preventDefault(); 
    }

});

function isValidEmail(email) {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}







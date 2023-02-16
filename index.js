const form = document.getElementById('register-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const claveInput = document.getElementById('clave');
const confirmeClaveInput = document.getElementById('confirme-clave');

form.addEventListener('submit', function (event) {
    let valid = true;

    if (nombreInput.value === '') {
        setErrorFor(nombreInput, 'Rellene este campo');
        valid = false;
    } else if (!/^[a-zA-Z ]*$/.test(nombreInput.value)) {
        setErrorFor(nombreInput, 'Solo letras permitidas');
        valid = false;
    } else {
        setValidFor(nombreInput);
    }

    if (emailInput.value === '') {
        setErrorFor(emailInput, 'Rellene este campo');
        valid = false;
    } else if (!isValidEmail(emailInput.value)) {
        setErrorFor(emailInput, 'Incluye un signo @ en la dirección de correo electrónico');
        valid = false;
    } else {
        setValidFor(emailInput);
    }

    if (claveInput.value === '') {
        setErrorFor(claveInput, 'Rellene este campo');
        valid = false;
    } else if (claveInput.value.length > 8) {
        setErrorFor(claveInput, 'Máximo 8 caracteres');
        valid = false;
    } else {
        setValidFor(claveInput);
    }

    if (confirmeClaveInput.value === '') {
        setErrorFor(confirmeClaveInput, 'Rellene este campo');
        valid = false;
    } else if (confirmeClaveInput.value !== claveInput.value) {
        setErrorFor(confirmeClaveInput, 'Las claves no coinciden');
        valid = false;
    } else {
        setValidFor(confirmeClaveInput);
    }

    if (!valid) {
        event.preventDefault();
    } else {
        alert('Inscripción correcta');
    }
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');

    input.classList.add('invalid');
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function setValidFor(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');

    input.classList.remove('invalid');
    input.classList.add('valid');
    errorElement.style.display = 'none';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
}
    /*En este código, se utiliza JavaScript para validar los datos ingresados
en el formulario y dar feedback al usuario en tiempo real a través de la 
manipulación del DOM. En caso de que algún dato no sea válido, se agrega 
una clase CSS "invalid" al campo correspondiente y se muestra un mensaje de error. 
Si el campo es válido, se agrega una clase CSS "valid" al campo. Cuando se envía el 
formulario, se comprueba que todos los campos sean válidos. Si no es así, 
se evita que se envíe el formulario y se muestran los errores.
Si todos los campos son válidos, se muestra una alerta indicando que la inscripción ha sido correcta.*/
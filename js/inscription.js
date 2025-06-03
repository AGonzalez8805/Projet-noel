const inputEmail = document.getElementById('Email');
const inputName = document.getElementById('Name');
const inputFirstName = document.getElementById('firstName');
const inputPassword = document.getElementById('Password');
const inputValidatePassword = document.getElementById('validatePassword');

const btnValidation = document.getElementById('btnValidation');

inputEmail.addEventListener('keyup', validateForm);
inputName.addEventListener('keyup', validateForm);
inputFirstName.addEventListener('keyup', validateForm);
inputPassword.addEventListener('keyup', validateForm);
inputValidatePassword.addEventListener('keyup', validateForm);

btnValidation.addEventListener("click", checkCredentials);

function validateForm() {
    const mailOk = validateMail(inputEmail);
    const nomOk = validateRequired(inputName);
    const prenomOk = validateRequired(inputFirstName);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

    if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {
        btnValidation.disabled = false;
    } else {
        btnValidation.disabled = true;
    }
}

function validateMail(input) {
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input) {
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
    if (inputPwd.value === inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}


function checkCredentials() {
    // Vérifie si le bouton de validation est activé (signifie que le formulaire est valide)
    if (!btnValidation.disabled) {

        window.location.href = "pages/connexion.html";
    }
}






let pswd1 = document.getElementById("pass");
let pswd2 = document.getElementById("repeat");
const form = document.querySelector('#createacc');
const passwordInput = document.querySelector('#pass');
const confirmPasswordInput = document.querySelector('#repeat');

form.addEventListener('submit', (event) => {
    validateForm();
    console.log(isFormValid());
    if (isFormValid() == true) {
        event.preventDefault();
        openPopup();
    } else {
        event.preventDefault();
    }

});

function show1() {
    if (pswd1.type === 'password') {
        pswd1.setAttribute('type', 'text');
    }
    else {
        pswd1.setAttribute('type', 'password');
    }
}

function show2() {
    if (pswd2.type === 'password') {
        pswd2.setAttribute('type', 'text');
    }
    else {
        pswd2.setAttribute('type', 'password');
    }
}

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //PASSWORD
    if (passwordInput.value.trim() == '') {
        setError(passwordInput, 'Password can not be empty');
    } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
        setError(passwordInput, 'Password min 6 max 20 charecters');
    } else {
        setSuccess(passwordInput);
    }
    //CONFIRM PASSWORD
    if (confirmPasswordInput.value.trim() == '') {
        setError(confirmPasswordInput, 'Password can not be empty');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, 'Password does not match');
    } else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
let popup = document.getElementById("pop-up");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}
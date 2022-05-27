const full_name = document.getElementById('full_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pwdConfirm = document.getElementById('pwdConfirm');
const passwordHelp = document.getElementById('passwordHelp')
const pwdConfirmHelp = document.getElementById('pwdConfirmHelp')
const emailHelp = document.getElementById('emailHelp')
const form = document.getElementById('formId');
const checkBox = document.getElementById('checkBox');

// Validation form 
form.addEventListener('keyup', (e) => {
    e.preventDefault()  
console.log(full_name.value.length);
    // Check if full name is empty or null
    if (full_name.value.length < 8) {
        setError(full_name, 'red');
        return;
    }else {
        setSuccess(full_name, 'green')
    }

    // Check if email is empty or null && fomrat isEmail
    if (email.value =="" || email.value ==null) {
        return setError(email, 'red');
    }else if (!emailValidate(email.value)) {
        emailHelp.innerHTML = 'Adresse e-mail non valide!';
        return setError(email, 'red');
    }else{
        setSuccess(email, 'green')
        emailHelp.style.display = 'none';
    }

    // Check if full password is empty or null
    if ( password.value.length < 8) {
        passwordHelp.innerHTML = 'Le mot de passe doit comporter entre 4 et 8 caractères!';
        setError(password, 'red');
        return;
    } else {
        setSuccess(password, 'green')
        passwordHelp.style.display = 'none';
    }

    if (pwdConfirm.value =="" || pwdConfirm.value ==null) {
        return setError(pwdConfirm, 'red')
    }else if(password.value !== pwdConfirm.value) {
        pwdConfirmHelp.innerHTML = 'Vos mots de passe ne correspondent pas!';
		return setError(pwdConfirm, 'red');
    }else {
        setSuccess(pwdConfirm, 'green')
        pwdConfirmHelp.style.display = 'none';
    }  
    
    // checkbox validation 
    if (checkBox.checked == false) {
        const checkboxHelp = document.getElementById('checkboxHelp');
        checkboxHelp.innerHTML = 'ce champs est obligatoire'
        return false;

    }else{
        checkboxHelp.style.display = 'none';
        return true;
    }
});

// set Error for input 
function setError(input,label) {
    const formControl = input.parentElement;
    const labelFor = formControl.querySelector('label');
    labelFor.style.color = label;

    input.focus()
    input.style.border = '1px solid red';
    input.style.boxShadow = ' 0 0 2px red';
}

// set Success for input 
function setSuccess(input,label) {
    const formControl = input.parentElement;
    const labelFor = formControl.querySelector('label');
    input.style.border = '1px solid green';
    input.style.boxShadow = 'none';
    labelFor.style.color = label;
}

// Method: Check if email == this email format 
function emailValidate(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Show/Hide Password Toggle
var state = false;
function togglePass(){
    if (state) {
        pwdConfirm.setAttribute('type','password');
        password.setAttribute('type','password');
        state = false;
    } else {
        pwdConfirm.setAttribute('type','text');
        password.setAttribute('type','text');
        state= true;
    }
}

const form = document.getElementById('container');
form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    let isValid = true;

    // Username validation
    let username = document.getElementById('UserName').value.trim();
    let nameerror = document.getElementById('NameError');

    if (username === "") {
        nameerror.textContent = "Your name should not be empty.";
        isValid = false;
    }
    else {
        nameerror.textContent = "";
    }
    if (!/^[A-Za-z]+$/.test(username)) {
        nameerror.textContent = "Your name should contain only letters.";
    }
    else if (username.length < 3 || username.length > 30) {
        nameerror.textContent = "Your name should be between 3 and 30 characters long.";
    }
    else {
        nameerror.textContent = "";
    }

    // Email validation
    let email = document.getElementById('Email').value.trim();
    let emailerror = document.getElementById('EmailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailerror.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    else {
        emailerror.textContent = "";
    }

    // Password validation
    let password = document.getElementById('Password').value.trim();
    let password2 = document.getElementById('Password2').value.trim();
    let passworderror = document.getElementById('PassError');
    let passworderror2 = document.getElementById('PassError2');
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

    if (password !== password2) {
        passworderror2.textContent = "Passwords is not match.";
        isValid = false;
    }
    else {
        passworderror2.textContent = "";
    }

    if (!passwordPattern.test(password)) {
        passworderror.textContent = "Your password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
        isValid = false;
    }
    else {
        passworderror.textContent = "";
    }

    if (password === "" || password2 === "") {  
        passworderror.textContent = "Your password should not be empty.";
        isValid = false;
    }
    else {
        passworderror.textContent = "";
    }
    if (password.length < 6 || password.length > 20) {
        passworderror.textContent = "Your password should be between 6 and 20 characters long.";
    }
    else {
        passworderror.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});

// github = https://github.com/hu-matin
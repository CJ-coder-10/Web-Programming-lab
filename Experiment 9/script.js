
// Get form elements
let regForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

// Email validation
function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Password validation
function validPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
}

// Display error message
function showError(id, message) {
    document.getElementById(id).innerHTML = message;
}

// Registration validation
function validateRegister() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value;
    let valid = true;

    showError("nameError", "");
    showError("regEmailError", "");
    showError("regPasswordError", "");

    if (name === "") {
        showError("nameError", "Name is required");
        valid = false;
    }

    if (!validEmail(email)) {
        showError("regEmailError", "Enter a valid email");
        valid = false;
    }

    if (!validPassword(password)) {
        showError("regPasswordError",
            "Password must have 8 characters, a letter and a number");
        valid = false;
    }

    return valid;
}

// Login validation
function validateLogin() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;
    let valid = true;

    showError("loginEmailError", "");
    showError("loginPasswordError", "");

    if (email === "") {
        showError("loginEmailError", "Email is required");
        valid = false;
    } else if (!validEmail(email)) {
        showError("loginEmailError", "Enter a valid email");
        valid = false;
    }

    if (password === "") {
        showError("loginPasswordError", "Password is required");
        valid = false;
    }

    return valid;
}

// Validate during input
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function() {
        validateRegister();
        validateLogin();
    });
});

// Handle form submission
regForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateRegister()) {
        alert("Registration form is valid!");
    }
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateLogin()) {
        alert("Login form is valid!");
    }
});

// ===================================
// ELEMENTS
// ===================================

const form = document.getElementById("registrationForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const course = document.getElementById("course");
const terms = document.getElementById("terms");

const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");

const togglePassword =
document.getElementById("togglePassword");

const toggleConfirmPassword =
document.getElementById("toggleConfirmPassword");

const strengthBar =
document.getElementById("strengthBar");

const strengthText =
document.getElementById("strengthText");

// ===================================
// SHOW / HIDE PASSWORD
// ===================================

togglePassword.onclick = function(){

password.type =
password.type === "password"
? "text"
: "password";

this.innerHTML =
password.type === "password"
? '<i class="fa-solid fa-eye"></i>'
: '<i class="fa-solid fa-eye-slash"></i>';

}

toggleConfirmPassword.onclick = function(){

confirmPassword.type =
confirmPassword.type === "password"
? "text"
: "password";

this.innerHTML =
confirmPassword.type === "password"
? '<i class="fa-solid fa-eye"></i>'
: '<i class="fa-solid fa-eye-slash"></i>';

}

// ===================================
// PASSWORD STRENGTH
// ===================================

password.addEventListener("keyup",function(){

let pass=password.value;

let strength=0;

if(pass.length>=8)
strength++;

if(/[A-Z]/.test(pass))
strength++;

if(/[0-9]/.test(pass))
strength++;

if(/[!@#$%^&*]/.test(pass))
strength++;

if(strength==0){

strengthBar.style.width="0%";

strengthText.innerHTML="";

}

else if(strength==1){

strengthBar.style.width="25%";

strengthBar.style.background="#ff3b30";

strengthText.innerHTML="Weak Password";

}

else if(strength==2){

strengthBar.style.width="50%";

strengthBar.style.background="#ff9500";

strengthText.innerHTML="Medium Password";

}

else if(strength==3){

strengthBar.style.width="75%";

strengthBar.style.background="#ffd60a";

strengthText.innerHTML="Good Password";

}

else{

strengthBar.style.width="100%";

strengthBar.style.background="#22c55e";

strengthText.innerHTML="Strong Password";

}

});

// ===================================
// VALIDATION FUNCTIONS
// ===================================

function showError(input,message){

const error =
input.parentElement.querySelector(".error");

if(error){

error.innerHTML = message;

}

input.classList.add("input-error");

input.classList.remove("input-success");

}

function showSuccess(input){

const error =
input.parentElement.querySelector(".error");

if(error){

error.innerHTML="";

}

input.classList.remove("input-error");

input.classList.add("input-success");

}
// ===================================
// FORM SUBMIT VALIDATION
// ===================================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll(".error").forEach(error => {
        error.innerHTML = "";
    });

    document.querySelectorAll(".input-error").forEach(input => {
        input.classList.remove("input-error");
    });

    document.querySelectorAll(".input-success").forEach(input => {
        input.classList.remove("input-success");
    });

    // First Name
    if (firstName.value.trim() === "") {
        showError(firstName, "First Name is required");
        valid = false;
    } else {
        showSuccess(firstName);
    }

    // Last Name
    if (lastName.value.trim() === "") {
        showError(lastName, "Last Name is required");
        valid = false;
    } else {
        showSuccess(lastName);
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (email.value.trim() === "") {
        showError(email, "Email is required");
        valid = false;
    }
    else if (!emailPattern.test(email.value)) {
        showError(email, "Enter a valid Email");
        valid = false;
    }
    else {
        showSuccess(email);
    }

    // Password
    if (password.value.length < 8) {
        showError(password, "Minimum 8 characters required");
        valid = false;
    } else {
        showSuccess(password);
    }

    // Confirm Password
    if (confirmPassword.value === "") {
        showError(confirmPassword, "Confirm Password");
        valid = false;
    }
    else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match");
        valid = false;
    }
    else {
        showSuccess(confirmPassword);
    }

    // Gender
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        document.querySelector(".gender-box .error").innerHTML =
            "Select Gender";
        valid = false;
    }

    // Course
    if (course.value === "") {
        course.parentElement.querySelector(".error").innerHTML =
            "Select Course";
        valid = false;
    } else {
        showSuccess(course);
    }

    // Phone Number
    const phonePattern = /^[0-9]{10}$/;

    if (phone.value.trim() === "") {
        document.querySelector(".phone-container + .error").innerHTML =
            "Phone Number is required";
        valid = false;
    }
    else if (!phonePattern.test(phone.value)) {
        document.querySelector(".phone-container + .error").innerHTML =
            "Enter valid 10 digit Phone Number";
        valid = false;
    }
    else {
        document.querySelector(".phone-container + .error").innerHTML = "";
    }

    // Address
    if (address.value.trim() === "") {
        showError(address, "Address is required");
        valid = false;
    } else {
        showSuccess(address);
    }

    // Terms
    if (!terms.checked) {
        alert("Please accept Terms & Conditions.");
        valid = false;
    }

    // Success Popup
    if (valid) {

        popup.style.display = "flex";

        form.reset();

        strengthBar.style.width = "0%";
        strengthText.innerHTML = "";

        document.querySelectorAll(".input-success").forEach(input => {
            input.classList.remove("input-success");
        });

    }

});

// ===================================
// POPUP CLOSE
// ===================================

okBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

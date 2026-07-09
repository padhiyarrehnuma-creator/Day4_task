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

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

// ===================================
// SHOW / HIDE PASSWORD
// ===================================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        this.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        confirmPassword.type = "password";

        this.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

// ===================================
// PASSWORD STRENGTH
// ===================================

password.addEventListener("input", function () {

    let pass = password.value;

    let strength = 0;

    if (pass.length >= 8) strength++;

    if (/[A-Z]/.test(pass)) strength++;

    if (/[a-z]/.test(pass)) strength++;

    if (/[0-9]/.test(pass)) strength++;

    if (/[^A-Za-z0-9]/.test(pass)) strength++;

    if (strength <= 1) {

        strengthBar.style.width = "20%";
        strengthBar.style.background = "#ff3b30";
        strengthText.innerHTML = "Weak Password";

    }

    else if (strength == 2 || strength == 3) {

        strengthBar.style.width = "60%";
        strengthBar.style.background = "#ff9500";
        strengthText.innerHTML = "Medium Password";

    }

    else {

        strengthBar.style.width = "100%";
        strengthBar.style.background = "#2ed573";
        strengthText.innerHTML = "Strong Password";

    }

    if (pass.length == 0) {

        strengthBar.style.width = "0%";
        strengthText.innerHTML = "";

    }

});

// ===================================
// ERROR FUNCTIONS
// ===================================

function showError(input, message) {

    const error = input.parentElement.querySelector(".error");

    error.innerHTML = message;

    input.classList.add("input-error");

    input.classList.remove("input-success");

}

function showSuccess(input) {

    const error = input.parentElement.querySelector(".error");

    error.innerHTML = "";

    input.classList.remove("input-error");

    input.classList.add("input-success");

}
// ===================================
// FORM VALIDATION
// ===================================

form.addEventListener("submit", function(e){

e.preventDefault();

let valid=true;

// First Name
if(firstName.value.trim()==""){

showError(firstName,"First Name is required");

valid=false;

}else{

showSuccess(firstName);

}

// Last Name
if(lastName.value.trim()==""){

showError(lastName,"Last Name is required");

valid=false;

}else{

showSuccess(lastName);

}

// Email

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email.value.trim()==""){

showError(email,"Email is required");

valid=false;

}

else if(!emailPattern.test(email.value)){

showError(email,"Enter valid email");

valid=false;

}

else{

showSuccess(email);

}

// Password

if(password.value.length<8){

showError(password,"Minimum 8 characters required");

valid=false;

}else{

showSuccess(password);

}

// Confirm Password

if(confirmPassword.value==""){

showError(confirmPassword,"Confirm Password is required");

valid=false;

}

else if(password.value!==confirmPassword.value){

showError(confirmPassword,"Password does not match");

valid=false;

}

else{

showSuccess(confirmPassword);

}

// Gender

const gender=document.querySelector('input[name="gender"]:checked');

const genderError=document.querySelector(".gender-box .error");

if(!gender){

genderError.innerHTML="Please select gender";

valid=false;

}else{

genderError.innerHTML="";

}

// Course

if(course.value==""){

showError(course,"Please select course");

valid=false;

}else{

showSuccess(course);

}

// Phone Number

const phoneError=document.querySelector(".phone-container + .error");

const phonePattern=/^[0-9]{10}$/;

if(phone.value.trim()==""){

phoneError.innerHTML="Phone number is required";

valid=false;

}

else if(!phonePattern.test(phone.value)){

phoneError.innerHTML="Enter valid 10 digit number";

valid=false;

}

else{

phoneError.innerHTML="";

}

// Address

if(address.value.trim()==""){

showError(address,"Address is required");

valid=false;

}else{

showSuccess(address);

}

// Terms

if(!terms.checked){

alert("Please accept Terms & Conditions");

valid=false;

}

// ===========================
// SUCCESS POPUP
// ===========================

if(valid){

popup.style.display="flex";

form.reset();

strengthBar.style.width="0%";

strengthText.innerHTML="";

document.querySelectorAll(".input-success").forEach(function(input){

input.classList.remove("input-success");

});

}

});

// ===================================
// POPUP CLOSE
// ===================================

okBtn.addEventListener("click",function(){

popup.style.display="none";

});

// Close popup on outside click

window.addEventListener("click",function(e){

if(e.target===popup){

popup.style.display="none";

}

});

/**
 * Login form using native JavaScript
 */

// Get the form element
const form = document.getElementById("login-form");

// Get the inputs
const email = document.getElementById("email");
const password = document.getElementById("password");

const defaultEmail = "admin@gmail.com";
const defaultPassword = "admin";

// Add submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (email.value === defaultEmail && password.value === defaultPassword) {
    window.location.href = "ok.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

document.getElementById("register").addEventListener("click", function () {
  alert("Register is not available at the moment.");
});

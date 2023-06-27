document.getElementById("signup-btn").addEventListener("click", showSignupForm);
document.getElementById("login-btn").addEventListener("click", showLoginForm);

function showSignupForm(){
  clearFormContainer();
  
  var formContainer = document.getElementById("form-container");
  
  var signupForm = document.createElement("form");
  signupForm.setAttribute("action", "/signup");
  signupForm.setAttribute("method", "POST");
  
  var usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username:";
  var usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("name", "username");
  usernameInput.setAttribute("required", true);
  
  var passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  var passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("name", "password");
  passwordInput.setAttribute("required", true);
  
  var submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Sign Up");
  
  signupForm.appendChild(usernameLabel);
  signupForm.appendChild(usernameInput);
  signupForm.appendChild(document.createElement("br"));
  signupForm.appendChild(passwordLabel);
  signupForm.appendChild(passwordInput);
  signupForm.appendChild(document.createElement("br"));
  signupForm.appendChild(submitBtn);
  
  formContainer.appendChild(signupForm);
  
  formContainer.style.display = "block";
}

function showLoginForm(){
  clearFormContainer();
  
  var formContainer = document.getElementById("form-container");
  
  var loginForm = document.createElement("form");
  loginForm.setAttribute("action", "/login");
  loginForm.setAttribute("method", "POST");
  
  var usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Username:";
  var usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("name", "username");
  usernameInput.setAttribute("required", true);
  
  var passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password:";
  var passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("name", "password");
  passwordInput.setAttribute("required", true);
  
  var submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Login");
  
  loginForm.appendChild(usernameLabel);
  loginForm.appendChild(usernameInput);
  loginForm.appendChild(document.createElement("br"));
  loginForm.appendChild(passwordLabel);
  loginForm.appendChild(passwordInput);
  loginForm.appendChild(document.createElement("br"));
  loginForm.appendChild(submitBtn);
  
  formContainer.appendChild(loginForm);
  
  formContainer.style.display = "block";
}

function clearFormContainer(){
  var formContainer = document.getElementById("form-container");
  
  while(formContainer.firstChild){
    formContainer.removeChild(formContainer.firstChild);
  }
}
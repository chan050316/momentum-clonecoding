const loginForm = document.querySelector('#jsLoginForm');
const loginInput = document.querySelector('#jsLoginInput');
const greeting = document.querySelector('#jsGreeting');

const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintgreeting();
}

function paintgreeting() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = "Hello, " + userName + "!";
  greeting.classList.remove(HIDDEN);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(!savedUserName) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener('submit', loginSubmit);
} else {
  paintgreeting();
}
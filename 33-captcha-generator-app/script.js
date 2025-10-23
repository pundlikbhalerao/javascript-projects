let display = document.getElementById("status");
let body = document.body;
let submit = document.getElementById("submit");
let refresh = document.getElementById("refresh");
let char = "1234567890ABCDEFGHIJGLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var captcha = "";

body.onload = function gen() {
  var length = 6;
  for (let i = 0; i < length; i++) {
    var pwd = Math.floor(Math.random() * char.length);
    captcha += char.substring(pwd, pwd + 1);
  }
  document.getElementById("generator").value = captcha;
  display.innerText = "captcha Generator";
};

submit.onclick = function check() {
  let input = document.getElementById("client-text").value;
  if (input == "") {
    display.innerText = "Please Enter text";
  } else if (input == captcha) {
    display.innerText = "Matched";
  } else {
    display.innerText = "Not Match";
  }
};
refresh.onclick = function ref() {
  let char1 = char[Math.floor(Math.random() * char.length)];
  let char2 = char[Math.floor(Math.random() * char.length)];
  let char3 = char[Math.floor(Math.random() * char.length)];
  let char4 = char[Math.floor(Math.random() * char.length)];
  let char5 = char[Math.floor(Math.random() * char.length)];
  let char6 = char[Math.floor(Math.random() * char.length)];

  captcha =
    char1.toString() +
    char2.toString() +
    char4.toString() +
    char5.toString() +
    char6.toString();

  document.getElementById("generator").value = captcha;
  display.innerText = "captcha Generator";
};

const words = ["seat", "sale", "eyes", "mobile"];
function get() {
  const chars = "1234567890!@#$%&*";
  const clength = chars.length;
  let password = "";

  while (password.length < 20) {
    password = password.concat(randomWord(chars.length));
    password = password.concat(chars[randomNumber(clength)]);
  }
  password = password.substring(0, 16);
  document.getElementById("password").value = password;
}
function randomNumber(l) {
  return Math.floor(Math.random() * l);
}

function randomWord() {
  const number = randomNumber(words.length);
  return words[number];
}

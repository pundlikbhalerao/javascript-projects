const randomNumber = Math.floor(Math.random() * 50) + 1;
let attempt = 0;

function check() {
  const guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess) || guess < 1 || guess > 50) {
    setmessage("Please enter a Valid Number");
    return;
  }
  attempt++;
  if (guess === randomNumber) {
    setmessage(
      `Sucess !!! your number is ${randomNumber} and in ${attempt} attempt.`,
      document.getElementById("msg").classList.add("abc"),
    );
  } else if (guess < randomNumber) {
    setmessage(`Try Higher number than ${guess}`);

  } else if (guess > randomNumber) {
    setmessage(`Try Lower number than ${guess}`);
  }
}
function setmessage(msg) {
  document.getElementById("msg").textContent = msg;

}



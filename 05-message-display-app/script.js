const message = document.querySelector(".message");
const content = document.querySelector(".content");
const form = document.querySelector("form");

function displayMessage() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (message.value === "") {
      alert("Please,Enter a message.");
    } else {
      content.textContent = `"${message.value}"`;
      message.value = "";
    }
  });
}
displayMessage();

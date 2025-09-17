const buttons = document.querySelectorAll(".btn-counter");
let count = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("decrese-btn")) {
      count--;
    } else if (button.classList.contains("increse-btn")) {
      count++;
    } else if (button.classList.contains("reset-btn")) {
      count = 0;
    }
    const counter = document.querySelector(".counter");
    counter.textContent = count;

    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "blue";
    }
  });
});

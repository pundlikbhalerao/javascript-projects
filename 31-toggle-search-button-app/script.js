let buttons = document.querySelectorAll(".btn");
let body = document.querySelector("body");

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});

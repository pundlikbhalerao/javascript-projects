const body1 = document.querySelector("body");

body1.addEventListener("mousemove", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  const span1 = document.createElement("span");
  span1.style.left = x + "px";
  span1.style.top = y + "px";
  const size = Math.random() * 50 + 10;
  span1.style.width = size + "px";
  span1.style.height = size + "px";
  span1.style.position = "absolute";
  span1.style.background = `hsla(${Math.random() * 360}, 70%, 50%, 0.7)`;
  span1.style.borderRadius = "50%";
  span1.style.pointerEvents = "none";

  body1.appendChild(span1);

  setTimeout(() => {
    span1.remove();
  }, 3000);
});

particles();

function particles() {
  const count = 100;
  const container = document.querySelector(".container");

  for (let i = 0; i < count; i++) {
    const p = document.createElement("i");
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 10;

    p.style.width = 2 + size + "px";
    p.style.height = 1 + size + "px";
    p.style.left = x + "px";
    p.style.top = y + "px";

    container.appendChild(p);
  }
}

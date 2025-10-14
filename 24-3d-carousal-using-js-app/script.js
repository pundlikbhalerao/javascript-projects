const container = document.querySelector(".container");
const rotate_div = document.querySelector(".rotate-div");
const imgs = rotate_div.getElementsByTagName("img");
const arr = Array.from(imgs);

let radius = 380;
let autoRotate = true;
let rotateSpeed = -12;

const ground = document.getElementById("surface-area");
if (ground) {
  ground.style.width = radius * 2 + "px";
  ground.style.height = radius * 0.3 + "px";
}

function init(delayTime) {
  const count = arr.length;
  for (let i = 0; i < count; i++) {
    const angle = (i * 360) / count;
    arr[i].style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    arr[i].style.transition = "transform 1s";
    const delay = typeof delayTime === "number" ? delayTime : i / 6;
    arr[i].style.transitionDelay = `${delay}s`;
  }
}

setTimeout(() => init(), 100);

if (autoRotate) {
  const animationName = rotateSpeed > 0 ? "rotate" : "rotateRevert";
  rotate_div.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s linear infinite`;
  rotate_div.style.transformStyle = "preserve-3d";
}

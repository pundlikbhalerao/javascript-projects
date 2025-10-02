document.addEventListener("DOMContentLoaded", function () {
  const fontSize = document.getElementById("fontSize");
  const text = document.getElementById("text");
  const color1 = document.getElementById("color");
  fontSize.addEventListener("input", function () {
    const newSize = fontSize.value + "px";
    text.style.fontSize = newSize;
    console.log(color1);
    const newColor = color1.value;
    text.style.color = newColor;
  });
});

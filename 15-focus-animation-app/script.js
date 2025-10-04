const hover = document.querySelector(".hover");

document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--x", e.clientX + "px");
  document.documentElement.style.setProperty("--y", e.clientY + "px");

  // circle center pointer वर ठेवण्यासाठी
  hover.style.left = e.clientX - hover.offsetWidth / 2 + "px";
  hover.style.top = e.clientY - hover.offsetHeight / 2 + "px";
});

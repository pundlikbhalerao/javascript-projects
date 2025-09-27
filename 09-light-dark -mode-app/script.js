const fullDarkModeCheckBox = document.querySelector("#full-dark-mode");

fullDarkModeCheckBox.addEventListener("change", (e) => {
  if (fullDarkModeCheckBox.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

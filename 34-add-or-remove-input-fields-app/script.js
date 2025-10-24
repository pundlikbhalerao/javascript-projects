const surveyOptions = document.getElementById("survey_options");
const addBtn = document.getElementById("add_fields");
const removeBtn = document.getElementById("remove_fields");

const updateRemoveButton = () => {
  const inputs = surveyOptions.querySelectorAll("input");
  removeBtn.style.visibility = inputs.length > 1 ? "visible" : "hidden";
};

addBtn.addEventListener("click", () => {
  const input = document.createElement("input");
  Object.assign(input, {
    type: "text",
    name: "survey_options",
    className: "survey_option",
    size: 50,
    placeholder: "Enter option",
  });
  surveyOptions.appendChild(input);
  updateRemoveButton();
});

removeBtn.addEventListener("click", () => {
  const inputs = surveyOptions.querySelectorAll("input");
  if (inputs.length > 1) {
    surveyOptions.removeChild(inputs[inputs.length - 1]);
    updateRemoveButton();
  }
});

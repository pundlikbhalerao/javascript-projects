let displayValue = "";

function appendToDisplay(Value) {
  displayValue += Value;
  document.getElementById("display").value = displayValue;
}
function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}
function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;
  } catch {
    alert("Invalid Expression");
  }
}

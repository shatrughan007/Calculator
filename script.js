function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
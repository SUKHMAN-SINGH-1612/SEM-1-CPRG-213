// Demo Part 1
document.getElementById("alert").addEventListener("click", showAlert);
document.getElementById("prompt").addEventListener("click", showPrompt);

function showAlert() {
  alert("Hello, World!");
}

function showPrompt() {
  let name = prompt("What is your name?");
  alert("Hello, " + name);
  let ageStr = prompt("How old are you?");
  let age = parseInt(ageStr);
  alert("Next year you will be " + (age + 1));
}

// Demo Part 2
document.getElementById("input").addEventListener("keyup", updateChangeOutput);
document.getElementById("update").addEventListener("click", updateClickOutput);

function updateChangeOutput() {
  document.getElementById("keyup-output").innerHTML =
    document.getElementById("input").value;
}

function updateClickOutput() {
  document.getElementById("click-output").innerHTML =
    document.getElementById("input").value;
}

// Activity
document.getElementById("calculator").addEventListener("click", showCalculator);

function showCalculator() {
  let num1 = prompt("Enter the first number");
  let num2 = prompt("Enter the second number");
  let operator = prompt("Enter the operator");
  let result = 0;
  if (operator === "+") {
    result = parseInt(num1) + parseInt(num2);
  } else if (operator === "-") {
    result = parseInt(num1) - parseInt(num2);
  } else if (operator === "*") {
    result = parseInt(num1) * parseInt(num2);
  } else if (operator === "/") {
    result = parseInt(num1) / parseInt(num2);
  }
  alert("The result is " + result);
}
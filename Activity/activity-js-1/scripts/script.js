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
document.getElementById("input").addEventListener("key-down", updateChangeOutput);
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
  if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)){
    alert("Please enter a number");
    return;
  }
  let sum = parseInt(num1) + parseInt(num2);
  let difference = parseInt(num1) - parseInt(num2);
  let product = parseInt(num1) * parseInt(num2);
  let quotient = parseInt(num1) / parseInt(num2);
  alert("The sum result is " + sum);
  alert("The difference result is " + difference);
  alert("The product result is " + product);
  alert("The quotient result is " + quotient);
}
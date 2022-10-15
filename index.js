// import "./styles.css";

var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var showOutput = document.querySelector("#output-show");

checkButton.addEventListener("click", main);

function main() {
  var date = dateOfBirth.value;
  var number = luckyNumber.value;
  if (date && number) {
    var sumOfDate = calculateSum(date);
    var calculation = checkLuck(sumOfDate, number);
  } else {
    showOutput.style.display = "block";
    showOutput.innerText = "Please Enter Both The values";
  }
}

function calculateSum(date) {
  // showOutput.style.display = "none"
  var date = date.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < date.length; i++) {
    sum = sum + Number(date.charAt(i)); //used Number to convert (Known as typecasting)
  }
  return sum;
}

function checkLuck(sumOfDate, number) {
  if (sumOfDate % number === 0)
    return showMessage("Yay!!, " + number + " is your Lucky Number");
  else return showMessage("Oopss, " + number + " is not your Lucky Number");
}

function showMessage(message) {
  showOutput.innerText = message;
}

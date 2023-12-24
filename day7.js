function functionName() {
  // code goes here
}
functionName();

// Function can be declared without a parameter.
// a function has to be called by its name to be executed
function square() {
  let num2 = 2;
  let sq = num2 * num2;
  console.log(sq);
}
square();

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;
  console.log(sum);
}
addTwoNumbers();

function printFullName() {
  let firName = "Ketaki";
  let lasName = "Karanjkar";
  let space = " ";
  let fullName = firName + space + lasName;
  console.log(fullName);
}
printFullName();

// Function returning value
function printName() {
  let myName = "Ketaki";
  let mySirname = "Karanjkar";
  let space1 = " ";
  let nAmE = myName + space1 + mySirname;
  return nAmE;
}
console.log(printName());

function twoNoSum() {
  let first1 = 50;
  let sec2 = 51;
  let sUm = first1 + sec2;
  return sUm;
}
console.log(twoNoSum());

// Function with a parameter

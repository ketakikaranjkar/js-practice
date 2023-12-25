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

// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1); // during calling or invoking one argument needed

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10)); // should be called with one argument

function square(number) {
  return number * number;
}

console.log(square(10));

// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}
functionName(parm1, parm2); // during calling or invoking two arguments needed
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
}
sumTwoNumbers(10, 20); // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

console.log(sumTwoNumbers(10, 20));
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName("Asabeneh", "Yetayeh"));

// function with multiple parameters
function functionName(parm1, parm2, parm3) {
  //code goes here
}
functionName(parm1, parm2, parm3); // during calling or invoking three arguments needed

// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));

const areaOfCircle = radius => {
  let area = Math.PI * radius * radius;
  return area;
};
console.log(areaOfCircle(10));

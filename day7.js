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

//  Function with a parameter
function numBer() {
  const nm1 = 10;
  const nm2 = 20;
  const mainNm = nm1 + nm2;
  return mainNm;
}
console.log(numBer());

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10));

// Function with two parameters
function myFullName(part1, part2) {
  return `${part1} ${part2}`;
}
console.log(myFullName("ketaki", "karanjkar"));

// Function with many parameters
function allNuM(arr) {
  let sUm = 0;
  for (let an = 0; an < arr.length; an++) {
    sUm = sUm;
  }
}
const changeToUpperCase = arr => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

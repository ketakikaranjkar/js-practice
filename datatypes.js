//datatype.js

let dogName = "lab";
let ageOfDogs = 2;
let fevDog;
let femaleDog = true;
let maleDog = null;

console.log(typeof dogName);
console.log(typeof ageOfDogs);
console.log(typeof fevDog);
console.log(typeof femaleDog);
console.log(typeof maleDog);

let myName;
let myLastName;
let status;
let education;
console.log(myName, myLastName, status, education);

let variable1 = "hello ketu";
let variable2 = 24;
let variable3 = null;
let variable4 = false;
console.log(variable1, variable2, variable3, variable4);
console.log(variable2);

let firstName1 = "piya";
let lastName1 = "joshi";
let maritalStatus = "single";
let country1 = "india";
let age1 = 24;
console.log(firstName1, lastName1, maritalStatus, country1, age1);

let firstName2 = "sudha",
  lastName2 = "pise",
  maritalStatus1 = "married",
  city0 = "pune",
  age2 = 30;
console.log(firstName2, lastName2, maritalStatus1, city0, age2);

let myAge = 25;
let yourAge = 30;
console.log("I am", myAge, "years old.");
console.log("you are", yourAge, "years old.");

//in js variable should not be same but value can be same
//b'coz of this data type is primitive thats why value is same however result is "true"
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); //true
let num1 = 0;
let num2 = 1;
console.log(num1 == num2); //false

//in js variable should not be same but value can be same
// in this non-primitive data type case value are same but also result is false bcoz variable are diffirent
let user1 = {
  name: "pooja",
  country: "india"
};
let user2 = {
  name: "sara",
  country: "china"
};
console.log(user1 == user2);

//in js array is the non-primited data type. it can be modify values.

let names = ["ketu", "aishu", "sonu"];
names[0] = "pooja";
console.log(names);

//in js primited data type cannot mudify value.
let js = "javascript";
let py = "python";
console.log(js);

let userOne1 = {
  name1: "tara",
  shops: 24
};
//this is a referance instead of value.
let userTwo2 = userOne1;

console.log(userOne1 == userTwo2);

let color = {
  black: 3,
  red: 4
};

let car = color;
console.log(car == color);

let bike = {
  activa: 1,
  accese: 2
};
let sportBike = {
  R15: 1,
  Duke: 2
};
console.log(bike == sportBike);

console.log(Math.PI);
console.log(Math.round(9.81));
console.log(Math.round(PI));
console.log(Math.ceil(PI));
console.log(Math.min(-5, 9, 3, 10));
console.log(Math.max(10, 4, 2, +3));

const randNum = Math.random();
console.log(randNum);

const num = Math.floor(Math.random() * 11);
console.log(num);

//apsolute value
console.log(Math.abs(-10));

//Square root
console.log(Math.sqrt(100));

console.log(Math.sqrt(2));

const min = 10;
const max = 20;
const randomInteger = Math.floor(Math.random() * (min - max + 1)) + min;
console.log(randomInteger);

const cal = Math.round(6 * 9);
console.log(cal);

console.log(Math.pow(5, 7));
console.log(Math.round(3.5));
console.log(Math.ceil(4.01));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));

function getRandomNum(min) {
  return Math.ceil(Math.random() * min);
}
console.log(getRandomNum(5));

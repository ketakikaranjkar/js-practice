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

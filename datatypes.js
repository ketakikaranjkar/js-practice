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

const rendomNum = Math.random();
console.log(rendomNum);

function getRoundFigure(min) {
  return Math.round(Math.random() + min);
}
console.log(getRoundFigure(3.99));

//absolute value means actual num. expected ans=8.7
console.log(Math.abs(8.7));

//square method return square root of a number. Ans= 3 .
//3 is a square and 9 is a square root of no. 3
console.log(Math.sqrt(9));
//same 36 is a square no. of 6. 6 is a square root.
console.log(Math.sqrt(36));

//Math.pow method multiply first no. to second no. times.
//7*7*7*7=2401
console.log(Math.pow(7, 4));

//E this property represente Euler. value = 2.17
console.log(Math.E);

let randNumb = Math.random();
let numBtnZeroAndTen = randNum * 11;
console.log(numBtnZeroAndTen);

let myLuckyNo = Math.random();
let myDate = randNum * 1.5;
console.log(myDate);

let date = Math.random();
let bDay = randNum + 4;
console.log(bDay);

//Randdom number generater
let school = Math.random();
let clg = randNum - 0.54;
console.log(clg);

let salary = 500;
let monthSalry = salary + 10;
console.log(monthSalry);

//String
let space = " ";
let language = "english";
let books = "story";
let bookType = language + space + books;
console.log(bookType);

let jaga = "  ";
let me = "ketaki";
let me1 = "karanjkar";
let mySelf = me + jaga + me1;
console.log(mySelf);

const paragraph = "hdfjhs jhgdjhsk jhdhskh hdkhfks hdijsi jkj.";
console.log(paragraph);

// in js \n means new line
const laptop = "i am a happy girl,\n ketaki";
console.log(laptop);

//in js \t means 8 space
console.log("Day 1\t3\t5");

console.log("this is back slash(\\)");

console.log("In every programming language it starts with 'Hello, World!'");

let human = "neha";
let city5 = "pune";
let job8 = "teacher";
let language1 = "javascript";
let age3 = 24;

let personalInfoTwo = `I am ${human}. I live in ${city5}`;
let personalInfoThree = `I am ${age3}. I am a ${job8}`;
console.log(personalInfoTwo);
console.log(personalInfoThree);
let personalInfoFor = `I am ${age3}.`;
console.log(personalInfoFor);

let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}:${a > b}`);

let ketaki = 24;
let aishu = 23;
console.log(`${ketaki} greater than ${aishu}: ${ketaki > aishu}`);

let polo = 4;
let activa = 4;
console.log(`${polo} equal to ${activa}: ${(polo = activa)}`);

//length check
let serName = "karanjkar";
let serNAme2 = "kale";
console.log(serName.length);
console.log(serNAme2.length);

//access deffirent character
let string = "Javascript";
let firstLetter = string[0];
console.log(firstLetter);

let secondLetter = string[1];
console.log(secondLetter);
let lastLetter = string[9];
console.log(lastLetter);

//toUpperCase
let string1 = "javaScript";
console.log(string.toUpperCase());

//toLowerCase
let string2 = "PYTHON";
console.log(string2.toLocaleLowerCase());

//substr()
let string3 = "javascript";
console.log(string3.substr(4, 6));

//subString()
let lang = "JavaScript";
console.log(lang.substring(0, 4));
console.log(lang.substring(4, 10));
console.log(lang.substring(4));

let collage = "Sadhna";
console.log(collage.length);
console.log(collage.substr(3));
console.log(collage.toUpperCase());
console.log(collage.substring(2, 4));
console.log(collage.substring(4, 6));

//split
let stringg = " 30 Days Of JavaScript";
console.log(stringg.split());
console.log(stringg.split(""));

//split in single charactor
let carName = "polo";
console.log(carName.split());
console.log(carName.split(""));

//split in array
let countries = "india, china, england, rasia";
console.log(countries.split(","));

//trim space between string
let stri = "  30 days of js  ";
console.log(stri.trim(""));
console.log(stri);

//includes in true or false
let st = "30 days of  java";
console.log(st.includes("days"));
console.log(st.includes("OF"));

//replace word
let stringgg = "JavaScript";
console.log(stringgg.replace("JavaScript", "Python"));

//charAt
let page = "30 days of javascript";
console.log(page.charAt(0));

let lastIndex = string.length - 1;
console.log(string.charAt(lastIndex));

console.log("hello world");

let phone = "iphone 15";
console.log(phone.charAt(0));

let lastCharactor = string.length - 1;
console.log(string.charAt(lastCharactor));

//charCodeAt index
let water = "hot bag";
console.log(water.charCodeAt(0));

//string indexOf(substring)
let strinG = " i love JavaScript";
console.log(strinG.lastIndexOf("love"));

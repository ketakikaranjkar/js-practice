let kK = null;
console.log(kK);

let oneNo = 5;
let twoNo = 2;
let sum = oneNo + twoNo;
let diff = oneNo - twoNo;
let mult = oneNo * twoNo;
let div = oneNo / twoNo;
let remainder = oneNo % twoNo;
let powerOf = oneNo ** twoNo;

console.log(sum, diff, mult, div, remainder, powerOf);

console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(3 != 2);
console.log(NaN == NaN);
console.log(undefined == null);
console.log(undefined === null);

//length is define from a value charactors// result = false
let mango = "sweet";
let avocado = "sour";
console.log(mango.length == avocado.length);

//pre -increment
let count = 7;
console.log(++count);
console.log(count);

let counT = 7;
console.log(++counT);
console.log(counT);

//     **Increment Oprator**
//post-increment
let cOunt = 7;
console.log(cOunt++);
console.log(cOunt);

let money = 11;
console.log(money);
console.log(money++);
console.log(++money);

// ** decrement Operator **
// Pre Decrement
let moneY = 40;
console.log(--moneY);
console.log(moneY);

//post decrement
let monEY = 40;
console.log(monEY);
console.log(monEY--);
console.log(monEY);
console.log(--monEY);

//Ternary Operator
let isRaining = true;
isRaining
  ? console.log("You need a rain coat")
  : console.log("No need for a rain coat");
isRaining = false;

let num0 = 5;
num0 > 0
  ? console.log(`${num0} is a positive number`)
  : console.log(`${num0} is a negative number`);
num0 = -5;
num0 > 0
  ? console.log(`${num0} is a positive number`)
  : console.log(`${num0} is a negative number`);

let onBulb = true;
onBulb
  ? console.log(`${onBulb} bulb is on`)
  : console.log(`${onBulb} bulb is off`);

let agee = 24;
agee = 30
  ? console.log(`${agee} is correct `)
  : console.log(`${agee} is not correct`);

let colour = "black";
colour = false
  ? console.log(`${colour} is black`)
  : console.log(`${colour} is white`);

// ** Window prompt method **
// let number = prompt("required text", "optional text");
// console.log(number);

// ** Window confirm method **
// let agree = confirm("Are you sure you like to delete?");

// ** Date Object **
const now = new Date();
console.log(now);

//Getting full year
const year = new Date();
console.log(year.getFullYear());

//Getting Month
const month = new Date();
console.log(month.getMonth());

//Getting Date
const datee = new Date();
console.log(datee.getDate());

// Getting Day
const day = new Date();
console.log(day.getDay());

//Getting Hour
const hour = new Date();
console.log(hour.getHours());

//Getting Minutes
const minutes = new Date();
console.log(minutes.getMinutes());

//Getting second
const second = new Date();
console.log(second.getSeconds());

//Getting Time
// 1 using get
const time = new Date();
console.log(time.getTime());

//using Date.now()
const allSecond = Date.now();
console.log(allSecond);

const dateee = now.getDate();

// Exercise:LEVEL 1

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types
let firstName6 = "Ketaki";
let lastName6 = "Karanjkar";
let country6 = "India";
let city6 = "Pune";
let age6 = 24;
let isMarried6 = false;
let year6;
console.log(
  typeof firstName6,
  lastName6,
  country6,
  city6,
  age6,
  isMarried6,
  year6
);

// Check if type of '10' is equal to 10
let numM = "10";
let nUmm = 10;
console.log(numM == nUmm);

// Check if parseInt('9.8') is equal to 10
let numB = "9.8";
console.log(Math.ceil(numB));

// Boolean value is either true or false.
let ketu = "girl";
let aish = "frds";
console.log(ketu.length == aish.length);
let girls = "44";
let boys = 9;
console.log(girls.length == boys.length);

// Write three JavaScript statement which provide truthy value.
console.log(6 < 7);
console.log(100 != 200);
let isMArried = true;
console.log(isMArried);

// Write three JavaScript statement which provide falsy value
let Karanjkar;
console.log(Karanjkar);
console.log(10 > 11);
let animal = null;
console.log(animal);

// Figure out the result of the following comparison expression
console.log(4 > 3);
// true;
console.log(4 >= 3);
// true;
console.log(4 < 3);
// false;
console.log(4 <= 3);
// false;
console.log(4 == 4);
// true;
console.log(4 === 4);
// true;
console.log(4 != 4);
// false
console.log(4 != "4");
//false
console.log(4 == "4");
//true
console.log(4 === "4");
// false;

// Find the length of python and jargon and make a falsy comparison statement.
let python = "good";
let gargon = "dontKnow";
console.log(python.length == gargon.length);

// Figure out the result of the following expressions
console.log(4 > 3 && 10 < 12);
// true
console.log(4 > 3 && 10 > 12);
// false
console.log(4 > 3 || 10 < 12);
// true
console.log(4 > 3 || 10 > 12);
//true
console.log(!(4 > 3));
// false
console.log(!(4 < 3));
// true;
console.log(!false);
// true
console.log(!(4 > 3 && 10 < 12));
//false
console.log(!(4 > 3 && 10 > 12));
// true;
console.log(!(4 === "4"));
// true;

// There is no 'on' in both dragon and python
let ek = "if dragon is a fruit ";
let don = " if python is a language";
console.log(ek && don.includes("if"));

// Use the Date object to do the following activities

// What is the year today?
let year9 = new Date();
console.log(year9.getFullYear());

// What is the month today as a number
let mont = new Date();
console.log(mont.getMonth());

// What is the date today?
const date8 = new Date();
console.log(date8.getDate());

// What is the day today as a number?
const daY = new Date();
console.log(daY.getDay());

// What is the hours now?
const hourS = new Date();
console.log(hourS.getHours());

//What is the minutes now?
const minn = new Date();
console.log(minn.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const sec = Date.now();
console.log(sec);

// Exercise: Lavel 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt("Enter base:");
// let height = prompt("Enter height");
// let area = 0.5 * base * height;
// console.log(`the area of the triangle is ${area}`);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let sideA = prompt("side A");
// let sideB = prompt("side B");
// let sideC = prompt("side C");
// let triangle = sideA + sideB + sideC;
// console.log(` The triangle area is ${triangle}`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let siDe1 = prompt("length");
// let siDe2 = prompt("width");
// let rectangle = 2 * (siDe1 * siDe2);
// console.log(`the rectangle peramitter is ${rectangle}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let pi = Math.PI;
// let ratio = prompt("r");
// let areaaa = pi * ratio * ratio;
// let circle = 2 * pi * ratio;
// console.log(areaaa);
// console.log(`This is the cirsle value ${circle}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// y = 2x - 2 -> 0 = 2x - 2 -> 2x = 2 -> x = 1
// let slope = 2;
// let xIntercept = 1;
// let yIntercept = 0;
// console.log(`slope(m):${slope}`);
// console.log(`X-intercept:(${xIntercept},0)`);
// console.log(`Y-Intercept:(0,${yIntercept})`);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let enterHours = prompt("Enter Hours");
// let enterRatePerHour = prompt("Enter Rate Per Hour");
// let earning = enterHours * enterRatePerHour;
// console.log(`weekly pay of the one person ${earning}`);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name0 = "Your Name";
name0.length > 7
  ? console.log(`${name0} name is long`)
  : console.log(`${name0} name is short `);

// Compare your first name length and your family name length and you should get this output.
let firsTName = "ketaki";
let lasTName = "karanjkar";
lasTName > firsTName
  ? console.log(
      `Your first name ${firsTName} is longer then your last name${lasTName}  `
    )
  : console.log(
      `Your last name ${lasTName} is longer then your first name ${firsTName}`
    );

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAgee = 24;
let yourAgee = 20;
let diffe = myAgee - yourAgee;
console.log(`I am ${diffe} years older than you`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let birthYear = prompt("Enter Birth Year:");
// let yeaR = 2023;
// let currentAge = yeaR - birthYear;
// let diffE = 18 - currentAge;
// 18 < currentAge
//   ? console.log(`You are ${currentAge}. You are old Enough to drive`)
//   : console.log(
//       `You are ${currentAge}. You will be allowed to drive after ${diffE} years`
//     );

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let noOfYears = prompt("Enter number of years you live");
// let seC = 365 * 24 * 60 * 60;
// let seC2 = noOfYears * sec;
// console.log(`You lived ${seC2} seconds`);

// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
let daTE = new Date();
console.log(
  daTE.getFullYear() + " -",
  daTE.getMonth() + " -",
  daTE.getDate(),
  daTE.getHours() + " :",
  daTE.getMinutes()
);
console.log(
  daTE.getDate() + " -",
  daTE.getMonth() + " -",
  daTE.getFullYear(),
  daTE.getHours() + " :",
  daTE.getMinutes()
);
console.log(
  daTE.getDate() + "/",
  daTE.getMonth() + "/",
  daTE.getFullYear(),
  daTE.getHours() + " :",
  daTE.getMinutes()
);

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let datEe = new Date();
let houRS = datEe.getHours().toString().padStart(2, "0");
let minute = datEe.getMinutes().toString().padStart(2, "0");
let formatedTime = `${houRS}:${minute}`;
console.log(formatedTime);

// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let main = new Date();
console.log(
  main.getFullYear() + " -",
  main.getMonth() + " -",
  main.getDay(),
  formatedTime
);

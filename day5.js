// Using Array constructor
const array = new Array();
console.log(array);

// Using square brackets([])
const arraY = [];
console.log(arraY);

// How to create an array with values
// print array with his length
const numberS = [1, 2, 4, 5.6, 7];
console.log("Number", numberS);
const fruits = ["banana", "apple", "grapes", "mango"];
console.log("Fruits", fruits);
let vegetables = ["Tomato", "Patato", "Cabbage", "Carrot", "Onion"];
console.log("Vegetable", vegetables);

// Array can have items of different data types
const arr = ["ketaki", 24, city, true, { country: "india", skill: "HTML" }];
console.log(arr);

// Creating an array using split
let jSs = "javascript";
const chartJS = jSs.split("");
console.log(chartJS);

let comP = "Facebook,Google,Tata,Iphone,IBM";
const companY = comP.split(",");
console.log(companY);

let compAny =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const coMpany = compAny.split(",");
console.log(coMpany);

// Accessing array items using index
const fruitS = ["Banana", "Orange", "Mango", "Lemon"];
const firstFruitS = fruitS[0];
console.log(firstFruitS);
// const lastFruitS = fruitS[3];
// console.log(lastFruitS);

let lastIndeX = fruitS.length - 1;
lastFruitS = fruitS[lastIndeX];
console.log(lastFruitS);

const numArray = [1, 4, 6, 8, 6, 54, 3, 111];
console.log(numArray.length);
console.log(numArray);
console.log(numArray[0]);
console.log(numArray[7]);

let lastIndEX = numArray.length - 1;
console.log(numArray[lastIndEX]);

let webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];

console.log(webTechs);
console.log(webTechs[0]);
console.log(webTechs[5]);
console.log(webTechs.length);
let lastWebTech = webTechs.length - 1;
console.log(lastWebTech);

const shoppingCard = [
  "milk",
  "tomato",
  "potapo",
  "avocado",
  "mear",
  "eggs",
  "sugar"
];

console.log(shoppingCard);
console.log(shoppingCard[0]);
console.log(shoppingCard[5]);
console.log(shoppingCard.length);

let lasShopCard = shoppingCard.length - 1;
console.log(lasShopCard);

// Modifying array element
const n = [1, 2, 3, 4, 5];
n[0] = 11;
n[3] = 44;
console.log(n);

const c = [
  "albania",
  "Bolivia",
  "Canada",
  "denmark",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "japan",
  "Kenya"
];
c[0] = "India";
c[5] = "paris";
console.log(c);

// Methods to manipulate array

// Array Constructor
const ar = Array();
console.log(ar);

const eightEmptyValue = Array(8);
console.log(eightEmptyValue);

// Creating static values with fill
const eightEmptyValueS = Array(8).fill("x");
console.log(eightEmptyValueS);

// Concatenating array using concat
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
console.log(firstArray.concat(secondArray));

// Getting array length
const y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(y.length);
const u = y.length - 1;
console.log(u);

// Getting index an element in array
const aa = [1, 2, 3, 4, 5];
console.log(aa.indexOf(4));
console.log(aa.indexOf(0));
console.log(aa.indexOf(1));
console.log(aa.indexOf(6));

const f = ["banana", "orange", "mango", "lemon"];
let i = f.indexOf("banana");
if (i === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
let o = f.indexOf("apple");
if (o === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}

// Getting last index of an element in array
const j = [1, 4, 3, 1, 6, 2, 4, 8];
console.log(j.lastIndexOf(6));
console.log(j.indexOf(4));

// includes
const p = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(p.includes(1));
console.log(p.includes(10));

const w = ["HTML", "CSS"];
console.log(w.includes("HTML"));
console.log(w.includes("JS"));

// Checking array
const m = [1, 2, 3, 4, 5, 6];
console.log(Array.isArray(m));

const s = ["ketaki", "aishu", "sonu", "pooja"];
console.log(s.toString());

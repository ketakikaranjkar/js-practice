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
const h = 100;
console.log(Array.isArray(h));

// Converting array to string
const s = ["ketaki", "aishu", "sonu", "pooja"];
console.log(s.toString());

const t = [1, 3, 4, 5, 6, 7];
console.log(t.toString());

// Joining array elements
const k = [1, 2, 3, 4, 5];
console.log(k.join());
const dd = ["ketu", "aishu", "sonu", "pooja"];
console.log(dd.join());
console.log(dd.join(""));
console.log(dd.join(" "));
console.log(dd.join(" , "));
console.log(dd.join(" # "));

const e = ["HTML", "CSS", "JS", "Python"];
console.log(e.join());
console.log(e.join(""));
console.log(e.join(" , "));
console.log(e.join(" "));
console.log(e.join(" # "));

// Slice array elements
const q = [1, 2, 3, 4, 5];
console.log(q.slice());
console.log(q.slice(0));
console.log(q.slice(0, q.length));
console.log(q.slice(1, 4));

// Splice method in array
const r = [1, 2, 3, 4, 5, 6];
r.splice();
console.log(r);
r.splice(2, 4, 7, 8, 9);
console.log(r);
r.splice(0, 1);
console.log(r);

// Adding item to an array using push
const qq = ["item1", "item2", "item3"];
qq.push("newItem");
console.log(qq);

const hh = [1, 2, 3, 4, 5];
hh.push(6);
console.log(hh);

// Removing the end element using pop
const ee = ["banana", "mango", "apple", "orange"];
ee.pop();
console.log(ee);

const rr = [1, 2, 3, 4, 9];
rr.pop();
console.log(rr);

// Removing an element from the beginning
const ff = ["banana", "mango", "apple", "orange"];
ff.shift();
console.log(ff);

const pp = [3, 6, 8, 5, 2];
pp.shift();
console.log(pp);

// Add an element from the beginning
const tt = [1, 2, 3, 4, 5];
tt.unshift(0);
console.log(tt);

const mm = ["mango", "apple", "orange"];
mm.unshift("banana");
console.log(mm);

// Reversing array order
const v = [1, 2, 3, 4, 5];
v.reverse();
console.log(v);

// Sorting elements in array
const cc = ["HTML", "CSS", "JS", "PYTHON", "REACT", "REDUX"];
cc.sort();
console.log(cc);
cc.reverse();
console.log(cc);

// Array of arrays
const nn = [1, 2, 3];
const bb = [4, 5, 6];
const arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(arrayOfArrays[0]);

const z = ["html", "css", "js"];
const zz = ["python", "react", "redux"];
const arrayOfArray = [
  ["python", "react", "redux"],
  ["html", "css", "js"]
];
console.log(arrayOfArray[1]);

// ** Exercise: Level 1**

// Declare an empty array;

// Declare an empty array;
const ab = [];
console.log(ab);

// Declare an array with more than 5 number of elements
const oo = [1, 2, 3, 4, 5];
console.log(oo.length);
// last index
const ooo = oo.length - 1;
console.log(ooo);
// first Index
console.log(oo[0]);
// second index
console.log(oo[1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataType = [
  "number",
  "string",
  "boolean",
  "undefine",
  "Null",
  "symbols"
];
let mDT = mixedDataType.indexOf("comma");
if (mDT === -1) {
  console.log("this type doesnt exist");
} else {
  console.log("this type does exist");
}

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "IBN",
  "oracle",
  "amazon"
];

const lastCompay = itCompanies.length - 1;

lastCom = itCompanies[lastCompay];
// Print the array using console.log()
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(lastCom);

// Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  let companyName = itCompanies[i].toUpperCase();
  console.log(companyName);
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
const capitalizedCompanies = itCompanies.map(
  company => company.charAt(0).toUpperCase() + company.slice(1)
);
const sentencee =
  capitalizedCompanies.join(", ").replace(/,([^,]*)$/, " and$1") +
  " are big IT companies";
console.log(sentencee);

const machines = ["dhoom", "cooler", "wood", "fridze", "ac"];
console.log(machines);

let machinesCountO = [];
for (let oneO = 0; oneO < machines.length; oneO++) {
  let count = 0;
  for (let twoO = 0; twoO < machines[oneO].length; twoO++) {
    if (machines[oneO][twoO] === "o") {
      count++;
    }
  }
  if (count > 1) {
    machinesCountO.push(machines[oneO]);
  }
}
console.log(machinesCountO);

const dress = ["jeans", "shirt", "scarf", "kurti", "top"];
let findS = [];
for (let ss = 0; ss < dress.length; ss++) {
  if (dress[ss].includes("s")) {
    findS.push(dress[ss]);
  }
}
console.log(findS);

console.log(dress.sort());
// console.log(dress.reverse());
console.log(dress.slice(3));
console.log(dress.slice(0, 3));
// Slice out the middle dress from the array

console.log(dress.slice());

// Remove the first dress from the array
dress.splice(0, 1);
console.log(dress);

// Remove the middle dress from the array
dress.splice(2, 1);
console.log(dress);

// Remove the last dress from the array
dress.splice(4, 4);
console.log(dress);

// Remove all dress
dress.splice(0);
console.log(dress);

// ** Exercise: Level 2**
// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text);
console.log(text.length);
console.log(text.split(" "));

// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart[2] = "Green Tea";
console.log(shoppingCart);
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.pop("Honey");
console.log(shoppingCart);
shoppingCart.push("sugar");
console.log(shoppingCart);

// Concatenate the following two variables and store it in a fullStack variable.
const frontend = ["HTML", "CSS", "JS", "React", "Redux"];
const backend = ["Node", "Express", "MongoDB"];
const fullStack = frontend.concat(backend);
console.log(fullStack);

// ** Exercise: Level 3 **
// The following is an array of 10 students vaY:

const vaY = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortAge = vaY.sort((a, b) => a - b);
const minAge = sortAge[0];
const maxAge = sortAge[sortAge.length - 1];
console.log(sortAge);
console.log(minAge);
console.log(maxAge);

const vay = [24, 26, 23, 21];
const sorti = vay.sort((a, b) => a - b);
const minVay = sorti[0];
const maxVay = sorti[sorti.length - 1];
console.log(sorti);
console.log(minVay);
console.log(maxVay);

// Find the median age(one middle item or two middle items divided by two)
const yearAge = [17, 12, 15, 16, 11, 19, 14, 13];
yearAge.sort((a, b) => a - b);
const leng = yearAge.length;
let mediun;

if (leng % 2 == 0) {
  const middle1 = yearAge[leng / 2 - 1];
  const middle2 = yearAge[leng / 2];
  mediun = (middle1 + middle2) / 2;
} else {
  mediun = yearAge[Math.floor(leng / 2)];
}
console.log("mediun age", mediun);

// Find the average age(all items divided by number of items)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const summ = ages.reduce((acc, curr) => acc + curr, 0);
const average = summ / ages.length;
console.log(average);

const maxAgE = Math.max(...ages);
const minAgE = Math.min(...ages);

const range = maxAgE - minAgE;

console.log("Range of Ages:", range);

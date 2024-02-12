// ** Loops **

// for loop
for (let i = 0; i <= 5; i++) {
  console.log(`${i}*${i}=${i * i}`);
}
for (let o = 0; o <= 5; o++) {
  console.log(o);
}
for (let g = 5; g >= 0; g--) {
  console.log(g);
}

const countri = ["india", "austrelia", "denmark", "iceland", "china", "bhutan"];
let newArray = [];
const conLen = countri.length;
let midCon;
if (conLen % 2 === 0) {
  const midConInd1 = conLen / 2;
  const midConInd2 = conLen / 2 - 1;
  const midCon1 = countri[midConInd1];
  const midCon2 = countri[midConInd2];
  midCon = [midCon1, midCon2];
} else {
  midCon = countri[Math.floor(conLen / 2)];
}
console.log(midCon);

for (let y = 0; y < countri.length; y++) {
  newArray.push(countri[y].toUpperCase());
}
console.log(newArray);

// sort array
const arii = [-1, 0, 1, 2, -1, -4];
const arii1 = arii.sort((a, b) => a - b);
console.log(arii1);

// Adding all elements in the array

const sumNo = [1, 2, 3, 4, 5];
let totaL = 0;
for (let v = 0; v < sumNo.length; v++) {
  totaL = totaL + sumNo[v];
}
console.log(totaL);
const arrLen = sumNo.length;
let midNo;
if (sumNo % 2 === 0) {
  const midNo1 = sumNo[arrLen / 2];
  const midNo2 = sumNo[arrLen / 2 - 1];
  midNo = (midNo1 + midNo2) / 2;
} else {
  midNo = sumNo[Math.floor(arrLen / 2)];
}
console.log(midNo);

const balls = [2, 6, 8, 4, 9, 1];
let arrBallLen = balls.sort((a, b) => a - b);

let midBalls;
let allBall = 0;

for (let b = 0; b < balls.length; b++) {
  allBall = allBall + balls[b];
}
console.log(allBall);

// first ball last ball
const minBAlls = balls[0];
const maxBalls = balls[balls.length - 1];
console.log(minBAlls);
console.log(maxBalls);

// Creating a new array based on the existing array
const class2 = [1, 2, 3, 4, 5];
const newArr = [];
for (let cc = 0; cc < class2.length; cc++) {
  newArr.push(class2[cc] ** 2);
}
console.log(newArr);

let summm = 0;
for (let u = 0; u < class2.length; u++) {
  summm = summm + class2[u];
}
console.log(summm);

const newCou = ["india", "china", "bhutan", "shrilanka"];
const secArraCou = [];
for (let g = 0; g < newCou.length; g++) {
  secArraCou.push(newCou[g].toUpperCase());
}
console.log(secArraCou);

const firCou = newCou[0];
console.log(firCou);

const newCouLen = newCou.length;
let midNewCou;
if (newCouLen % 2 == 0) {
  const index1 = newCouLen / 2;
  const index2 = newCouLen / 2 - 1;
  const midNewCou1 = newCou[index1];
  const midNewCou2 = newCou[index2];
  midNewCou = [midNewCou1, midNewCou2];
} else {
  midNewCou = [newCou[Math.floor(newCouLen / 2)]];
}
console.log(midNewCou);

// ** while loop **

let kk = 0;
while (kk <= 5) {
  console.log(kk++);
}

// do while loop
let i1 = 0;
do {
  console.log(i1);
  i1++;
} while (i1 <= 5);

let gb = 0;
while (gb <= 5) {
  console.log(gb++);
}

// ** for of loop **

const numArr = [1, 2, 3, 4, 5];
for (const num of numArr) {
  console.log(num);
}

const arrNum = [6, 7, 8, 9, 10];
for (const num1 of arrNum) {
  console.log(num1 + num1);
}

let add = 0;
for (const num2 of arrNum) {
  add = add + num2;
}
console.log(sum);

const case1 = ["html", "css", "js", "react", "redux"];
for (const cases of case1) {
  console.log(cases.toUpperCase());
}
for (const cases1 of case1) {
  console.log(cases1[0]);
}

const countries1 = ["india", "china", "bhutan", "shrilanka", "austrelia"];
const countriesUpper = [];
for (const country1 of countries1) {
  countriesUpper.push(country1.toUpperCase());
}
console.log(countriesUpper);

let upperCountries;
for (let uc = 0; uc < countries1.length; uc++) {
  upperCountries = countries1[uc].toUpperCase();
  console.log(upperCountries);
}

// Break is used to interrupt a loop
for (let t = 0; t <= 5; t++) {
  if (t == 3) {
    break;
  }
  console.log(t);
}

for (x = 0; x <= 6; x++) {
  if (x == 4) {
    break;
  }
  console.log(x);
}

//"continue" We use the keyword continue to skip a certain iterations.
for (let b = 0; b <= 5; b++) {
  if (b == 3) {
    continue;
  }
  console.log(b);
}

// **  Exercise: Level  1**
const countrY = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];
const webTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];
const mernStack = ["MongoDB", "Express", "React", "Node"];

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let l = 0; l < 11; l++) {
  console.log(l);
}
let ll = 0;
while (ll < 11) {
  console.log(ll++);
}
let lll = 0;
do {
  console.log(lll);
  lll++;
} while (lll < 11);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let w = 10; w > -1; w--) {
  console.log(w);
}
let w1 = 10;
while (w1 > -1) {
  console.log(w1--);
}
let w2 = 10;
do {
  console.log(w2);
  w2--;
} while (w2 > -1);

// Iterate 0 to n using for loop
let n1 = 5;
for (let i5 = 0; i5 <= n1; i5++) {
  console.log(i5);
}

// Write a loop that makes the following pattern using console.log():# pattern
let hash = "";
for (hs = 0; hs < 7; hs++) {
  hash += "#";
  console.log(hash);
}

let noClass;
for (nc = 0; nc < 11; nc++) {
  console.log(`${nc}*${nc}=${nc * nc}`);
}

for (let mt = 0; mt <= 10; mt++) {
  console.log(`${mt} ${mt * mt} ${mt * mt * mt}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let even = 0; even <= 100; even++) {
  if (even % 2 == 0) console.log(even);
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let odd = 0; odd <= 100; odd++) {
  if (odd % 2 !== 0) {
    console.log(odd);
  }
}

// Prime Number

for (let prime = 2; prime <= 100; prime++) {
  let isPrime = true;
  for (let prime2 = 2; prime2 < prime; prime2++) {
    if (prime % prime2 === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(prime);
  }
}

let primeSum = 0;
for (let ps = 2; ps <= 100; ps++) {
  let isPs = true;
  for (let ps1 = 2; ps1 < ps; ps1++) {
    if (ps % ps1 === 0) {
      isPs = false;
      break;
    }
  }
  if (isPs) {
    console.log(ps);
    primeSum += ps;
  }
}
console.log("Sum of prime number", primeSum);

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumALL = 0;
for (let sa = 0; sa <= 100; sa++) {
  console.log(sa);
  sumALL += sa;
}
console.log(`"The sum of all number 0 to 100 is ${sumALL}"`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens
let evenSum = 0;
for (let es = 0; es <= 100; es++) {
  if (es % 2 == 0) {
    evenSum += es;
  }
}
console.log(`"The sum of all even number from 0 to 100 is ${evenSum}"`);

// Use for loop to iterate from 0 to 100 and print the sum of all odd
let sumAllOdd = 0;
for (let so = 0; so <= 100; so++) {
  if (so % 2 !== 0) {
    sumAllOdd += so;
  }
}
console.log(`"The sum of all odd number from 0 to 100 is ${sumAllOdd}"`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
console.log(`[${evenSum},${sumAllOdd}]`);

// Develop a small script which generate array of 5 random numbers
let randomNo = [];
for (let rn = 0; rn < 5; rn++) {
  const randomNumber = Math.floor(Math.random() * 100);
  randomNo.push(randomNumber);
}
console.log(randomNo);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let unique = [];
while (unique.length < 5) {
  const random1 = Math.floor(Math.random() * 100);
  if (!unique.includes(random1)) {
    unique.push(random1);
  }
}
console.log(unique);

// Develop a small script which generate a six characters random id

function generateRandomId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomID = "";

  for (let c = 0; c < length; c++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }
  return randomID;
}
const randomID = generateRandomId(6);
console.log(randomID);

// ** Exercises: Level 2 **
// Develop a small script which generate any number of characters random id:
function randomCN(length) {
  const ranCharacter = "234gsxdfszdFDGHKJHGJFtgujyhk87656";
  let randomId = "";
  for (let g = 0; g < length; g++) {
    const ranDomIndex = Math.floor(Math.random() * ranCharacter.length);
    randomId += ranCharacter.charAt(ranDomIndex);
  }
  return randomId;
}
const randomId = randomCN(length);
console.log(randomId);

// Write a script which generates a random hexadecimal number.
function hexadecimalNo() {
  const randomHexNo = Math.floor(Math.random() * 16777215).toString(16);

  return `#${randomHexNo.padStart(6, "0")}`;
}
const randomHexa = hexadecimalNo();
console.log(randomHexa);

// Write a script which generates a random rgb color number.
function generateRandomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}
const randomColor = generateRandomRGB();
console.log(randomColor);

// Using the above countries array, create the following new array.

const counArr = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA"
];
let newCounArr = [];
for (let ca = 0; ca < counArr.length; ca++) {
  newCounArr.push(counArr[ca].toLowerCase());
}
console.log(newCounArr);

// Using the above countries array, create an array for countries length'.
let counArrLen = [];
for (let al = 0; al < counArr.length; al++) {
  counArrLen.push(counArr[al].length);
}
console.log(counArrLen);

// // Use the countries array to create the following array of arrays:
let newAr = [];
for (let na = 0; na < counArr.length; na++) {}

// creat  ['Albania', 'ALB', 7] this type array in console.

function newConArr() {
  const result = counArr.map(country => {
    const len = country.length;
    const code = country.slice(0, 3);
    return [country.charAt(0) + country.slice(1).toLowerCase(), code, len];
  });
  return result;
}
const secArr2 = newConArr();
console.log(secArr2);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const findLAND = [];
for (let fl = 0; fl < counArr.length; fl++) {
  if (counArr[fl].includes("LAND")) {
    findLAND.push(counArr[fl]);
  }
}
console.log(findLAND);

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const find_ia = [];
for (let fia = 0; fia < counArr.length; fia++) {
  if (counArr[fia].endsWith("IA")) {
    find_ia.push(counArr[fia]);
  }
}
console.log(find_ia);

// Using the above countries array, find the country containing the biggest number of characters.

let lastCountry = "";
for (let lc = 0; lc < counArr.length; lc++) {
  if (counArr[lc].length > lastCountry.length) {
    lastCountry = counArr[lc];
  }
}
console.log(lastCountry);

// Using the above countries array, find the country containing only 5 characters.
const len5 = [];
for (let lf = 0; lf < counArr.length; lf++) {
  if (counArr[lf].length === 5) {
    len5.push(counArr[lf]);
  }
}
console.log(len5);

// Find the longest word in the webTechs array
let longIt = "";
for (let li = 0; li < webTech.length; li++) {
  if (webTech[li].length > longIt.length) {
    longIt = webTech[li];
  }
}
console.log(longIt);

// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10]]

const result1 = webTech.map(web => [web, web.length]);
console.log(result1);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStac = ["MongoDB", "Express", "React", "Node"];
const mern = mernStac.map(stack => stack.charAt(0)).join("");
console.log(mern);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for (const newWeb of webTech) {
  console.log(newWeb);
}
//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruiTS = ["banana", "orange", "mango", "lemon"];
const reverseFruits = [];
for (let f = fruiTS.length - 1; f >= 0; f--) {
  reverseFruits.push(fruiTS[f]);
}
console.log(reverseFruits);

const fullStack1 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"]
];

for (let fs1 = 0; fs1 < fullStack1.length; fs1++) {
  for (let fs2 = 0; fs2 < fullStack1[fs1].length; fs2++) {
    console.log(fullStack1[fs1][fs2].toUpperCase());
  }
}

// ** Exercises: Level 3 **
// Copy countries array(Avoid mutation)
const rashtra = ["India", "China", "Brazil", "Canada", "Australia"];
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const copiesRashtra = ["India", "Brazil", "China", "Canada", "Australia"];
console.log(copiesRashtra);
const copyRashSort = copiesRashtra.sort();

console.log(copyRashSort);

// Sort the webTechs array and mernStack array
const sortWebTech = webTech.sort();
console.log(sortWebTech);
const sortMERN = mernStac.sort();
console.log(sortMERN);

// Extract all the countries contain the word 'land' from the countries array and print it as array
const findLand = [];
for (let fl1 = 0; fl1 < counArr.length; fl1++) {
  if (counArr[fl1].includes("LAND")) {
    findLand.push(counArr[fl1]);
  }
}
console.log(findLand);

// Find the country containing the hightest number of characters in the countries array
let finalLast = "";
for (let lf = 0; lf < counArr.length; lf++) {
  if (counArr[lf].length > finalLast.length) {
    finalLast = counArr[lf];
  }
}
console.log(finalLast);

//Reverse the countries array and capitalize each country and stored it as an array

const revCou = [];
for (rc = rashtra.length - 1; rc >= 0; rc--) {
  revCou.push(rashtra[rc]);
}
console.log(revCou);

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
// let primeSum = 0;
// for (let prime = 2; prime <= 100; prime++) {
//   let isPrime = true;

//   for (let prime2 = 2; prime2 < prime; prime2++) {
//     if (prime % prime2 === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(prime);
//     primeSum += prime;
//   }
// }
// console.log("Sum of prime number", primeSum);
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

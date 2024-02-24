// Day - 1 Exercise

// Comments can make code readavle
// Welcome to 30 days of javascript
// Comment can make code readable, easy to reuse and informative
// Comment can make code readable, easy to reuse and informative
// Comment can mkae code readable, easy to reuse and informative
// Comment can make code readable, easy to reusr and informative

let vegi = "patato";
console.log(typeof vegi);
let banana;
console.log(banana);

let firsT = "ketaki";
let lasT = "karanjkar";
let aGe = 24;
let yo = 30;
console.log(firsT);
console.log(lasT);
console.log(aGe);
console.log(firsT, lasT, aGe);
console.log(`I am ${aGe} years old`);
console.log(`You are ${yo} years old`);

// Day - 2 Exercise

let stringi =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
let patternOne = /love/;
let patternTwo = /love/gi;
console.log(stringi.match(/love/gi));

let gfd = "10";
let dsds = parseInt(gfd);
console.log(dsds);

let challenge = " 30 Days Of Java Script ";
console.log(challenge);
console.log(challenge.substr(10));
console.log(challenge.substring(2, 22));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));

let it = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(it.split());

console.log(challenge.replace("Java Script", "Python"));
console.log(challenge.charAt(11));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let fr =
  "You cannot end a sentence with because because because is a conjunction";
let rf = /because/gi;
console.log(fr.indexOf("because"));
console.log(fr.lastIndexOf("because"));
console.log(fr.search("because"));
console.log(challenge.trim(""));
console.log(fr.startsWith("You"));
console.log(fr.endsWith(o));
console.log(fr.match(/a/gi));
console.log(challenge.concat(", Python"));
console.log(challenge.repeat(2));

let gf = "10";
console.log(gf == 10);
let gff = parseInt(gf);
console.log(gff);
console.log(gf);

let bf = "9.8";
let bff = parseFloat(bf);
console.log(bff);

let ge = "python";
let eg = "jargon";
console.log(ge && eg.includes("on"));

console.log(Math.random() + 70);
let ce = "javascript";
console.log(ce[0]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8");

console.log(fr.substr(30, 25));
let sds =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let sd = /love/gi;
console.log(sds.match(sd));
console.log(fr.match(rf));

const se =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(
  se.replace(
    "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching",
    "I am a teacher and I love teaching; there is nothing as more rewarding as educaing and empowering people. I found teaching than any other job. Dose this motivate you to be a teacher."
  )
);

let perMonthSalary = 5000;
let annualBo = 10000;
let onLineCou = 15000;
let annualIncome = perMonthSalary * 12 + annualBo + onLineCou * 12;
console.log(annualIncome);

// Day - 3 Exercise
let f1 = "ketaki";
let vy = 24;
let movie;
let mobile = null;
let isSingle = true;
console.log(typeof f1);
console.log(typeof vy);
console.log(typeof movie);
console.log(mobile);
console.log(typeof isSingle);

let jh = "10";
let hj = 10;
console.log(jh == hj);

let df = "9.8";
console.log(Math.ceil(df));

let is = "abcd";
let si = "ABCD";
console.log(is == si);

let vb = 3 < 5;
let da = 100 != 40;
let isSunny = true;
console.log(vb, da, isSunny);

let bv = 5 < 2;
let ad = 20 != 20;
let isOn = false;
console.log(bv, ad, isOn);

const az = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortAGE = az.sort((a, b) => a - b);
const mIn = sortAGE[0];
const mAx = sortAGE[sortAGE.length - 1];
console.log(sortAGE);
console.log(mIn);
console.log(mAx);

const asd = [14, 63, 62, 74, 20, 26, 16, 35, 43];
asd.sort((a, b) => a - b);
const lenG = asd.length;
let middleAge;
if (lenG % 2 === 0) {
  const middle1 = asd[lenG / 2 - 1];
  const middle2 = asd[lenG / 2];
  middleAge = (middle1 + middle2) / 2;
} else {
  middleAge = asd[Math.floor(lenG / 2)];
}
console.log(middleAge);

const arrayS = [12, 45, 36, 11, 71, 54, 65, 35, 63];
arrayS.sort((a, b) => a - b);
const lambi = arrayS.length;
let middleNumber;
if (lambi % 2 === 0) {
  const midNum1 = arrayS[lambi / 2 - 1];
  const midNum2 = arrayS[lambi / 2];
  middleNumber = (midNum1 + midNum2) / 2;
} else {
  middleNumber = arrayS[Math.floor(lambi / 2)];
}
console.log(middleNumber);

const yy = [12, 23, 34, 45, 56, 67, 78, 89, 90, 10];
// yy.sort((a, b) => a - b);
const minyy = yy[0];
const maxyy = yy[yy.length - 1];
console.log(minyy);
console.log(maxyy);

const total = yy.length;
let midSortNo;
if (total % 2 === 0) {
  const oneMid = yy[total / 2 - 1];
  const twoMid = yy[total / 2];
  midSortNo = (oneMid + twoMid) / 2;
} else {
  midSortNo = yy[Math.floor(total / 2)];
}
console.log(midSortNo);

// const desh = ["India", "Greece", "Kenya", "Bhutan", "Mexico", "Oman"];
// const totalDesh = desh.length;
// let middleDesh;
// if (totalDesh % 2 === 0) {
//   const midIndex1 = totalDesh / 2 - 1;
//   const midIndex2 = totalDesh / 2;
//   const midDesh1 = desh[midIndex1];
//   const midDesh2 = desh[midIndex2];
//   middleDesh = [midDesh1 + midDesh2];
// } else {
//   middleDesh = desh[Math.floor(totalDesh / 2)];
// }
// console.log(middleDesh);

const sumAll = yy.reduce((acc, curr) => acc + curr);
const average1 = sumAll / yy.length;
console.log(average1);

// Find the range of the ages(max minus min)

const moneyy = [30, 54, 62, 96, 60, 43, 75];
const sortMoneyy = moneyy.sort((a, b) => a - b);
const ww = sortMoneyy.length;
const maxMoneyy = moneyy[moneyy.length - 1];
const minMoneyy = moneyy[0];
const rangE = maxMoneyy - minMoneyy;
console.log(rangE);

const desh = ["India", "Greece", "Kenya", "Bhutan", "Mexico", "Oman"];
const totalDesh = desh.length;
let middleDesh;
if (totalDesh % 2 === 0) {
  const midIndex1 = totalDesh / 2 - 1;
  const midIndex2 = totalDesh / 2;
  const midDesh1 = desh[midIndex1];
  const midDesh2 = desh[midIndex2];
  middleDesh = [midDesh1 + midDesh2];
} else {
  middleDesh = desh[Math.floor(totalDesh / 2)];
}
console.log(middleDesh);

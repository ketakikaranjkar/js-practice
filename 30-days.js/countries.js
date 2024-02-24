const ddd = ["India", "china", "bhutan", "china", "australia", "brazil"];
let index = ddd.indexOf("Ethiopia");
if (index !== -1) {
  console.log("ETHIOPIA");
} else {
  ddd.push("Ethiopia");
  console.log(ddd);
}
const sumi = ddd.reduce((acc, country) => acc + country.length, 0);
const averagee = sumi / ddd.length;

// Find the minimum and maximum lengths of countries
const lengths = ddd.map(country => country.length);
const min1 = Math.min(...lengths);
const max1 = Math.max(...lengths);
const minDiff = Math.abs(min1 - averagee);
const maxDiff = Math.abs(max1 - averagee);
console.log("Absolute Difference (min - averagee):", minDiff);
console.log("Absolute Difference (max - averagee):", maxDiff);
const firstTenCountries = ddd.slice(0, 10);
console.log("First Ten Countries:", firstTenCountries);

// Find the middle country(ies) in the countries array

const dddd = ["India", "china", "bhutan", "china", "australia", "brazil"];
let middleCountries = [];
if (dddd.length % 2 === 0) {
  const middleIndex1 = dddd.length / 2 - 1;
  const middleIndex2 = dddd.length / 2;
  middleCountries.push(dddd[middleIndex1], dddd[middleIndex2]);
} else {
  const middleIndex = Math.floor(dddd.length / 2);
  middleCountries.push(dddd[middleIndex]);
}
console.log("Middle Country/Countries:", middleCountries);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const cont = ["India", "china", "bhutan", "china", "australia", "brazil"];

let firstHalf = [];
let secondHalf = [];

const halfLength = Math.ceil(cont.length / 2);

if (cont.length % 2 === 0) {
  firstHalf = cont.slice(0, halfLength);
  secondHalf = cont.slice(halfLength);
} else {
  firstHalf = cont.slice(0, halfLength);
  secondHalf = cont.slice(halfLength);
}
console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);

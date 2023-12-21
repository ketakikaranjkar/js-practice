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

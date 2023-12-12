// CONDITIONS

// if condition
let paya = 40;
if (40 > 30) {
  console.log(`${paya} is greater then 30`);
}

// if else condition
let numCon = 3;
if (numCon > 0) {
  console.log(`${numCon} is a positive number`);
} else {
  console.log(`${numCon} is negative number`);
}

let numCoN = -4;
if (numCoN < 0) {
  console.log(`${numCoN} is a negative number`);
} else {
  console.log(`${numCoN} is a positive number`);
}

let isMarrieD = false;
if (isMarrieD) {
  console.log(`yes is married`);
} else {
  console.log(`no not married`);
}

// if else if else condition
let d = 0;
if (d > 0) {
  console.log(`${d} is d positive number`);
} else if (d < 0) {
  console.log(`${d} is d negdtive number`);
} else if (d == 0) {
  console.log(` is zero`);
} else `${d} is not d number`;

// let weather = "sunny";
// if (weather === "rainy") {
//   console.log(`we need a rain coat`);
// } else if (weather === "cloudy") {
//   console.log(`it might be cold, you need a jacket`);
// } else if (weather === "sunny") {
//   console.log(`go out freely`);
// } else {
//   console.log("no need for rain coat");
// }

// switch condition
// let weather = "cloudy";
// switch (weather) {
//   case "rainy":
//     console.log("You need a rain coat");
//     break;
//   case "cloudy":
//     console.log("It might be cold, you need a jacket");
//     break;
//   case "sunny":
//     console.log("go out freely");
//     break;
//   default:
//     console.log("no need for rain coat");
// }

// let dayUserInput = prompt("What day is today");
// let dayY = dayUserInput.toLowerCase();
// switch (dayY) {
//   case "monday":
//     console.log("Today is Monday");
//     break;
//   case "tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "thursday":
//     console.log("Today is Thursday");
//     break;
//   case "friday":
//     console.log("Today is Friday");
//     break;
//   case "saturday":
//     console.log("Today is Saturday");
//     break;
//   case "sunday":
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("it is not a week day");
// }

// let company = prompt("what company do you like");
// let branch = company.toLowerCase();
// switch (branch) {
//   case "iphone":
//     console.log("Your fevorite Iphone company ");
//     break;
//   case "tata":
//     console.log("Your fevorite Tata comapny");
//     break;
//   case "suzuki":
//     console.log("Your fevorite Suzuki company");
//     break;
//   case "bajaj":
//     console.log("Your fevorite Bajaj company");
//     break;
//   default:
//     console.log("This is not a company");
// }

// let boo = 30;
// 30 > 20
//   ? console.log(`${boo} greater then 20`)
//   : console.log(`${boo} lesser then 20`);

//   ** Exercise: Level 1 **

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18
// let ageDrive = prompt("Enter your age");
// if (ageDrive >= 18) {
//   console.log("You are old enough to drive");
// } else if (ageDrive < 18) {
//   let yearsToWait = 18 - ageDrive;
//   console.log(
//     `you are not enough to drive. Plaease wait for ${yearsToWait} year(s) turn into 18`
//   );
// } else {
//   console.log("Please enter a valid age");
// }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAGe = 30;
// let yourAGe = prompt("Enter Your Age");
// if (myAGe > yourAGe) {
//   console.log("I am older than you");
// } else if (myAGe < yourAGe) {
//   console.log("You are older then me");
// } else {
//   console.log("We are of the same age");
// }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let aA = 5;
let bB = 6;
if (aA > bB) {
  console.log("aA is greater than bB");
} else {
  console.log("aA is less then bB");
}

let aaA = 5;
let bbB = 6;
aaA < bbB
  ? console.log("aaA is less then bbB")
  : console.log("aaA is Greater than bbB");

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let math = prompt("Enter a number");
// if (math % 2 === 0) {
//   console.log(`${math} is an even number`);
// } else {
//   console.log(`${math} is an odd number`);
// }

// Write a code which can give grades to students according to theirs scores
// let scores = prompt("Enter Scores");
// if (scores >= 80 && scores <= 100) {
//   console.log("Grade - A");
// } else if (scores >= 70 && scores <= 89) {
//   console.log("Grade - B");
// } else if (scores >= 60 && scores <= 69) {
//   console.log("Grade - c");
// } else if (scores >= 50 && scores <= 59) {
//   console.log("Grade - D");
// } else if (scores >= 0 && scores <= 40) {
//   console.log("Grade - f");
// }

//  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// let season = prompt("Enter a Season");
// let season2 = season.toLowerCase();
// switch (season) {
//   case "autumn":
//     console.log("It;s Autumn");
//     break;
//   case "winter":
//     console.log("It's Winter");
//     break;
//   case "spring":
//     console.log("It's Spring");
//     break;
//   case "summer":
//     console.log("It;s Summer");
//     break;
//   case "September && October && November":
//     console.log("It's Autumn");
//   default:
//     console.log("Invalid season entered");
// }

// let seasonMonth = prompt("Enter a Month");
// let seasonMonth1 = seasonMonth.toLowerCase();
// switch (seasonMonth) {
//   case "September":
//   case "October":
//   case "November":
//     console.log("It's Autumn");
//     break;
//   case "December":
//   case "January":
//   case "February":
//     console.log("It's Winter");
//     break;
//   case "March":
//   case "April":
//   case "May":
//     console.log("It's Spring");
//     break;
//   case "June":
//   case "july":
//   case "August":
//     console.log("It's Summer");
//     Break;
//   default:
//     console.log("Invalid Month");
// }

//Check if a day is weekend day or a working day. Your script will take day as an input.
// let workHoli = prompt("What is the day today");
// let workHOLI = workHoli.toLowerCase();
// switch (workHoli) {
//   case "monday":
//     console.log("Monday is a working day");
//   case "tuesday":
//     break;
//     console.log("Tuesday is a working day");
//     break;
//   case "wednesday":
//     console.log("Wednesday is a working day");
//     break;
//   case "thursday":
//     console.log("Thursday is a working day");
//     break;
//   case "friday":
//     console.log("Friday is a working day");
//     break;
//   case "saturday":
//     console.log("Saturday is a weekend day");
//     break;
//   case "sunday":
//     console.log("Sunday is a weekend day");
//     break;
//   default:
//     console.log("Invalid Day");
// }

// Write a program which tells the number of days in a month
// let moNth = prompt("Enter a Month");
// let MontH = moNth.toLowerCase();
// switch (moNth) {
//   case "january":
//     console.log("January has 31 days");
//     break;
//   case "february":
//     console.log("February has 28 days");
//     break;
//   case "march":
//     console.log("March has 31 days");
//     break;
//   case "april":
//     console.log("April has 30 days");
//     break;
//   case "may":
//     console.log("May has 31 days");
//     break;
//   case "june":
//     console.log("June has 30 days");
//     break;
//   case "july":
//     console.log("July has 31 days");
//     break;
//   case "august":
//     console.log("August has 31 days");
//     break;
//   case "september":
//     console.log("September has 30 days");
//     break;
//   case "octomber":
//     console.log("Octomber has 31 days");
//     break;
//   case "november":
//     console.log("November has 30 days");
//     break;
//   case "december":
//     console.log("December has 31 days");
//     break;
//   default:
//     console.log("Invalid Month");
// }

// Write a program which tells the number of days in a month, now consider leap year.
// let moNth2 = prompt("Enter a Month");
// let MontH2 = moNth2.toLowerCase();
// switch (moNth2) {
//   case "january":
//     console.log("January has 31 days");
//     break;
//   case "february":
//     console.log("February has 29 days");
//     break;
//   case "march":
//     console.log("March has 31 days");
//     break;
//   case "april":
//     console.log("April has 30 days");
//     break;
//   case "may":
//     console.log("May has 31 days");
//     break;
//   case "june":
//     console.log("June has 30 days");
//     break;
//   case "july":
//     console.log("July has 31 days");
//     break;
//   case "august":
//     console.log("August has 31 days");
//     break;
//   case "september":
//     console.log("September has 30 days");
//     break;
//   case "octomber":
//     console.log("Octomber has 31 days");
//     break;
//   case "november":
//     console.log("November has 30 days");
//     break;
//   case "december":
//     console.log("December has 31 days");
//     break;
//   default:
//     console.log("Invalid Month");
// }

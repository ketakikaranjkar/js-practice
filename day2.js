//Excercise 1

let variablE = "30 Days Of JavaScript";
// print variable
console.log(variablE);
// check length
console.log(variablE.length);
//change full string in to upperCase
console.log(variablE.toUpperCase("30 Days Of JavaScript"));
//change full string in to upperCase
console.log(variablE.toLowerCase("30 Days Of JavaScript"));
//cut first word
console.log(variablE.substring(3, 21));
//cut string except first word
console.log(variablE.substring(0, 3));
//check  one word is it in string = true or false
console.log(variablE.includes("Script"));
//split string i  to array
console.log(variablE.split());
//split string in to array with comma
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));
//replace word with another word
console.log(variablE.replace("JavaScript", "python"));
console.log(variablE.charAt(15));
console.log(variablE.charCodeAt("J"));
console.log(variablE.lastIndexOf("30"));

//search method
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.search("because"));

//trim space
let variablEe = " 30 days of javascript";
let vari = /a/;
let variablEe1 = /a/g;
console.log(variablEe.trim());
console.log(variablEe);

console.log(variablEe.startsWith("days"));
console.log(variablEe.endsWith("javascript"));
console.log(variablEe.match(variablEe1));

let javaA = "30 days of";
console.log(javaA.concat(" javascript"));

console.log(variablE.repeat(2));

//Exercise 2
let quote =
  " The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another";
console.log(quote);

let quote1 =
  "Love is not petronizing and charity isn't about pity, it is about love. Charity and love are the same --with charity you give love, so don't just give money but reach our your hand instead ";
console.log(quote1);

//changing data type
let no = "10";
let no1 = parseInt(no);
let nO = 10;
console.log(typeof no);
console.log(typeof nO);
console.log(typeof no1);
console.log(no1);
console.log(nO);

//make it round figure (ciel)
let flo = "9.8";
console.log(flo);
console.log(Math.ceil(9.8));

//includes
let lang5 = "python";
let lanG = "jargon";
console.log(lang5 && lanG.includes("on"));

let randNo1 = Math.random() + 30;
console.log(randNo1);

let randNo = Math.floor(Math.random() + 60);
console.log(randNo);

let ranDno = Math.floor(Math.random() * 500);
console.log(ranDno);

let jS = "JavaScript";
let firstLEtter = string[0];
let dfgsd = string[4];
console.log(firstLEtter);
console.log(dfgsd);

console.log(
  "1 \t1 \t1 \t1 \t1\n2 \t1 \t2 \t4 \t8\n3 \t1 \t3 \t9 \t27 \n4 \t1 \t4 \t16 \t64 \n5 \t1 \t5 \t25 \t125"
);

let bCoz =
  "You cannot end a sentence with because because because is a conjunction";
console.log(bCoz.substr(30, 25));

//Exercise 3

//count the number of word "love"
let lovE =
  "Love is the best thing in the world. Some found there love and some are still looking for their love";
let pattern = /love/gi;
console.log(lovE.match(pattern));

//count the number of word "because"
let sen =
  "You cannot end a sentence with because because because is a conjunction";
let pattern1 = /because/gi;
console.log(sen.match(pattern1));

//replace sentence
let replacE =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(
  replacE.replace(
    "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching",
    "I am a teacher and i love teaching. There is nothing as more rewarding as educating and empowering people. i found teaching more interesting than any other job. Does this motivated you to be a teacher. The 30 days of javascript is also the result of love of teaching "
  )
);

let salarY = 5000;
let annualBonus = 10000;
let classes = 15000;
console.log(salarY * 12 + annualBonus + classes * 12);
console.log(
  `'He earns ${5000} euro from salary per month, ${10000} euro annual bonus ${15000} euro online courses per month'`
);

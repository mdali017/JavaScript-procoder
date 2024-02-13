// JavaScript Strings

const fullName = "Ali Hasan";
const country = "Bangladesh";
const sentence = "I'm from Bangladesh";
const quote = 'Bill Gates, "Some Text"';
// const quote2 = "Bill Gates, \"Some Text\"";
const quote2 = 'Bill Gates, "Some Text"';
const quote3 = 'Bill Gates says,\n "Some Text"'; // line break
// console.log(quote3);

// const sen = "i\'m from Bangladesh";
const sen = "i'm from Bangladesh";
// console.log(sen);

// *********** Added string
// const info = "Ali" + " " + "Hossain";
const info = "Ali " + "Hossain";
// console.log(info);
const info2 = fullName + " " + country;
const info3 = "I'm " + fullName + " I'm from " + country;
// console.log(info3);

let info4 = `I'm ${fullName} I'm from ${country} ${4 + 4}`;
// console.log(info4);
let info5 = `I'm ${fullName} I'm 
from ${country} ${4 + 4}`;
// console.log(info5);

const fullName2 = new String("Shovo");
fullName[0] = "u";
// console.log(fullName2);

const name = new String("Hasan");
const name2 = "Hasan";
// console.log(name == name2);
// console.log(name === name2);

// ****************** Strings Methods
const info6 = "Mohabbat";
// console.log(info6.length);
// console.log(info6.charAt(3));
// console.log(info6.indexOf("a"));
// console.log(info6.toUpperCase());
// console.log(info6.toLowerCase());
// console.log(info6.slice(2, 5));

// slice (-) ney but substring(-) ney na
// console.log(info6.slice(5));
// console.log(info6.substring(5));

const someText = "        Ali    ";
// console.log(someText.trim());
// console.log(someText.trim());
// console.log(someText.trimEnd());
// console.log(someText.trimStart());

const url = "https://ali.com/new%20%Blog";
// console.log(url.replace("%20", "==="));

const student = "Student 1";
console.log(student);
console.log(student.split(" "));

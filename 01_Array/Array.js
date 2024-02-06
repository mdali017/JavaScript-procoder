// Javascript array
// const lang1 = "HTML"
// const lang2 = "CSS";
// const lang3 = "JavaScript"

const language1 = ["HTML", "CSS", "JavaScript", "PHP", true, 50];
const language2 = new Array("HTML", "CSS", "JavaScript", "PHP", true, 50);
// console.log(language1[3], 8);

// Delete and Remove Last Item
language1.pop();

// Add last item
language1.push("Angular.js");

// add first item
language1.unshift("Basic computer");

// Delete First Item
language1.shift();

// console.log(language1);

// console.log(language1);
// console.log(language1[3]);
// console.log(language1.at(3), 26);
// console.log(language1.toString());
// console.log(language1.join('"'));
// console.log(language1.join("$"));
// console.log(language1.join(" "));
// console.log(language1.join(" * "));

// value change
language1[3] = "React JS";
language1[4] = false;
language1[5] = "vue js";
language1[6] = "laravel";
language1[10] = "bootstrap";

// first item access
// console.log(language1[0]);
// console.log(language1[5]);
// console.log(language1[language1.length - 1]);
// language1.pop();
// console.log(language1);
// console.log(language1);
// console.log(language1);
// console.log(language1.toString());
// console.log(language1.length);
// console.log(language1[2]);

// const person = [];
// (person["firstName"] = "Ali"), (person["lastName"] = "Mohabbat");
// person[2] = 35;
// console.log(person);
// console.log(person.length);

// const num = [20];
const num = new Array(20, 21);
// console.log(num);

const x = [1, 2, 3, 4];
const y = [5, 6, 7, 8];
const p = [10, 12, 14];
const q = [100, 120, 140];
const z = x.concat(y, p, q);
// console.log(z, 66);

const a = [
  [1, 2, 3, [10, 11, 12]],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(a);
// console.log(a.flat());

const pL = ["HTML", "CSS", "JavaScript", "Python", "PHP"];
// pL.splice(2, 0, "info", "info2");
// pL.splice(0, 1);
// pL.splice(0, 4);

console.log(pL);

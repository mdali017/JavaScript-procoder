// JavaScript Date

const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(typeof myDate); // object
// console.log(myDate.toDateString()); // Wed Mar 06 2024
// console.log(myDate.toLocaleString()); // 3/6/2024, 11:44:00 PM
// console.log(
//   myDate.toLocaleString("default", {
//     // weekday: "long",
//     // weekday: "short",
//   })
// ); // 3/6/2024, 11:44:00 PM

// let updateDate = new Date(2024, 3, 5);
let updateDate = new Date(2024, 3, 5, 11, 34, 21); // Fri Apr 05 2024 11:34:21 GMT+0600 (Bangladesh Standard Time)
// console.log(updateDate);

// let updateDate = new Date("01-15-2002"); // Tue Jan 15 2002 00:00:00 GMT+0600 (Bangladesh Standard Time)

//
let myTime = Date.now();
// console.log(myDate); // 1709748332274

function simpleTask() {
  //   for (let step = 0; step < 5; step++) {
  for (let step = 0; step < 10000; step++) {
    console.log("Walking east to one step");
  }
}
let startTime = Date.now();
simpleTask();
let endTime = Date.now();
console.log(`The Task took ${endTime - startTime} millisecond to complete`); //The Task took 0 millisecond to complete

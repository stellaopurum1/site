// there are different javascript datatypes, which are strings, number, boolean, array and object

let string = "letuyyjggters";
console.log(string)
let numbers = 669798798;
console.log(numbers)
let boolean = true;

// If you want an array
const name1 = "stella"
const name2 = "opurum"
const name3 = "David"
const array = ["stella", "opurum", "David"];
console.log(array)

//  If you want an object
let student = {
  name: "abiye",
  age: 22,
  isFine: true,
  hobbies: ["playing", "eating", "anything"]
};
// console.log(student)

// function
function greet() {
  console.log(1 + 1)
}
greet() //execute a function, invoke a function

function click(a, b) {
  return a + b
}
const result = click(6, 4)
console.log(result)

function press(f, t) {
  return f * t
}
console.log(press(8, 2))

// global scope 
let smile = "htfygjgg"
function hi() {
  console.log(smile)
}
hi()

//local scope
function hey() {
  let laugh = "milk"
  console.log(laugh)
}
hey()

// function expression./ variable function
const sayHello = function () {
  console.log("jghhh")
}
sayHello()

const PlayStore = function (a, b) {
  return a * b

}
console.log(PlayStore(3, 3))

const Flatwave = function (z, y) {
  return z + y
}
console.log(Flatwave(7, 9))

// control flow in javascript
const age2 = 23
// if
if (age2 >= 23) {
  console.log("You are an adult.");
}
// if else
if (age2 >= 23) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
// else if
score = 75
  if (score > 90) {
  console.log("Excellent");
} else if (score > 70) {
  console.log("Good");
} else {
  console.log("Needs improvement");
}

// switch case
const JGGJGHBG = "Monday"
switch (JGGJGHBG) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("WEEK DAYS");
}

// for loops
// const array2 = ["apple", "banana", "cherry"];

// for (let index = 0; index < array.length; index+1) {
//   console.log(array2[index]); 
// }

// // while loop
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i+1;
// }

const hello = function(){
  try {
    console.log(kjbkjk)
  } catch (error) {
    console.log(error.message)
  }finally{
    console.log("jndnd")
  }
}
hello()




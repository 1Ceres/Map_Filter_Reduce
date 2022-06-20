// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// Map long version
// var newNumbers = [];
// function double(x){
//   return(x*2);
// }
// const newNumbers = numbers.map(double)

//Map simplyfy
// const newNumbers = numbers.map(function (x){
//   return x*2;
// });

//forEach method
// var newNumbers = [];
// function double(x){
//   newNumbers.push(x*2);
// }
// numbers.forEach(double);

//Filter - Create a new array by keeping the items that return true.

//filter method
// const newNumbers = numbers.filter(function (num){
//   return num > 10;
// });

//forEach method
// var newNumbers =[];
// numbers.forEach(function (num){
//   if (num>10){
//     newNumbers.push(num);
//   }
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumbers = 0;
// numbers.forEach(function (x){
//   newNumbers +=x;
// });

// var newNumbers = numbers.reduce(function (newNumbers, x){
//   return newNumbers+=x;
// });

//Find - find the first item that matches from an array.
// const newNumbers = numbers.find(function (num){
//   return num>10;
// });

//FindIndex - find the index of the first item that matches.
// const newNumbers = numbers.findIndex(function (x) {
//   return x > 10;
// });

// console.log(newNumbers);

import emojipedia from "./emojipedia.js";
console.log(emojipedia);
const result = emojipedia.map(function (mean) {
  return mean.meaning.substring(0, 100);
});
console.log(result);

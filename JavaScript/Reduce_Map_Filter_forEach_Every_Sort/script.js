// | Method    | Returns?    | Use for...                         |
// | --------- | ----------- | ---------------------------------- |
// | `forEach` | ❌ nothing   | Side effects (log, mutate DOM)     |
// | `filter`  | ✅ new array | Pick items by condition            |
// | `map`     | ✅ new array | Transform every item               |
// | `reduce`  | ✅ one value | Combine items into a single result |


// sort
// let nums = [5, 1, 10, 3];
//   nums.sort((a, b) => a - b); // Ascending: [1, 3, 5, 10]


// forEach
// arr = [1,2,3,4,5];
// arr.forEach((item, index) => {
//   // do something with item
// });


//  map
// let prices = [1, 2, 3];
// let pricesWithTax = prices.map((price, index, prices) => {
//     return price * 2;
// });
// console.log(pricesWithTax); // [2, 4, 6]


// filter
// let numbers = [10, 25, 30, 5, 18];
// let above20 = numbers.filter((num) => {
//     return num > 20;
// });
// // or
// // let above20 = numbers.filter(num => num > 20);
// console.log(above20); // ➞ [25, 30]


// // reduce
// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // ➞ 15


// // every 
// let scores = [90, 79, 88, 92];
// //let allPassed = scores.every(score => score >= 80);
//  let allPassed = scores.every((score)=> {
//     return score>=80;
// })
// console.log(allPassed); // ➞ true

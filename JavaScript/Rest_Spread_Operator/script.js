// Rest Operator

// let [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a);      // 1
// console.log(b);      // 2
// console.log(others); // [3, 4, 5] // 3,4,5 ko res krwadiya ek arrayme

// Spread Operator
let s1 = [1,2,3];
let s2 = [4,5,6];
let s3 = [...s1,...s2];  // s1 and s2 ko spread krke s3 me store krdiya
console.log(s3);
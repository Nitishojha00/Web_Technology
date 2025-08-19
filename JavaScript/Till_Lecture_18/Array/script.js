// // Remove duplicates
// let arr = [1,2,3,3,3];
// arr = [...new Set(arr)];
// console.log(arr);


// //flattening nested array 
// let arr = [1, [2, [3]]];
// let flat = arr.flat(2); // [1, 2, 3]


// // string to array
// let csv = "a,b,c";
// let arr = csv.split(','); // ['a', 'b', 'c']
// console.log(arr);


// // copy a array
//   arr = [1,2,3];
//   let copy = [...arr];
//   console.log(copy);

// // splice
// let arr = [1, 2, 3, 4];
// arr.splice(1, 2); // removes 2 and 3 → arr becomes [1, 4]
// console.log(arr);

// // merge two array
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let merged = [...arr1, ...arr2];
// console.log(merged);

// element present in arr or not
// arr = [1,2,3];
//console.log(arr.includes(3)); // true or false

// check array or not
// let arr = [1, 2, 3];
// console.log(Array.isArray(arr));  // ✅ true

// //   Traversal
// let arr = [1, 2, 3];
// arr.forEach((item, index, arr) => {
//   console.log(index, item);
// });



// 1. Adding / Removing Elements

// push(element) → Add to end.

// pop() → Remove from end.

// unshift(element) → Add to start.

// shift() → Remove from start.

// splice(start, deleteCount, ...items) → Add/remove at specific index.

// 2. Iteration / Transformation

// forEach(callback) → Loop over array.

// map(callback) → Create new array with transformed values.

// filter(callback) → Create new array with only elements that pass test.

// reduce(callback, initialValue) → Reduce array to single value.

// some(callback) → Check if any element passes test.

// every(callback) → Check if all elements pass test.

// 3. Searching

// includes(value) → Check if array contains value.

// indexOf(value) → First index of value.

// lastIndexOf(value) → Last index of value.

// find(callback) → Return first element that matches.

// findIndex(callback) → Return index of first matching element.

// 4. Sorting & Reversing

// sort(compareFn) → Sort array (default: lexicographic).

// reverse() → Reverse array order.

// 5. Extracting & Combining

// slice(start, end) → Extract subarray (does not modify original).

// concat(arr1, arr2, …) → Join arrays.

// join(separator) → Convert to string.

// flat(depth) → Flatten nested arrays.

// flatMap(callback) → Map + Flatten in one go.

// 6. Conversion / Utility

// toString() → Convert to string.

// valueOf() → Return primitive array (same as itself).

// Array.isArray(value) → Check if value is an array.

// Array.from(iterable) → Convert iterable/string to array.

// Array.of(elements) → Create array from given elements.

// 🔹 Less Used but Important

// copyWithin(target, start, end) → Copy elements inside array.

// fill(value, start, end) → Fill array with value.

// [Symbol.iterator] → Make arrays iterable.

// entries() → Iterator of [index, value].

// keys() → Iterator of keys.

// values() → Iterator of values.

// at(index) → Get value at index (supports negative index).

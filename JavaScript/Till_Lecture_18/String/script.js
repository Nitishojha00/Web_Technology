// let s = 'abc';
// // let s ="abc";
// // let s = `abc`;
// console.log(s);


// 🔹 String Methods

// 1. Searching and Finding

// charAt(index) → Character at given index.

// charCodeAt(index) → Unicode (UTF-16) code at index.

// codePointAt(index) → Unicode code point (for emojis, etc).

// indexOf(searchValue, fromIndex) → First occurrence index.

// lastIndexOf(searchValue, fromIndex) → Last occurrence index.

// includes(searchValue, fromIndex) → Boolean if substring exists.

// startsWith(searchValue, position) → Boolean if string starts with value.

// endsWith(searchValue, length) → Boolean if string ends with value.

// search(regexp) → Index matching regex.

// 2. Extracting Substrings

// slice(start, end) → Extracts part of string.

// substring(start, end) → Similar to slice but swaps negative/greater indexes.

// substr(start, length) → (deprecated but still works).

// 3. Modifying / Creating New Strings

// concat(str1, str2, …) → Joins strings.

// repeat(count) → Repeats string.

// replace(searchValue, replaceValue) → Replace first occurrence.

// replaceAll(searchValue, replaceValue) → Replace all occurrences.

// toLowerCase() → Convert to lowercase.

// toUpperCase() → Convert to uppercase.

// trim() → Remove whitespace from both sides.

// trimStart() / trimLeft() → Remove whitespace at start.

// trimEnd() / trimRight() → Remove whitespace at end.

// padStart(targetLength, padString) → Pad at start.

// padEnd(targetLength, padString) → Pad at end.

// 4. Splitting and Matching

// split(separator, limit) → Splits into array.

// match(regexp) → Array of matches.

// matchAll(regexp) → Iterator of all matches.

// localeCompare(compareString) → Compare according to locale.

// 5. Conversion

// toString() → Returns string itself.

// valueOf() → Returns primitive value of String object.

// toLocaleLowerCase() → Locale-sensitive lowercase.

// toLocaleUpperCase() → Locale-sensitive uppercase.

// normalize([form]) → Unicode normalization (NFC, NFD, NFKC, NFKD).

// 6. Iteration

// String.prototype[Symbol.iterator] → Allows strings to be iterable (e.g., for...of).

// at(index) → Returns character at index (supports negative indexes
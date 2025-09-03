let n = 55.55;
console.log(n.toFixed(1));

console.log(n.toPrecision(2));

console.log(isNaN(n)); 

console.log(isFinite(n)); 

// how number stored in javascript i studied  ieee-64 bit  in semester COA Computer Organization And Architecture

// 0-63  ->  total Bits
// 0-52  ->  mentissa
// 53-62 -> exponent
// 63 -> set bit -> number is negative or positive

// number jo bhi hooga usko binary form me convert kro 1.___*2^x form me convert kro ab point ke bad wala ko mentissa me likho and jo 2 ke power hai usko 1023 me add krke convert kro binary number me jo exponent me show hoga
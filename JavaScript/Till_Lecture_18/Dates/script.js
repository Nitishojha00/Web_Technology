// 1. Get Current Date and Time  
// Date Always YYYY-MM-DD-HH-MM-SS-ms
let d = new Date();
  console.log(d);

  console.log(d.toLocaleString()); // e.g., "8/15/2025, 10:45:32 AM"
  console.log(d.toLocaleDateString()); // e.g., "8/15/2025"

d.getFullYear();   // 2025
d.getMonth();      // 7 (0-indexed: 0 = Jan, so 7 = August)
d.getMinutes();    // 45
d.getDate();       // 15
d.getDay();        // 5 (0 = Sunday, 5 = Friday)
d.getHours();      // 10

let d1 = new Date('2025-08-15');
let d2 = new Date('2025-08-20');

if (d1 < d2) {
    console.log("d1 is before d2");
}

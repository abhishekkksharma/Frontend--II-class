// 2. Find the Largest Digit in a Number
// Description: Given a number like 983762 , extract each digit (without converting to string or array) and find the largest digit.
// Challenge: Digit extraction via % and / operations.

let number = 98762;
let max = 0;

while (number > 0) {
    let remainder = number % 10;
    if (remainder > max) {
        max = remainder;
    }
    number = Math.floor(number / 10); 
}

console.log("The Max digit is", max);



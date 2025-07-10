/*

1. Printing a Welcome List Your website is welcoming new users. Print user IDs from 1 to 10 as a list on the homepage.
2. Reverse Queue Announcement A teacher wants to call students from roll number 10 to 1 for viva. Print the roll numbers in reverse order.
3. Even-numbered Coupons A shop gives discount coupons with even numbers between 1 and 20. Display all such coupon numbers.
4. Odd Seat Numbers In a small hall, only odd-numbered seats are occupied. Print all seat numbers from 1 to 20 that are odd.
5. Divisible by 5 Offer Codes A system must display all numbers between 1 to 50 which qualify for a "5% discount" (multiples of 5).
6. Basic Salary Bonus Calculation An employee gets ₹1 bonus per day for 10 days. Calculate and display the total bonus earned.
7. Multiplication Poster A teacher wants to print a multiplication poster for the number 5 for students to practice.
8. Star Pattern on ID Card You are designing a simple printed ID card layout. Show 5 stars ( * ) in a line as a header.
9. Daily Task Reminder Print tasks from Day 1 to Day 5, each on a new line.
10. Rocket Launch Countdown Display a countdown from 5 to 1 and finally print "Launch!" .
11. Even-Day Work Bonus A worker receives ₹10 extra on even-numbered days from day 1 to 100. Calculate and display the total bonus.
12. Night Shift Allowance Night shift allowance is given on odd days from day 50 to day 100. Compute the total.
13. Math Club Challenge A math club wants to know how many numbers between 1 to 100 are divisible by 9.
14. Building a Right-Aligned Tree Your UI designer needs a vertical star layout for a badge with 5 increasing lines of stars.
15. Custom Table for a Kid A child is learning the 7-times table. Print a clear, friendly list of 7 × 1 to 7 × 10.
16. Odd or Even Day Checker For days 1 to 30, print whether each day is an "Odd" or "Even" day.
17. Skip Certain Dates Print all days from 1 to 50, but skip holidays on day 5 and day 13.
18. Fizz Days: Fun Alert Every 3rd day in a month is celebrated as "Fizz Day". Print all days from 1 to 50, replacing multiples of 3 with "Fizz".
19. Buzz Days: Party Alert Buzz Day happens every 5th day. Print numbers from 1 to 50, replacing multiples of 5 with "Buzz".
20. FizzBuzz Celebration If a day is both Fizz and Buzz (i.e. divisible by 3 and 5), call it "FizzBuzz". Print days from 1 to 50 with these labels.
21. Table Wall Poster Generator Generate multiplication tables from 1 to 5 in vertical format for a school wall.
22. Square Star Banner Create a 5×5 grid of stars for a background on a printed certificate.
23. Upside-down Tree Decoration Design an inverted triangle of stars for a Christmas decoration in code.
24. Birthday Math Puzzle A friend’s age is 6. Calculate their factorial (i.e., 6 × 5 × 4 × 3 × 2 × 1 ) to create a puzzle.
25. Is it a Prime Day? Check whether a given special number like 29 is prime (used for secret code verification).
26. List of Prime Access Codes Generate all prime numbers from 1 to 50 that can be used as secure access codes.
27. ATM Pin Reversal System Reverse a 3-digit ATM pin for a quick check. For example, 123 → 321.
28. Selective Multiple Filter You want the first 10 multiples of 3, but only those not divisible by 2 (i.e., odd multiples of 3).
29. Checksum Generator Generate a checksum by adding the digits of a number. Example: for ID 5432 , checksum = 5+4+3+2 = 14.
30. Palindrome Access Check A security system accepts palindromes like 121, 1331. Check if a number is a palindrome.

*/

//1
for (let index = 0; index <= 10; index++) {
    console.log("Id: ",index);
}

//2 
for (let index = 10; index >0; index--) {
    console.log("Roll no.",index);    
}

//3
for (let index = 1; index <= 20; index++) {
    if (index%2==0) {
        console.log("Coupen number:",index);
    }    
}

//4
for (let index = 1; index <= 20; index++) {
    if (index%2!=0) {
        console.log("Odd seat number:",index);
    }    
}
//5
for (let index = 1; index <= 50; index++) {
    if (index%5==0) {
        console.log("Qualified for %5 discount:",index);
    }    
}
//6
let bonus=0;
for (let index = 1; index <= 10; index++) {
    bonus++;
}
console.log("bonus after 10 days:",bonus);
//7
for (let index = 1; index <= 10; index++) {
    console.log("5 x",index,"=",5*index);    
}
//8
for (let index = 1; index <= 5 ; index++) {
    console.log("*");
}
//9
for (let index = 1; index <= 5 ; index++) {
    console.log(`Day ${index}- Task`);
}
//10
for (let index = 5; index >= 0 ; index--) {
    if(index==0){
        console.log("Launch!");
        break;
    }
    console.log(index);
}

//11 
let evendaysBonus=0;
for (let i = 1; i <= 100; i++) {
    if(i%2==0){
        evendaysBonus+=10;
    }
}
console.log("Bonus of evendays:", evendaysBonus);
//12
let totalNightAllowance=0;
for (let i = 50; i <= 100 ; i++) {
    if(i%2!=0){
        totalNightAllowance++;
    }
}
console.log(`Night allowance days: ${totalNightAllowance}`);

//13
let divisibleByNine=0;
for (let i = 1; i <= 100 ; i++) {
    if(i%9==0){
        divisibleByNine++;
    }    
}
console.log(`Total numbers divisible by 9: ${divisibleByNine}`);

//15
for (let index = 1; index <= 10; index++) {
    console.log("7 x",index,"=",7*index);    
}

//16
for (let i = 1; i <= 30; i++) {
    if(i%2==0){
        console.log(`Dat-${i} is Even`);
    }else{
        console.log(`Dat-${i} is Odd`);
    }   
}

//17 
for (let i = 1; i <= 50; i++) {
    if(i==5 || i==13){
        continue;
    }else{
        console.log(`Day ${i}`);
    }
}

//18
for (let i = 1; i <= 50; i++) {
    if(i%3==0){
        console.log("Fizz Day");
    } 
    else{
        console.log(`Day ${i}`);
        
    }   
}
//19 

for (let i = 1; i <= 50; i++) {
    if(i%5==0){
        console.log("Buzz Day");
    } 
    else{
        console.log(`Day ${i}`);
        
    }   
}
//20
for (let i = 1; i <= 50; i++) {
    if(i%5==0 && i%3==0){
        console.log("FizzBuzz");
    } 
    else{
        console.log(`Day ${i}`);
        
    }   
}

//21
for(let i=1;i<=5;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
//24
let x=3;
let factnum=1
while (x!=0) {
    factnum*=x;
    x--;
}
console.log(factnum);

//25
let num=13;
let notprime=true;
for(let i=2;i*i<=num;i++){
    if(num%i==0){
        console.log("Not prime");
        notprime=false;
    }
}
if(notprime){
    console.log("Prime number");
}

//27 
let y=123;
let rev =0;
while (y>0) {
    let remainder=y%10;
    rev = rev*10 +remainder;
    y = Math.floor(y / 10); // Ensures y remains an integer
}
console.log(rev);

//29
let randomNum=5432;
let sum=0;
while (randomNum>0) {
    sum+= randomNum%10;
    randomNum = Math.floor(randomNum / 10); // Ensures y remains an integer
}
console.log(sum);


// 1. Number Sign Checker
// Description: You are given a number stored in a variable num . Write a program to determine whether it is positive, negative, or zero. Use if , elif , and else
// statements to print the correct classification.

let a= 5;
if (a==0) {
    console.log("Zero");
}else if(a<0){
    console.log("Negative");
}else if(a>0){
    console.log("positive");
}else{
    console.log("invalid input");
}

// 2. Even or Odd Number
// Description: A number num is already given. Write logic to check whether the number is even or odd using the modulo operator % and print the result accordingly.

let num = 45;
if(num%2==0){
    console.log("Even");
}else{
    console.log("Odd");   
}

// 3. Maximum of Three Numbers
// Description: You have three variables: a , b , and c , each storing a number. Write a program to find and print the largest number among the three using only
// conditional statements.

let x=1,y=2,z=3;
if(x>y && x>z){
    console.log("X is greatest");
}else if(y>x && y>z){
    console.log("Y is greatest");   
}else{
    console.log("Z is greatest");
}

// 4. Leap Year Validator
// Description: Given a variable year , determine whether the year is a leap year. A leap year is divisible by 4 but not by 100, unless it is also divisible by 400.

let year =2020;
if((year%400==0) || (year%4==0 && year%100!=0)){
    console.log("Leap year");
}else{
    console.log("Not a leap year.");
}

// 5. Student Grade Calculator
// Description: A student’s marks out of 100 is given. Print the grade according to the following:
// 90–100 → A+
// 75–89 → A
// 60–74 → B
// 40–59 → C
// Below 40 → Fail

let marks = 34;
if(marks>=90 && marks<=100){
    console.log("A+");
}else if(marks>=75 && marks<90){
    console.log("A"); 
}else if(marks>=60 && marks<75){
    console.log("B");
}else if(marks>=40 && marks<60){
    console.log("c");
}else {
    console.log("Fail");
}

// 6. Vowel or Consonant
// Description: You are given a single character char . Write a program to check whether it is a vowel ( a, e, i, o, u ) or a consonant. Consider both uppercase and
// lowercase letters.

let char = 'A';
if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U' || char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
    console.log("Vowel");
}else{
    console.log("Consonant");
}

// 7. Age Group Classifier
// Description: Given an age in a variable age , classify it as:
// Below 13 → Child
// 13 to 19 → Teen
// 20 to 59 → Adult
// 60 and above → Senior Print the correct age group.

let age = 34;
if(age<13){
    console.log("Child");
}else if(age>=13 && age<=19){
    console.log("Teen"); 
}else if(age>19 && age<60){
    console.log("Adult");
}else {
    console.log("Senior");
}

// 8. Simple Login Validator
// Description: Given two variables username and password , check if both match predefined correct credentials (e.g., "admin" and "pass123" ). If both match, print
// "Login successful", otherwise "Login failed".

let username="Abhish3k";
let password = "password123";
let inputussername = "Abhish3k", inputpassword="password123";
if (inputussername==username && inputpassword==password) {
    console.log("Login Succesfull");
}else{
    console.log("Login failed");
}

// 9. Divisibility Checker
// Description: You are given a number num . Determine and print:
// "Divisible by both 3 and 5"
// "Divisible by 3"
// "Divisible by 5"
// "Not divisible by 3 or 5"num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else if (num % 3 === 0) {
    console.log("Divisible by 3");
} else if (num % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 3 or 5");
}

// 10. Valid Triangle Checker
// Description: You are given the three interior angles of a triangle: a , b , and c . A triangle is valid if the sum of its angles is 180 degrees. Write logic to print whether it
// is a valid triangle or not.
let kjbn = 60, b = 60, c = 60;

if (kjbn + b + c === 180) {
    console.log("Valid Triangle");
} else {
    console.log("Invalid Triangle");
}

// 11. Three-Digit Number Checker
// Description: You are given a number num . Check and print whether it is a three-digit number, i.e., between 100 and 999 (inclusive).num = 345;

if (num >= 100 && num <= 999) {
    console.log("Three-digit number");
} else {
    console.log("Not a three-digit number");
}

// 12. Simple Calculator
// Description: You are given two numbers a and b and a variable operator (which can be + , - , * , or / ). Use conditional statements to perform the operation and
// print the result. If an invalid operator is given, print "Invalid operator" .a = 12, b = 4;

let operator = '/';
if (operator === '+') {
    console.log(a + b);
} else if (operator === '-') {
    console.log(a - b);
} else if (operator === '*') {
    console.log(a * b);
} else if (operator === '/') {
    console.log(a / b);
} else {
    console.log("Invalid operator");
}

// 13. Range Checker
// Description: You are given a number num . Check whether it lies in the range 10 to 50 (inclusive). Print "In Range" or "Out of Range" accordingly.num = 45;

if (num >= 10 && num <= 50) {
    console.log("In Range");
} else {
    console.log("Out of Range");
}

// 14. Day of the Week Finder
// Description: Given a number day_number from 1 to 7, print the corresponding day of the week. (1 → Monday, 2 → Tuesday, ..., 7 → Sunday). If the number is out of
// range, print "Invalid day number" .

let day_number = 5;

switch (day_number) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day number");
}

// 15. Traffic Signal Meaning
// Description: You are given a string color representing a traffic signal color (like "Red" , "Green" , or "Yellow" ). Print the correct instruction:
// Red → "Stop"
// Yellow → "Get Ready"
// Green → "Go" If any other color is given, print "Invalid color" .
let color = "Yellow";
switch (color.toLowerCase()) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Get Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid color");
}
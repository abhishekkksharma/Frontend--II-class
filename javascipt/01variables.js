/*
create a variable and store electric usage unit 
for first 100 units - free 
next 200 units - 1 rupee per unit 
next 200 units - 2 rupee per unit 
after - 5 rupee per unit 
*/
let units = 455;
let charge=0;
if (units<=100) {
    charge=0;
}
else if(units<=300){
    charge = (units-100)*1;
}
else if(units<=500){
    charge = 200*1 + (units-300)*2;
}else{
    charge = 200*1 + 200*2 + (units-500)*5;
}
console.log(charge);

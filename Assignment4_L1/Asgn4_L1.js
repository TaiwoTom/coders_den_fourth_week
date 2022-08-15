//question1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
usr = prompt ("Enter your age:") ;
usrRemainingAge = 18 - usr
if (usr >= 18){
 console.log("You are old enough to drive")
}else{
 console.log(`wait for ${usrRemainingAge} years to drive`);}

//question2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
myAge = prompt("Enter my age:");
yourAge = prompt("Enter your age:");
yourAgeRemaining = yourAge - myAge;
myAgeRemaining = myAge - yourAge 
if (yourAge >= myAge) {
 console.log(`You are ${yourAgeRemaining} years older than me`);
} else {
 console.log(`I am ${myAgeRemaining} years older than you`);}

//question3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4;
let b = 3;

 //i) using if else
if (a > b) {
  console.log(`${a} is greater than ${b}`)
 } else{
  console.log(`${a} is less than ${b}`)};

  //ii) ternary operator.
  a > b 
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

 //question4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript
 numbr = prompt("Enter your number:");
 if (numbr % 2 == 0){
  console.log(`${numbr} is an even number`);
 } else{
  console.log(`${numbr} is an odd number`);
 }

 
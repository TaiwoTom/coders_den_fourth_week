//question1: Write a code which can give grades to students according to theirs
let score = prompt("Enter your score:");
switch (true) {
  case score >= 80 && score <= 100:
    console.log("You have A grade");
    break;
  case score >= 70 && score <= 89:
    console.log("You have B grade");
    break;
  case score >= 60 && score <= 69:
    console.log("You have C grade");
    break;
  case score >= 50 && score <= 59:
    console.log("You have D grade");
    break;
  case score >= 0 && score <= 49:
    console.log("You have F grade");
    break;
  default:
    console.log("The entered value does not qualify into any grade");
}
//question2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let usrSeason = prompt("Enter your present season:");
if (
  usrSeason == "September" ||
  usrSeason == "October" ||
  usrSeason == "November"
) {
  console.log("the season is Autumn");
} else if (
  usrSeason == "December" ||
  usrSeason == "January" ||
  usrSeason == "February"
) {
  console.log("the season is Winter");
} else if (usrSeason == "March" || usrSeason == "April" || usrSeason == "May") {
  console.log("the season is Spring");
} else if (usrSeason == "June" || usrSeason == "July" || usrSeason == "August") {
  console.log("the season is Summer");
} else {
  console.log("there season is no season");
}

//question3: Check if a day is weekend day or a working day. Your script will take day as an input.
let dayInput = prompt("Enter what day is today:");
dayInput == ("friday" ||"saturday" || "sunday")
? console.log(`${dayInput} is a weekend`)
: console.log(`${dayInput} is a workind day`)
  
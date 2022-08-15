//question1: Write a program which tells the number of days in a month.
let mthInput = prompt("Enter a month:");
switch (true) {
  case (mthInput == "april" ||
    mthInput == "june" ||
    mthInput == "september" ||
    mthInput == "november"):
    console.log(`${mthInput} has 30 days`);
    break;
  case (mthInput == "january" ||
    mthInput == "march" ||
    mthInput == "may" ||
    mthInput == "july" ||
    mthInput == "august" ||
    mthInput == "october" || mthInput == "december"):
    console.log(`${mthInput} has 31 days`);
    break;
  case (mthInput == "february"):
    console.log(`${mthInput} has 28 days`);
    break
  default:
   console.log("It is not a valid month");
}


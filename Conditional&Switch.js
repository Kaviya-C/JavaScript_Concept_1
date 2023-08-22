//conditional statement
let num1 = 6;
let num2 = 94;
if (num1 > num2) {
  console.log("Num1 is greater than Num2");
} else {
  console.log("Num1 is lesser than Num2");
}
//-------------------------------------------------------
let number1 = 100;
let number2 = 80;
number3 = 108;
console.log("Given Numbers are: " + number1 + "," + number2 + ", " + number3);
if (number1 > number2 && number1 > number3)
  console.log("Number is greater >> " + number1);
else if (number1 < number2 && number2 > number3)
  console.log("Number is greater >> " + number2);
else console.log("Number is greater >> " + number3);

//----------------------------------------------------
let num = 90;
if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("Odd");
}
//----------------------------------------------------

// ternary operator  ' ?: '
console.log(53 % 2 == 0 ? "Even" : "Odd");

//----------------------------------------------------

//switch statement in js

let day = "holiday";
switch (day) {
  case "monday": {
    console.log("mon>> 4:00AM");
    break;
  }
  case "tuesday": {
    console.log("Tue>> 3:50AM");
    break;
  }
  case "wednesday": {
    console.log("Wed>> 3:45AM");
    break;
  }
  default :
  console.log("Please Enter valid input");
}

//-----------------------------------------------------


console.log("Hello this is kaviya");
/* VARIABLES IN JAVA SCRIPT 
  STORE THE DATA IN SOMEWHERE 
  WE NEED VARIABLES
*/

var  number=2+2;
console.log(number);
/* if i want to store the data of this 10 */

let num=2+2;
console.log(number+9);

let username="Kaviya";
console.log(username+"  declared this as a let type");

/*  we can able to change the value of var and let variable*/

username='Kavii'
console.log(username)

let user="Geetha"
console.log(user)

/* constants in java script  */

let radius=5
let py=3.14
let area

area=py*radius*radius
console.log(area)

/* if we dont want to change some variable by others so make that variable as const in javascript */

const  pi=3.14
//pi=45//TypeError: Assignment to constant variable.
console.log(pi)


// --------------------data types in javascript----------
let data=8
// this 8 has a type as number

let users="Kaviya"
// this users has a type of string


// primitive data types
// number, string, boolean, null, undefined, symbol.
// numbers are numbers its big or small 

let number1=2334566;
console.log(number1*100)

// what is the range of number
// maximum value is 1.79769e+308
// safe integer range --- 9007199254740991
// if this is the range then we no need to face the data inconsistency problem.

// if this value exceed we can use bigint
// if we need float point values then use  as it is 
let numbers=90.90
let names="kavi"
// if we want to identify the type of the value use typeof operator
console.log(typeof numbers)
console.log(typeof names)

/*
 floating point representation 
 base number system
 decimal >> 0-9
 binary >>  0 and 1
 base 8 >>  0-7
*/

let hexavalue=0xff
console.log(hexavalue)
console.log(typeof hexavalue)

let expo=15e3
console.log(expo)

// if we have many zeros mean unable to read out the digits so we can use underscore symbol
let underscore=10_00_000
console.log(underscore)

// we have one more type in js that is infinity
let number2=9/0
console.log(number2)

let number3=-9/0
console.log(number3)

console.log(Number.MAX_VALUE);
// if trying to add any number for above max value then we got infinity
console.log(Number.MAX_VALUE*10);
console.log(Number.MIN_VALUE);

// if we use very lengthy number then may chance to lose the precision eg:
let number4=190290399393900920290292
console.log(number4)

// at the end  u can mention n then we not lose the precision
let number5=1903094343577463672n
console.log(number5)

// if we mention 'n' in the end of the number then this types is bigint
// if we add any normal number to number5 then we got error as cannot convert bigint to other types
//so bigint can be added only another bigint then only it is possible

// console.log(number5+3)
// Cannot mix BigInt and other types, use explicit conversions

console.log(number5+9n);

//------------------------------String in js----------

let userName="Kaviya"
console.log(userName)

let firstname="Kaviya"
let lastname="C"
let merge=firstname+" "+lastname
console.log(merge)

// we can perform some operation in the string
 let userss="kaviya's will done most better than past days"
 console.log(userss)

 let userss1="kaviya will done most \"better than past days\""
 console.log(userss1)

// use \n for next line
// use \t for tab space
// use \v for vertical
// use \b for delete specific character

let nameas="kaviya\n hello"
console.log(nameas)

let tabs="Kavi\tya"
console.log(tabs)

let verticals="Kavi\vya"
console.log(verticals)

let deletion="Kavi\biya"
console.log(deletion)

// boolean either true or false
let bool=5>4
console.log(bool)

// null and undefined
// null mean does not exists
let use=null
console.log(use)
console.log(typeof use)

let uses
console.log(uses)
// no more null and value is there then it is undefined

let numing=34;
console.log(numing/"kavi")//NaN -->> Not a Number
console.log(typeof(numing/"kavi"))//number
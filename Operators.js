//arithmatic operators
// - + * / 
let num1 = 1
let num2 = 4
let result = num1+num2
console.log(result)
let result2 = num1%num2
console.log(result2)

let a=true
let b=true
console.log(a+b)// 2

a+=8;//shorthand operator
console.log(a+b)

// increment operator
a=a++
console.log(a)

console.log("b values: "+b)
b=b--
console.log("b--  >>"+ b)

b=--b
console.log("--b >>"+b)

let res=9*9*9
console.log(res)

let res1=Math.pow(4,3)
console.log(res1)

let res2=5 ** 3// ECMAScript -6
console.log(res2)

// ----------------RELATIONAL OPERATORS---------------

console.log(5 > 6); // false

let bool=4<9;
console.log(bool);

bool= 9<= 9
console.log(bool)

// comparison for strings
let x="BuZZ";
let y="world";
// ascii values a=97 and A=65
let data= x>y;
console.log(Number(x))
console.log(data)

let a1=9
let a2="9"
let ress=a1==a2
console.log(ress);

// i want the type should be same and value should be same
// use === operator
let y1="23";
let y2=23;
console.log(y1 === y2)

let y3=''
let y4=false
console.log(y3 == y4)// empty string treat as false bcoz of coersion
console.log(y3 === y4)


//------------ logical operators -----------------

let a11=9, a12=5, a13=7
console.log(a11>a12 && a12<a13);
console.log(a11>a12 && a12>a13);
console.log(a11>a12 || a12<a13);
console.log(!a11>a12);
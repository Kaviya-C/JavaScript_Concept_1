// type conversion and type coercion
// number-string
let number=12
console.log(number,typeof number)

//----------------EXPLICIT CONVERSION-----------------

// if i want to be in string format
let num=6;
// i want to convert 6 as a string
let numb=String(6)
console.log(numb,typeof numb)

// i want to convert string as a number
let numbers=Number("123")
console.log(numbers,typeof numbers)


let names
console.log(names,typeof names)


// assign data now
names=45
console.log(names,typeof names)

names=names+""
console.log(names,typeof names)
//number and string if we use + operator then coercion coming to picture

// this gives output as 43 number
// bcoz of coercion
names=names-2
console.log(names,typeof names)


//  ! it is operator in boolean
console.log(!true)

// trying to convert null and undefined  and values 0 in boolean we got false


let nu=10+""
console.log(nu,typeof nu)
// use unnary operator to change as number
nu=+nu + 10;
console.log(nu,typeof nu)


let a="234 kaviya"
console.log(a)
console.log(Number(a)) //NaN

// use parseint
//accept as string convert into number
// make sure string starts with number in very first
let conversion="1234 kaviya"
console.log(parseInt(conversion))

let conversion1="Kaviya 787"
console.log(parseInt(conversion1)) //NaN

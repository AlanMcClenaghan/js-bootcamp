// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)


// Challenge - Fahenheit to Celsius converter

let convertFahenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius
}

console.log(convertFahenheitToCelsius(32))
console.log(convertFahenheitToCelsius(68))

let tempOne = convertFahenheitToCelsius(-36)
let tempTwo = convertFahenheitToCelsius(102)
console.log(tempOne)
console.log(tempTwo)
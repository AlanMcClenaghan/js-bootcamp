let name = '  Alan McClenaghan '

// Length property
console.log(name.length)

// Convert to upper case method
console.log(name.toUpperCase())

// Convert to lower case method
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge
// isValidPassword
// Length is more than 8 - and it doesn't contain word 'password'.

let isValidPassword = function (string) {
    if ( string.length < 8 || string.includes('password') ) {
        return "Your password must contain more than 8 letter and should not contain the word 'password'"
    } else {
        return "your password has been accepted."
    }
    // Andrew's method for returning true or false
    // return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))
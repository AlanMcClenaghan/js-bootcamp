// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Deafult arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Challenge - Tip Calculator
let totalBill = function (foodBill, tipPercent = .2) {
    return foodBill + (foodBill * tipPercent)
}

console.log(totalBill(102.5))
console.log(totalBill(145, .1))

let bill = totalBill(1599, .15)
console.log(bill)

// Challenge - Template strings
let tipBillMessage = function (foodBill, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = foodBill * tipPercent
    return `A ${percent}% tip on $${foodBill} would be $${tip}.`
}

let message = tipBillMessage(100, .25)
console.log(message)
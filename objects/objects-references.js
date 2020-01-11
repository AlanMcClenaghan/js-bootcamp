let myAccount = {
    name: 'Alan McClenaghan',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// Challenge

// addIncome
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

// resetAccount
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
    let name = account.name
    let income = account.income
    let expenses = account.expenses
    let total = income - expenses
    return `Account for ${name} has $${total}. $${income} in income. $${expenses} in expenses.`
}

console.log(getAccountSummary(myAccount))

// addIncome
let income = (addIncome(myAccount, 1000))

// addExpense
let phonebill = (addExpense(myAccount, 45))
let rent = (addExpense(myAccount, 450))

// summary
let summary = getAccountSummary(myAccount)
console.log(summary)

// reset account
let reset = resetAccount(myAccount)
console.log(myAccount)

let resetSummary = getAccountSummary(myAccount)
console.log(resetSummary)
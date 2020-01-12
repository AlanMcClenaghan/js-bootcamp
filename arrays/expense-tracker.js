const account = {
    name: 'Alan McClenaghan',
    income: [],
    expenses: [],
    addIncome: function (description, amount) {
        this.income.push({description, amount})
    },
    addExpense: function (description, amount) {
        this.expenses.push({description, amount})
    },
    getIncome: function () {
        let total = 0
        this.income.forEach(function(item) {
            total = total + item.amount
        })
        console.log(`Alan McClenaghan has $${total} in income.`)
    },
    getExpenses: function () {
        let total = 0
        this.expenses.forEach(function(item) {
            total = total + item.amount
        })
        console.log(`Alan McClenaghan has $${total} in expenses.`)
    },
    getAccountSummary: function () {
        let income = 0
        let expenses = 0
        let balance = 0
        this.income.forEach(function(item) {
            income = income + item.amount
        })
        this.expenses.forEach(function(item) {
            expenses = expenses + item.amount
        })
        balance = income - expenses
        console.log(`${this.name} has a balance of $${balance}. $${income} in income. $${expenses} in expenses.`)
    },
}

// addExpense -> description, amount
account.addExpense('Rent', 950)
account.addExpense('coffee', 2)
account.addExpense('Broadband', 45)

// getAccountSummary -> total up all expenses -> Alan McClenaghan has $952 in expenses
account.getExpenses()

// 1. Add income array to account
// 2. addIncome method -> description, amount
// 3. Create getAccountSummary method
    // Alan McClenaghan has a balance of $10. $100 in income. $90 in expenses.
    
account.addIncome('Salary', 2000)
account.getIncome()
account.getAccountSummary()
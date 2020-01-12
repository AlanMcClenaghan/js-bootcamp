// 1. Convert array to array of objects -> text, completed
const todos = [{
    text: "Walk the dog",
    complete: true
}, {
    text: "Wash the dishes",
    complete: false
}, {
    text: "Buy milk",
    complete: true
}, {
    text: "Phone home",
    complete: true
}, {
    text: "Mow the lawn",
    complete: false
}]

// 2. Create function to remove a todo by text value

const deleteTodo = function (todos, todoText) {
     const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
     })
     if (index > -1) {
         todos.splice(index, 1)
     }
}

// deleteTodo(todos, "buy milk")
// deleteTodo(todos, "afskf")

// console.log(todos)

const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return completed = !todo.complete
    })
}

// console.log(getThingsToDo(todos))

const sortToDos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.complete && b.complete) {
            return -1
        } else if (!b.complete && a.complete) {
            return 0
        } else {
            return 1
        }
    })
}

sortToDos(todos)
console.log(todos)

// const sortNotes = function (notes) {
//     notes.sort(function (a, b) {
//         if (a.title.toLowerCase() < b.title.toLowerCase()) {
//             return -1
//         } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
//             return 1
//         } else {
//             return 0
//         }
//     })
// }


// // Create an array with five todos
// const todo = ["Walk the dog", "Wash the dishes", "Buy milk", "Phone home", "Mow the lawn"]

// // You have x todos
// console.log(`You have ${todo.length} todos.`)

// // Print the first and second last items
// console.log(`Todo: ${todo[0]}`)
// console.log(`Todo: ${todo[todo.length - 2]}`)

// // Delete the 3rd item
// console.log(todo.splice(2, 1))
// console.log(todo)

// // Add a new item onto the end
// todo.push("Buy eggs")
// console.log(todo)

// // Remove the first item from the list
// todo.shift()
// console.log(todo)

// // Loop through the list using forEach()
// todo.forEach(function(item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// // For Loop
// for (let i = 0; i < todo.length; i++) {
//     console.log(`${i + 1}. ${todo[i]}`)
// }

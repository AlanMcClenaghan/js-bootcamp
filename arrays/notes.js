const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'eating'))

// const note = findNote(notes, 'some other office modification')
// console.log(note)

sortNotes(notes)
console.log(notes)


// Manipulating Arrays with Methods =================================================================

// const notes = ['Note 1', 'Note 2', 'Note 3']

// // console.log(notes.pop())
// // notes.push('My new note')

// // console.log(notes.shift())
// // notes.unshift('My first note')

// // notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// console.log(notes.length)
// console.log(notes)


// Looping through arrays with forEach() =================================================================

// notes.forEach(function (item, index) {
//     console.log(index, item.body)
//     // console.log(item)
// })

// const names = ['Jim', 'Bob', 'Jill', 'John', 'Amy']

// // indexOf (uses ====) - returns position in an array or -1 if it does not exist in the array ==========================
// const indexOf = names.indexOf('John')
// console.log(indexOf)

// // findIndex - returns position in an object in an array or -1 if it does not exist in the array ============
// const index = notes.findIndex(function (note, index) {
//     console.log(index+1, note.title)
//     return note.title === 'Office modification'
// })
// console.log(index)
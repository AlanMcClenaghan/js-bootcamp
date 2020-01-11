let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge
// Create function - take fahrenheit in - return object with all three

let temperatureConverter = function (fahrenheit) {
    // Calculate celsius from fahrenheit
    //(32°F − 32) × 5/9 = 0°C
    let celsius = (fahrenheit - 32) * 5/9;

    // Calculate kelvin from fahrenheit
    //(32°F − 32) × 5/9 + 273.15 = 273.15K
    let kelvin = (fahrenheit - 32) * 5/9 + 273.15;

    return {
        celsius: `${fahrenheit}° Fahrenheit is ${celsius}° Celsius`,
        kelvin: `${fahrenheit}° Fahrenheit is ${kelvin}° kelvin`
    }
}

console.log(temperatureConverter(32))

let temperature1 = temperatureConverter(32)
let temperature2 = temperatureConverter(0)
let temperature3 = temperatureConverter(100)

console.log(temperature1.celsius)
console.log(temperature1.kelvin)
console.log(temperature2.celsius)
console.log(temperature2.kelvin)
console.log(temperature3.celsius)
console.log(temperature3.kelvin)



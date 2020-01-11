// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (studentScore, totalPossibleScore) {
    const percentage = (studentScore/totalPossibleScore) * 100
    let grade
    
    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `${studentScore}/${totalPossibleScore} -> You got a ${grade} (${percentage}%)!`
}

const gradeAMessage = gradeCalc(90, 100)
console.log(gradeAMessage)

const gradeBMessage = gradeCalc(80, 100)
console.log(gradeBMessage)

const gradeCMessage = gradeCalc(70, 100)
console.log(gradeCMessage)

const gradeDMessage = gradeCalc(60, 100)
console.log(gradeDMessage)

const gradeFMessage = gradeCalc(59, 100)
console.log(gradeFMessage)
function gradingStudents(grades) {
    // Write your code here
    function round5(x)
    {
        return Math.ceil(x/5)*5;
    }

    function calculateGrades(value) {

        if(value < 38) return value;

        let r5value = round5(value);
        if(r5value-value < 3) return r5value;
        else return value;
    }

    return grades.map(calculateGrades);
}

console.log(gradingStudents([84, 29, 57, 73, 67, 38, 33]));
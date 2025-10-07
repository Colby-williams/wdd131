const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {points = 4;}
    else if (grade === "B") {points = 3;}
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
const totalPoints = gpaPoints.reduce((total, item) => total + item);
const gpa = totalPoints / grades.length;
console.log(`GPA is ${gpa}`);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const organisedFruits = fruits.filter(function(fruit) {
    return fruit.length < 6;
});
console.log(organisedFruits);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
console.log('Lucky number index:', luckyIndex);


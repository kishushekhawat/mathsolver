let submitBtn = document.querySelector('#submitBtn');
let getques = document.querySelector('#getques');
let result = document.querySelector('#result');
let input = document.querySelector('#input')
let resultDiv = document.querySelector('#result')
let scoreDiv = document.querySelector('#score')
let attemptDiv = document.querySelector('#ta')
let correctDiv = document.querySelector('#ca')
let wrongDiv = document.querySelector('#wa')



let score = 0;
let attempt = 0;
let correctAns = 0;
let wrongAns = 0;


let operators = ['+', '-', '*'];
let num1;
let num2;
let operation;
let question;



function valuesAasigned() {

    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    operation = operators[Math.floor(Math.random() * 3)]
    question = `${num1} ${operation} ${num2}`;
    resultDiv.innerText = ""
    input.value = ""

}
function initailize() {
    valuesAasigned();
    getques.innerHTML = question
    scoreDiv.innerHTML= score
 attemptDiv.innerHTML= attempt
 correctDiv.innerHTML= correctAns
 wrongDiv.innerHTML= wrongAns



}
initailize();
function calculateQuestion(operator, a, b) {
    if (operator == '+') return a + b;

    if (operator == '-') return a - b;
    if (operator == '*') return a * b;

}

submitBtn.addEventListener('click', () => {
    


    let actualResult = calculateQuestion(operation, num1, num2);
    let userResult = input.value;

    if (actualResult == userResult) {
        resultDiv.innerText = "correct answer"
        correctAns++;
        score = score + 2;
    } else {
        resultDiv.innerText = "wrong answer"
        wrongAns++;
        score = score - 1;
    }
    attempt++;

    setTimeout(() => {
        initailize()
    }, 2000);

})
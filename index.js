const questions = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Multan"],
        answer: "Islamabad"
    },
    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which one is a fruit?",
        options: ["Carrot", "Apple", "Potato", "Onion"],
        answer: "Apple"
    },
    {
        question: "What do we use to write?",
        options: ["Spoon", "Pen", "Fork", "Plate"],
        answer: "Pen"
    },
    {
        question: "Which animal barks?",
        options: ["Cat", "Donkey", "Dog", "Lion"],
        answer: "Dog"
    }
]
const btnSecond = document.getElementById("btn-2");
const mcqQuestion = document.getElementById("question");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

let increamentQuestion = 0;
let score = 0;

function showQuestions() {
    if (increamentQuestion !== 0) {
        let selected = document.querySelector('input[name="option"]:checked');
        if (selected === null || selected.value === '') {
            alert("Please select this option");
            return;
        }

        let checkAnswerQuestion = questions[increamentQuestion - 1];
        if (selected.value === checkAnswerQuestion.answer) {
            score++;
        }
    }


    if (increamentQuestion === questions.length) {
        mcqQuestion.innerHTML = `Your Score: ${score} out of ${questions.length}`;
        btn.style.display = "none";
        btnSecond.style.display = "block";
        input.innerHTML = "";
        return;
    }

    mcqQuestion.innerHTML = questions[increamentQuestion].question;

    if (increamentQuestion === questions.length - 1) {
        btn.innerHTML = "Check Result"
    } else {
        btn.innerHTML = "Next"
    }
    showOption();
    increamentQuestion++

}

function showOption() {
    const input = document.getElementById("input")
    input.innerHTML = ""
    for (var i = 0; i < questions[increamentQuestion].options.length; i++) {
        input.innerHTML += `<input type="radio" name="option" value="${questions[increamentQuestion].options[i]}" id="${i}"> 
        <label for="${i}">${questions[increamentQuestion].options[i]}</label> </br> </br>`
    }
}

function restartQuiz() {
    increamentQuestion = 0;
    score = 0
    btnSecond.style.display = "none";
    btn.style.display = "block";
    btn.innerHTML = "Next";

    mcqQuestion.innerHTML = questions[increamentQuestion].question;

    if (questions[increamentQuestion].options) {
        input.innerHTML = "";
        for (let i = 0; i < questions[increamentQuestion].options.length; i++) {
            input.innerHTML += `
                <input type="radio" name="option" value="${questions[increamentQuestion].options[i]}" id="${i}">
                <label for="${i}">${questions[increamentQuestion].options[i]}</label><br><br>
            `;
        }
    }
    increamentQuestion++;
}















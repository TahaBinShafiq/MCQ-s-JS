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

const mcqQuestion = document.getElementById("question");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

let increamentQuestion = 0;
let score = 0;
let answered = false;


function showQuestions() {

    let selected = document.querySelector('input[name="option"]:checked');
    if (increamentQuestion !== 0) {
        if (selected === null || selected.value === '') {
            alert("Please select this option");
            return;
        }

        const userAnswer = selected.value;
        const correctAnswer = questions[increamentQuestion-1].answer;
        console.log(correctAnswer)
        console.log(userAnswer)

        if (userAnswer === correctAnswer) {
            score++;
        }

    }

    if (increamentQuestion === questions.length) {
        mcqQuestion.innerHTML = `Your Score is: ${score} out of ${questions.length}`;
        input.innerHTML = '';
        btn.innerHTML = "Restart Quiz";
        btn.onclick = restartQuiz;
        return;
    }


    mcqQuestion.innerHTML = questions[increamentQuestion].question;
    btn.innerHTML = "Next"
    input.innerHTML = ""

    btn.style.display = "none";
    questions[increamentQuestion].options.map((element) => {
        input.innerHTML += `<div onclick="stylingAnswer(this)" class="option-div"> <input type="radio"  name="option" value="${element}" id="${element}" onchange="btn.style.display='block'">
        <label for="${element}">${element}</label> </div>`
    })

    increamentQuestion++

    if (questions.length === increamentQuestion) {
        btn.innerHTML = "Check Result"
    }
}


function restartQuiz() {
    score = 0;
    increamentQuestion = 0;
    btn.onclick = showQuestions;
    showQuestions();
}

function stylingAnswer(selectedDiv) {
    var allOptions = document.querySelectorAll(".option-div");

    for (var i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.remove("active");
    }
    selectedDiv.classList.add("active");

    selectedDiv.querySelector("input[type=radio]").checked = true;

    btn.style.display = 'block';
}
















































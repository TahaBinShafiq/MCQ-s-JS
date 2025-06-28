const questions = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Multan"],
        answer: "Islamabad"
    },
    {
        question: "How many days are there in a week?",
        options: [5, 6, 7, 8],
        answer: 7
    },
    {
        question: "Which one is a fruit?",
        options: ["Carrot", "Apple", "Potato", "Onion"],
        answer: "Apples"
    },
    {
        question: "What do we use to write?",
        options: ["Spoon", "Pen", "Fork", "Plate"],
        answer: "Pen"
    },
    {
        question: "Which animal barks?",
        options: ["Cat", "Cow", "Dog", "Lion"],
        answer: "Dog"
    }, {
        question: "Result is Pending"
    }
]
const btnSecond = document.getElementById("btn-2");
const mcqQuestion = document.getElementById("question");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

let increamentQuestion = 0;
function showQuestions() {
    mcqQuestion.innerHTML = questions[increamentQuestion].question;
    if (increamentQuestion === questions.length - 2) {
        btn.innerHTML = "Check Result"
    } else if (increamentQuestion === questions.length - 1) {
        btn.style.display = "none";
        btnSecond.style.display = "block";
        input.innerHTML = "";
        return;
    }
    btn.innerHTML = "Next"
    showOption();
    nextQuestion();

}

function showOption() {
    const input = document.getElementById("input")
    input.innerHTML = ""
    for (var i = 0; i < questions[increamentQuestion].options.length; i++) {
        input.innerHTML += `<input type="radio" name="option" id="${i}"> 
        <label for="${i}">${questions[increamentQuestion].options[i]}</label> </br> </br>`
    }
}


function nextQuestion() {
    increamentQuestion++;
    if (increamentQuestion === questions.length - 1) {
        btn.innerHTML = "Check Result"
    }
}




function restartQuiz() {
    increamentQuestion = 0;
    btnSecond.style.display = "none";
    btn.style.display = "block";
    btn.innerHTML = "Next";
    mcqQuestion.innerHTML = questions[increamentQuestion].question;

    if (questions[increamentQuestion].options) {
        input.innerHTML = "";
        for (let i = 0; i < questions[increamentQuestion].options.length; i++) {
            input.innerHTML += `
                <input type="radio" name="option" id="${i}">
                <label for="${i}">${questions[increamentQuestion].options[i]}</label><br><br>
            `;
        }
    }
    increamentQuestion++;
}












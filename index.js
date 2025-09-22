// Quiz ke saare sawalon ka data array
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
];
// DOM elements ko type safe banana
const mcqQuestion = document.getElementById("question");
const inputContainer = document.getElementById("input");
const nextBtn = document.getElementById("btn");
const startBtn = document.getElementById("start-btn");
const errorMessage = document.getElementById("error-message");
let shuffledQuestions = [];
// State variables
let currentQuestionIndex = 0;
let score = 0;
// Yeh function quiz ko shuru ya restart karta hai
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    nextBtn.textContent = "Next";
    nextBtn.style.display = 'block'; // Next button show karein
    startBtn.style.display = 'none'; // Start button hide karein
    nextBtn.onclick = checkAnswerAndProceed; // Button ka click handler yahan set kiya hai
    renderQuestion();
}
// Yeh function current sawal aur options ko UI par display karta hai
function renderQuestion() {
    if (errorMessage) {
        errorMessage.style.display = 'none'; // Error message hide karein
    }
    if (currentQuestionIndex >= questions.length) {
        // Quiz khatam ho gaya hai, result show karein
        mcqQuestion.innerHTML = `Your Score is: ${score} out of ${questions.length}`;
        inputContainer.innerHTML = '';
        nextBtn.style.display = 'none'; // Next button hide karein
        startBtn.textContent = "Restart Quiz";
        startBtn.style.display = 'block'; // Start button show karein
        startBtn.onclick = startQuiz; // Button ka click handler dobara set kiya hai
        return;
    }
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) { // Naya safety check
        mcqQuestion.textContent = currentQuestion.question;
        inputContainer.innerHTML = "";
        // Options ko dynamically create karna
        currentQuestion.options.sort(() => Math.random() - 0.5);
        currentQuestion.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-div';
            optionDiv.onclick = () => stylingAnswer(optionDiv);
            optionDiv.innerHTML = `
                <input type="radio" name="option" value="${option}" id="${option}">
                <label for="${option}">${option}</label>
            `;
            inputContainer.appendChild(optionDiv);
        });
        nextBtn.style.display = "none";
    }
    else {
        // Agar galti se question undefined ho jaye to yeh message dikhao
        console.error("Error: Could not find question data.");
        mcqQuestion.textContent = "Error loading question data.";
        inputContainer.innerHTML = "";
        nextBtn.style.display = "block";
        nextBtn.textContent = "Restart Quiz";
        nextBtn.onclick = startQuiz;
    }
}
// Har click par jawab check karta hai aur agle sawal par jata hai
function checkAnswerAndProceed() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        if (errorMessage) {
            errorMessage.textContent = "Please select an option!";
            errorMessage.style.display = 'block';
        }
        return;
    }
    if (errorMessage) {
        errorMessage.style.display = 'none'; // Error message hide karein
    }
    // Yeh check lagana zaroori hai
    if (currentQuestionIndex < questions.length) {
        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (userAnswer === correctAnswer) {
            score++;
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = "Check Result";
    }
    renderQuestion();
}
// Radio button select karne par styling aur button visibility control karta hai
function stylingAnswer(selectedDiv) {
    document.querySelectorAll(".option-div").forEach(div => {
        div.classList.remove("active");
    });
    selectedDiv.classList.add("active");
    selectedDiv.querySelector("input[type=radio]").checked = true;
    nextBtn.style.display = 'block';
}
// Start button ke liye initial setup
function initializeQuizApp() {
    mcqQuestion.innerHTML = '<h1>Welcome to the Quiz App!</h1><p>Click the button below to start the quiz.</p>';
    inputContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    startBtn.style.display = 'block';
    startBtn.textContent = 'Start Quiz';
    startBtn.onclick = startQuiz;
}
// App ko shuru karein
initializeQuizApp();
export {};
//# sourceMappingURL=index.js.map
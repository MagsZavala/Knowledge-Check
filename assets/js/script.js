
const quizData = [
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Programming Interaction", "Application Protocol Interface", "Automatic Processing Information"],
        answer: "Application Programming Interface"
    },
    {
        question: "Which of the following is NOT a common format for data exchange in web APIs?",
        options: ["XML", "JSON", "YAML", "HTML"],
        answer: "HTML"
    },
    {
        question: "What is the primary purpose of an API key?",
        options: ["To encrypt data between the client and the server.", "To authenticate and authorize a client accessing the API.", "To compress data for faster transmission.","To translate API requests into different languages."],
        answer: "To authenticate and authorize a client accessing the API."
    },
    {
        question: "What is a RESTful API?",
        options: ["An API that requires REST periods between requests.", "An API that conforms to the constraints of REST architecture.", "An API specifically designed for databases.", "An API that only works with mobile applications."],
        answer: "An API that conforms to the constraints of REST architecture."
    },
    {
        question: "Which HTML attribute is used to define inline styles for an element?",
        options: ["class", "style", "id", "link"],
        answer: "style"
    },
    {
        question: "What is an endpoint in the context of a web API?",
        options: ["The URL to which API requests are sent.", "The database where API data is stored.", "The protocol used for API communication.", "The user interface of the API.],"],
        answer: "The URL to which API requests are sent."
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
        options: ["title", "alt", "src", "href"],
        answer: "alt"
    },
    {
        question: "What does the `fetch` API do?",
        options: ["Allows sending of HTTP requests from a web browser.", "Stores data in the browser's local storage.", "Transforms data into a JSON string.", "Validates forms in a web application."],
        answer: "Allows sending of HTTP requests from a web browser."
    },
    {
        question: "What does the `async` keyword do when used with an API call in JavaScript?",
        options: ["Makes the function return a promise and allows `await` to be used.", "Forces the function to run synchronously.", "Sends multiple requests at the same time.", "Caches the result of the API call."],
        answer: "Makes the function return a promise and allows `await` to be used."
    },
    {
        question: "Which VS Code extension is commonly used for HTML code snippets and auto-completions?",
        options: ["Bracket Pair Colorizer", "Prettier - Code Formatter", "HTML Snippets", "Live Server"],
        answer: "HTML Snippets"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = "";
let timer;
let timeLeft = 60;

function startQuiz() {
    userName = document.getElementById("username").value.trim();
    if (userName === "") {
        alert("Please enter your initials to start the quiz.");
        return;
    }

    document.getElementById("user-info").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("next-button").classList.remove("hidden");
    document.getElementById("timer").classList.remove("hidden");

    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionContainer = document.getElementById("quiz");
    questionContainer.innerHTML = "";

    const questionData = quizData[currentQuestionIndex];
    const questionTitle = document.createElement("h2");
    questionTitle.innerText = questionData.question;
    questionContainer.appendChild(questionTitle);

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option";
        button.onclick = () => checkAnswer(option);
        questionContainer.appendChild(button);
    });

    document.getElementById("result").innerText = "";
}

function checkAnswer(selectedOption) {
    const questionData = quizData[currentQuestionIndex];
    const correctAnswer = questionData.answer;
    const resultContainer = document.getElementById("result");

    // Disable all option buttons and highlight the selected one
    const optionButtons = document.querySelectorAll("#quiz button.option");
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.innerText === selectedOption) {
            button.classList.add("selected");
            if (selectedOption === correctAnswer) {
                resultContainer.innerText = "Correct!";
                score++;
                button.classList.add("correct");
            } else {
                resultContainer.innerText = `Wrong! The correct answer is "${correctAnswer}".`;
                button.classList.add("incorrect");
                // Highlight the correct answer
                optionButtons.forEach(btn => {
                    if (btn.innerText === correctAnswer) {
                        btn.classList.add("correct");
                    }
                });
                // Subtract 5 seconds if the answer is incorrect
                timeLeft = Math.max(0, timeLeft - 5);
            }
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    clearInterval(timer);

    const quizContainer = document.getElementById("quiz");
    quizContainer.classList.add("hidden");

    document.getElementById("next-button").classList.add("hidden");
    document.getElementById("timer").classList.add("hidden");

    const finalScoreContainer = document.getElementById("final-score");
    finalScoreContainer.innerHTML = `<h2>${userName}, your score is: ${score} out of ${quizData.length}</h2>`;
    finalScoreContainer.classList.remove("hidden");

    document.getElementById("controls").classList.remove("hidden");

    saveScore();
    displayHighScores();
}

function saveScore() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ name: userName, score: score });
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const highScoresList = document.getElementById("high-scores-list");
    highScoresList.innerHTML = "";

    highScores.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${index + 1}. ${entry.name} - ${entry.score}`;
        highScoresList.appendChild(listItem);
    });

    document.getElementById("high-scores").classList.remove("hidden");
}

function hideHighScores() {
    document.getElementById("high-scores").classList.add("hidden");
}

function restartQuiz() {
    location.reload();
}

function deleteScore() {
    localStorage.removeItem("highScores");
    alert("All scores deleted successfully!");
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFinalScore();
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedScore = JSON.parse(localStorage.getItem("highScores"));
    if (savedScore) {
        alert(`Previous high score: ${savedScore[0].name} with ${savedScore[0].score} out of ${quizData.length}`);
    }
});

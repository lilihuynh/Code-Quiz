var startEl = document.getElementById("starting");
var startScreenEl = document.getElementById("startScreen");
var timeEl = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var questEl = document.getElementById("quest");
var answerButtonEl = document.getElementById("answerButton");
var scoreEl = document.getElementById("score");
var msgDiv = document.querySelector("#msg");
var userInitialEl = document.querySelector("#userInitial");
var finalScoreEl = document.getElementById("finalScore");
var userSubmitEl = document.getElementById("userSubmit");
var userInputEl = document.getElementById("userInput");
let currentQuestionIndex, shuffedQuestions;
var nextEl = document.getElementById("next");
var userEl = document.getElementById("user");
var highscoreEl = document.getElementById("highscore");

//user click start quiz button
startEl.addEventListener("click", function () {

    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    shuffedQuestions = questionsArray.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    timing();
    setNextQuestion();
});

// set timer
function timing() {

    var timeInterval = setInterval(function () {
        timeEl.textContent = timeLeft + " seconds left";
        timeLeft--;
        if (timeLeft <= -1 || shuffedQuestions.length < currentQuestionIndex + 1) {
            clearInterval(timeInterval);
            userInput();
        }
    }, 1000);

}

//user click next button
nextEl.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

//move to next question after user click nect button
var timeLeft = 30;
var score = 0;

function setNextQuestion() {
    resetanswer();
    showQuestion(shuffedQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    //questions

    questEl.innerText = questionsArray[currentQuestionIndex].question;

    //answer
    questionsArray[currentQuestionIndex].answers.forEach(answer => {
        var buttonEl = document.createElement("button");
        buttonEl.innerText = answer.text;
        buttonEl.classList.add("mybtn");
        buttonEl.addEventListener("click", selectedAnwser);
        buttonEl.setAttribute("data-answer", answer.correct);
        answerButtonEl.appendChild(buttonEl);
    })
}

var questionsArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "a. string", correct: false },
            { text: "b. booleans", correct: false },
            { text: "c. alerts", correct: true },
            { text: "d. numbers", correct: false },
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: [
            { text: "a. quotes", correct: false },
            { text: "b. curly brakets", correct: true },
            { text: "c. parentheses", correct: false },
            { text: "d. squarebrackets", correct: false },
        ]
    },
    {
        question: "A very useful toll used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "a. JavaScript", correct: false },
            { text: "b. for loops ", correct: false },
            { text: "c. console.log", correct: false },
            { text: "d. terminal/bash", correct: true },
        ]
    },

];

//reset state
function resetanswer() {
    nextEl.classList.add("hide");
    while (answerButton.firstChild) {
        answerButtonEl.removeChild
            (answerButtonEl.firstChild)
    }
}

//message pop up when user select answer
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

//when user select answer
function selectedAnwser(event) {


    var element = event.target;
    var userAnnswer = element.getAttribute("data-answer");

    if (userAnnswer === "true") {
        score++;
        scoreEl.innerText = score;
        displayMessage("correct", "Correct!");

    } else {

        displayMessage("wrong", "Wrong!");
        timeLeft -= 5;
    };
    nextEl.classList.remove("hide");
    finalScoreEl.textContent = "Your final score is " + score;

}

//define userInput funtion: after user anser the last question or time is up, move to user initial screen
function userInput() {
    questionsEl.classList.add("hide");
    msgDiv.classList.add("hide");
    userInitialEl.classList.remove("hide");
}
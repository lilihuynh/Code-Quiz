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
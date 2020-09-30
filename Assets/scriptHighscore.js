//retrieve user initial and score from local storage
var initialAndscoreEl = document.getElementById("initialAndscore");
var lastUser = JSON.parse(localStorage.getItem("userScore"));
initialAndscoreEl.textContent = lastUser.userInitial + "-" + lastUser.userhighscore;


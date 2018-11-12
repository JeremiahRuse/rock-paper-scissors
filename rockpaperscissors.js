let options = ["rock", "paper", "scissors"];
let winConditions = ["rockscissors", "scissorspaper", "paperrock"];
let playerScore = 0; 
let computerScore = 0;
const winningScore = 5;

const display = document.querySelector("#display");
const playerScoreDisplayArea = document.querySelector("#playerScore");
const computerScoreDisplayArea = document.querySelector("#computerScore");

let playerScoreToDisplay = document.createElement("h1");
let computerScoreToDisplay = document.createElement("h1");

updateScore(playerScore, playerScoreToDisplay);
updateScore(computerScore, computerScoreToDisplay);

playerScoreDisplayArea.appendChild(playerScoreToDisplay);
computerScoreDisplayArea.appendChild(computerScoreToDisplay);

let feedBackText = document.createElement("p");
display.appendChild(feedBackText);


function updateScore(scoreToUpdate, elementToUpdate) {
    elementToUpdate.textContent = scoreToUpdate;
}

function computerPlay() {
    return options[getRandomInt(0, 3)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(userInput, computerInput = computerPlay()) {
    let userInputLowerCase = userInput.toLowerCase();
    if (userInputLowerCase === computerInput) {
        displayResults('tie');
    }
    else if (checkForMatch(userInputLowerCase + computerInput, winConditions)) {
        playerScore += 1;
        displayResults('win');
        updateScore(playerScore, playerScoreToDisplay);
    }
    else {
        computerScore += 1;
        displayResults('lose');
        updateScore(computerScore, computerScoreToDisplay);
    }

    if (checkForGameOver(winningScore, playerScore)) {
        displayResults('You Win!');
        resetGame();
    }
    if (checkForGameOver(winningScore, computerScore)) {
        displayResults('You Lost!');
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function checkForGameOver(maxScore, scoreToCheck) {
    if (scoreToCheck >= maxScore) {
        return true;
    }
    else {
        return false;
    }
}


function checkForMatch(item, conditions) {
    for (i = 0; i < conditions.length; ++i) {
    if (item === conditions[i]) {
        return true;
    }
    }
}

function displayResults(textToDisplay) {
    feedBackText.textContent = textToDisplay;
}

var buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    playRound(button.textContent);
    });
});

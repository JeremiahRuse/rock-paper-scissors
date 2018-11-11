let options = ["rock", "paper", "scissors"];
let winConditions = ["rockscissors", "scissorspaper", "paperrock"];

function computerPlay() {
    return options[getRandomInt(0, 3)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(userInput, computerInput = computerPlay()) {
    let userInputLowerCase = userInput.toLowerCase();
    if (userInputLowerCase === computerInput) {
    console.log('tie');
    return 0;
    }
    else if (checkForMatch(userInputLowerCase + computerInput, winConditions)) {
    console.log('win');
    return 1;
    }
    else {
    console.log('lose');
    return -1;
    }
}

function checkForMatch(item, conditions) {
    for (i = 0; i < conditions.length; ++i) {
    if (item === conditions[i]) {
        return true;
    }
    }
}

function game() {
    let score = 0;
    for (j = 0; j < 5; ++j) {
    let results = playRound(prompt("Enter 'rock', 'paper' or 'scissors'"));
    score += results;
    if (results === 1) {
        console.log("You win this round! Your score so far is: " + score);
    }
    else if (results === -1) {
        console.log("You lost. Score so far is: " + score);
    }
    else {
        console.log("Tie! Score is still at: " + score);
    }
    }
    console.log("Game over! Final score is: " + score);
}

var buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    playRound(button.textContent);
    });
});
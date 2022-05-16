/*declare variables for DOM elements and possible choices*/

let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreAreaDiv = document.querySelector(".score-area");
const message_p = document.querySelector(".message > p");
const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");
//const choices = ["rock","paper","scissors"];




    
function win() {

}

function lose() {
    
}

function draw() {
    
}

/* The main game function */ 
function playGame(playerChoice) {
    switch (playerChoice) {
        case "Rock":
            displayPlayerRock();
            break;
        case "Paper":
            displayPlayerPaper();
            break;
        case "Scissors":
            displayPlayerScissors();
            break;
        default:
            alert(`Error, please try again.`);
            throw `Error!!`;
    }
    
    
}





function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function checkWinner() {

}





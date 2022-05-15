/*declare constants for DOM elements and possible choices*/
const buttons = getElementsByClassName("btn");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
//const choices = ["rock","paper","scissors"];



// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-type");
            playGame(playerChoice);
        });
    }
});
    

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

function displayPlayerRock() {

    document.getElementById("player-image").src = "assets/images/rock-img.png";
}

function displayPlayerPaper() {

    document.getElementById("player-image").src = "assets/images/paper-img.png";
}

function displayPlayerScissors() {

    document.getElementById("player-image").src = "assets/images/scissors-img.png";
}

function runGame(playerChoice) {
    let choices = ["rock","paper","scissors"];
    let  computerChoice = choices[Math.floor(Math.random() * options.length)];

    if (computerChoice === "Rock" && playerChoice === "Rock") {
        alert(`You Chose: ${playerChoice} \nThe Computer Chose: ${computerChoice}\nIt's A Tie!`);
    }
}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function checkWinner() {

}





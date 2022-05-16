/**
 * Add event listeners to all the buttons
 */
 document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("btn");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            playGame(playerChoice);

            
                playGame(playerChoice);
            ;
        });
    }
});

function Game(playerChoice) {

    switch (playerChoice) {
        case "Rock":
            alert("Rock");
            break;
        case "Paper":
            alert("Paper");
            break;
        case "Scissors":
            alert("Scissors");
            break;
        default:
            alert(`Game error, please try again later.`);
            throw `Game error! Please investigate`;
    }

    
}

function playGame(playerChoice) {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (randomComputerChoice === "Rock" && playerChoice === "Rock") {
        alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nIt"s a draw!`);
            
        } else if (randomComputerChoice === "Rock" && playerChoice === "Paper") {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nYou won!`);
            incrementPlayerScore();
        
        } else if (randomComputerChoice === "Rock" && playerChoice === "Scissors") {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nYou lost!\n`);
            incrementComputerScore();
        
        } else if (randomComputerChoice === "Paper" && playerChoice === "Rock") {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nYou lost!\n`);
            incrementComputerScore();
        
        } else if (randomComputerChoice === "Paper" && playerChoice === "Paper") {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nIt"s a draw!`);
            
        } else if (randomComputerChoice === "Paper" && playerChoice === "Scissors") {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nYou won!`);
            incrementPlayerScore();
        
        } else if (randomComputerChoice === "Scissors" && playerChoice === "Rock") {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nYou won!`);
            incrementPlayerScore();
        
        } else if (randomComputerChoice === "Scissors" && playerChoice === "Paper") {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nYou lost!\n`);
            incrementComputerScore();
        
        } else if (randomComputerChoice === "Scissors" && playerChoice === "Scissors") {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerChoice} \nIt"s a draw!`);
            
        } else {
            alert(`Game error, please try again later.`);
            throw `Game error! Please investigate`;
    }

}

let playerScore = 0;
let computerScore = 0;

function incrementPlayerScore() {
    playerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
}

function incrementComputerScore() {
    computerScore++;
    document.getElementById("computer-score").innerHTML = computerScore;
}

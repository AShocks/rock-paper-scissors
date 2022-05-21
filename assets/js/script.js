/**
 * Add event listeners to all the buttons
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("btn");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            playGame(playerChoice);




        });
    }
});



function playGame(playerChoice) {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (computerChoice === "Rock" && playerChoice === "Rock") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nIt"s a draw!`);

    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nYou won!`);
        incrementPlayerScore();

    } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nComputer won!\n`);
        incrementComputerScore();

    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nComputer won!\n`);
        incrementComputerScore();

    } else if (computerChoice === "Paper" && playerChoice === "Paper") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nIt"s a draw!`);

    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nYou won!`);
        incrementPlayerScore();

    } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nYou won!`);
        incrementPlayerScore();

    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nComputer won!\n`);
        incrementComputerScore();

    } else if (computerChoice === "Scissors" && playerChoice === "Scissors") {
        alert(`You chose: ${playerChoice} \nThe computer chose: ${computerChoice} \nIt"s a draw!`);

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
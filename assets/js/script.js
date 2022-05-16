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


function main() {
    rockButton.addEventListener('click', function() {
        playGame("Rock")
        
    })
    
    paperButton.addEventListener('click', function() {
        playGame("Paper")
        
    })
    
    scissorsButton.addEventListener('click', function() {
        playGame("Scissors")
        
    })
}

main();




    
function win(playerChoice, computerChoice) {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    message_p.innerHTML = `${playerChoice} beats ${computerChoice}. You Win!`;
}

function lose(playerChoice, computerChoice) { 
    computerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    message_p.innerHTML = `${playerChoice} loses to ${computerChoice}. You Lose!`;
    
}

function draw(playerChoice, computerChoice) {
    message_p.innerHTML = `${playerChoice} equals ${computerChoice}. It's a Draw!`;
    
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

/* The main game function */ 
function playGame(playerChoice) {
    const computerChoice = getComputerChoice;
    switch (playerChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(playerChoice, computerChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lose(playerChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(playerChoice, computerChoice);
            break;
            default:
                alert('Error, please try again later');
    }
    
    
}





function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function checkWinner() {

}





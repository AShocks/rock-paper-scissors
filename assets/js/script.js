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
    let computerChoice = Math.floor(Math.random)*3;
    
}

function displayPlayerRock() {

    document.getElementById("user-image").src = "assets/images/rock-img.png";
}

function displayPlayerPaper() {

    document.getElementById("user-image").src = "assets/images/paper-img.png";
}

function displayPlayerScissors() {

    document.getElementById("user-image").src = "assets/images/scissors-img.png";
}




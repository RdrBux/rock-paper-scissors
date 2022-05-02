// Starting scores, they reset at the start of each game
let playerScore = 0;
let compScore = 0;
let compChoice = '';


// Picks random options for the computer
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    compChoice = options[randomIndex];
    return compChoice;
}


// Simulate a round, compare the result and update the scores
function playRound (playerSelection, comp) {
    const player = playerSelection.toLowerCase();

    if (player === comp) {
        return `It's a tie ${player} vs ${comp}.`;
    } else if ( (player === "rock" && comp === "scissors") || (player === "paper" && comp === "rock") || (player === "scissors" && comp === "paper")) {
        playerScore++;
        return `You win! ${player} beats ${comp}.`;
    } else {
        compScore++;
        return `You lose! ${player} loses against ${comp}.`;
    }
    
}


// Show computer choice
const compContainer = document.querySelector('.computer-choice');

// Show scores
const scoresContainer = document.querySelector('.scores');

// Add functionality to buttons
const buttons = document.querySelectorAll('.main button');

buttons.forEach(choice);
const content = document.querySelector('.results');


function choice (button) {
    button.addEventListener('click', function playGame(e) {
    if (playerScore < 5 && compScore < 5) {
    content.textContent = playRound(button.id,computerPlay());
    }
    // Show or refresh the computer choice
    compContainer.textContent = `COMPUTER CHOICE: ${compChoice}`;
    // Show or refresh scores
    scoresContainer.textContent = `Player: ${playerScore}  -  Computer: ${compScore}`;

    if (playerScore >= 5) {
        content.textContent = "Congrats! You won the match.";
        playAgain.style.display = 'flex';   
    }
    if (compScore >= 5) {
        content.textContent = 'You lost the match. Better luck next time';
        playAgain.style.display = 'flex';
    }
    });
};


// Play again button
const playAgain = document.querySelector('#play-again');
playAgain.style.display = 'none';
playAgain.addEventListener('click', function (e) {
    playerScore = 0;
    compScore = 0;
    scoresContainer.textContent = '';
    content.textContent = '';
    compContainer.textContent = '';
    playAgain.style.display = 'none';
})

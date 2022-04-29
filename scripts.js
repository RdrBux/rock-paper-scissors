// Starting scores, they reset at the start of each game
let playerScore = 0;
let compScore = 0;


// Picks random options for the computer
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
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


// Play a game until one of the competitors reaches 5 wins
function game() {
    playerScore = 0;
    compScore = 0;

    while (true) {
        console.log(playRound(prompt(),computerPlay()));
        console.log(`SCORE: Player: ${playerScore} vs Computer: ${compScore}`);
        if (playerScore === 5) {
            console.log("Congrats! You won the match.");
            break;
        }
        if (compScore === 5) {
            console.log("You lost the match. Better luck next time");
            break;
        }
        
    }
}

game();
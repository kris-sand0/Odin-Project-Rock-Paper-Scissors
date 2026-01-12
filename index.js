// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    // As per objective, no invalid input handling required at this stage.
    return choice;
}

// Step 6: Write the logic to play the entire game
function playGame() {
    // Step 4: Declare the players score variables
    let humanScore = 0;
    let computerScore = 0;

    // Step 5: Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        console.log(`Human Chose: ${humanChoice}, Computer Chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`------ Round ${i + 1} ------`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current Scores: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Declare winner
    console.log("------ Game Over ------");
    if (humanScore > computerScore) {
        console.log("You are the grand winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the grand winner!");
    } else {
        console.log("It's a tie game!");
    }
    console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}`);
}

// Start the game
playGame();
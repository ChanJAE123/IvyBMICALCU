function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }
    return "You lose!";
}

function playGame() {
    const playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);
    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
}

playGame();

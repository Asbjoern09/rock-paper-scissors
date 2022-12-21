function getComputerChoice(){
    let computerChoices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3)
    computerChoice = computerChoices[randomNumber];
    console.log(randomNumber)
    return computerChoice;
}

let computerSelection
let playerSelection
let playerScore = 0;
let computerScore = 0;
//result = 0, player wins
//result = 1, computer wins
function playRound(playerSelection, computerSelection){
    console.log("test")
    if(playerSelection === "rock" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "paper"){
        console.log("Player selected " + playerSelection)
        console.log("Computer selected " + computerSelection)
        console.log("You both picked " + computerSelection + ", its a tie!")
    } else if ( playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Player selected " + playerSelection)
        console.log("Computer selected " + computerSelection)
        console.log("Player picked " + playerSelection + " and won")
        playerScore += 1;
    }else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Player selected " + playerSelection)
        console.log("Computer selected " + computerSelection)
        console.log("Computer picked " + computerSelection + " and won")
        computerScore +=1;
    }
    else {
        console.log("Input did not match any expected input")

    }
    document.getElementById('playerScoreHTML').innerHTML = 'Player score = ' + playerScore;
    document.getElementById('computerScoreHTML').innerHTML = 'Computer score = ' + computerScore;

    if(playerScore === 3){
        document.getElementById('rockButton').style.display="none"
        document.getElementById('paperButton').style.display="none"
        document.getElementById('scissorsButton').style.display="none"
        document.getElementById('restartButton').style.display="block"
        document.getElementById('endMessage').innerHTML = 'The game is over, player won. If you wish to play again, press the restart button'
    } else if (computerScore === 3){
        document.getElementById('rockButton').style.display="none"
        document.getElementById('paperButton').style.display="none"
        document.getElementById('scissorsButton').style.display="none"
        document.getElementById('restartButton').style.display="block"
        document.getElementById('endMessage').innerHTML = 'The game is over, computer won. If you wish to play again, press the restart button'
    }}
    function restartGame(){
        document.location.reload();
    }




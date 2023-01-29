function getComputerChoice(){
    let computerChoices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3)
    computerChoice = computerChoices[randomNumber];
    console.log(randomNumber)
    return computerChoice;
}

let computerSelection
let currentPlayer = 1;
let playerSelection
let player1Selection
let player2Selection
let playerScore = 0;
let player2Score = 0;
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
    document.getElementById('computerAndPlayerPicks').innerHTML = 'Player picked ' + playerSelection + " | Computer picked " + computerSelection
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

function getPlayerSelections(playerSelection){
    if(currentPlayer == 1){
    player1Selection = playerSelection;
    document.getElementById('computerAndPlayerPicks').innerHTML = 'Player1 picked ' + player1Selection + " | Player2's turn"
    currentPlayer +=1;
    }else if(currentPlayer == 2){
        player2Selection = playerSelection;
        console.log("player2 picked " + player2Selection)
        playPVPRound();
        currentPlayer= 1;
    }
}
function playPVPRound(){
    if(player1Selection === "rock" && player2Selection === "rock" || player1Selection === "scissors" && player2Selection === "scissors" || player1Selection === "paper" && player2Selection === "paper"){
        console.log("You both picked " + player2Selection + ", its a tie!")
    } else if ( player1Selection === "rock" && player2Selection === "scissors" || player1Selection === "paper" && player2Selection === "rock" || player1Selection === "scissors" && player2Selection === "paper"){
        console.log("Player picked " + player1Selection + " and won")
        playerScore += 1;
    }else if (player1Selection === "rock" && player2Selection === "paper" || player1Selection === "paper" && player2Selection === "scissors" || player1Selection === "scissors" && player2Selection === "rock"){
        console.log("Player2 picked " + player2Selection + " and won")
        player2Score +=1;
    }
    else {
        console.log("Input did not match any expected input")

    }
    document.getElementById('computerAndPlayerPicks').innerHTML = 'Player1 picked ' + player1Selection + " | Player2 picked " + player2Selection
    document.getElementById('playerScoreHTML').innerHTML = 'Player1 score = ' + playerScore;
    document.getElementById('computerScoreHTML').innerHTML = 'Player2 score = ' + player2Score;

    if(playerScore === 3){
        document.getElementById('rockButton').style.display="none"
        document.getElementById('paperButton').style.display="none"
        document.getElementById('scissorsButton').style.display="none"
        document.getElementById('restartButton').style.display="block"
        document.getElementById('endMessage').innerHTML = 'The game is over, player1 won. If you wish to play again, press the restart button'
    } else if (player2Score === 3){
        document.getElementById('rockButton').style.display="none"
        document.getElementById('paperButton').style.display="none"
        document.getElementById('scissorsButton').style.display="none"
        document.getElementById('restartButton').style.display="block"
        document.getElementById('endMessage').innerHTML = 'The game is over, player2 won. If you wish to play again, press the restart button'
    }}
    function restartGame(){
        document.location.reload();
    }




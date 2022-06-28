let playButton = document.querySelector(".play")
let result = document.querySelector(".result")

let playerScore = document.querySelector(".playerScore")
let computerScore = document.querySelector(".computerScore")


let hands = ["rock", "paper", "scissor"]

let tie = "It's a Tie!"

let round = 1;
let playerCount = 0;
let compCount = 0;
let playerWin = "Player Wins Round " 
let compWin = "Computer Wins Round " 

function computerPlay(hands){
    let randomChoice = Math.round(Math.random() * 2) 
    let computerHand = hands[randomChoice]
    return computerHand
}


function playRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection){
            result.textContent = tie
        } 
        else if ((hands.indexOf(playerSelection) - hands.indexOf(computerSelection)) == 1){
            result.textContent = playerWin + round
            playerCount++
            playerScore.textContent = playerCount
            round++
        }
        else if ((hands.indexOf(computerSelection) - hands.indexOf(playerSelection)) == 1){
            result.textContent = compWin + round
            compCount++
            computerScore.textContent = compCount
            round++
        }
        else if ((hands.indexOf(playerSelection) - hands.indexOf(computerSelection)) == 2){
            result.textContent = compWin + round
            compCount++
            computerScore.textContent = compCount
            round++
        }
        else if ((hands.indexOf(computerSelection) - hands.indexOf(playerSelection)) == 2){
            result.textContent = playerWin + round
            playerCount++
            playerScore.textContent = playerCount
            round++
        }
        game()
}


function game(){
if (playerCount === 5){
    result.textContent = "You Win the Game! Player 1 Wins! :)"
    playButton.textContent = "Play Again"
}
else if (compCount === 5){
    result.textContent = "You Lose the Game! Computer Wins! :("
    playButton.textContent = "Play Again"    
}
}


playButton.addEventListener("click", function(){
    let computerSelection = computerPlay(hands)
    let playerChoice = prompt("Please enter rock, paper or scissor: ")
    let playerSelection = playerChoice.toLowerCase()
    playRound(playerSelection, computerSelection)
})

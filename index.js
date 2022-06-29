let playButton = document.querySelector(".play")
let result = document.querySelector(".result")

let playerScore = document.querySelector(".playerScore")
let computerScore = document.querySelector(".computerScore")

let playerSide = document.querySelector(".player")
let compSide = document.querySelector(".computer")


// Rock, Paper, Scissor

let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")


let hands = ["rock", "paper", "scissor"]

let tie = "It's a Tie!"

let count = 0;
let round = 1;
let playerCount = 0;
let compCount = 0;
let playerWin = "Player Wins Round " 
let compWin = "Computer Wins Round " 

let playerSelection = ""

// Random Computer Hand

let computerSelection = function computerPlay(hands){
    let randomChoice = Math.round(Math.random() * 2) 
    let computerHand = hands[randomChoice]
    // createCompHand(computerHand)
    return computerHand
}

// Create Computer and Player Hands Pictures

function createCompHand(computerHand){
    let compHand = document.createElement("img")
    compSide.appendChild(compHand)
    compHand.classList.add("chosen-hand", "compChoice")
    compHand.src = computerHand + ".jpg"
}

function createPlayerHand(){
    let playerHand = document.createElement("img")
    playerSide.appendChild(playerHand)
    playerHand.classList.add("chosen-hand", "compChoice")
    playerHand.src = "rock.jpg"
}

// Update Player and Computer Hands

function changeCompHand(computerHand){
    compHand.src = computerHand + ".jpg"
}

function changePlayerHand(playerHand){
    playerHand.src = "rock.jpg"
}

// Player Hand Choices

function chooseRock(){
    rock.addEventListener("click", function(){
        let compChoice = computerSelection(hands)
        console.log(compChoice)
        playerSelection = "rock"
        if (compChoice === "rock"){
            console.log("tie")
        }
        else if (compChoice === "paper"){
            console.log(compWin + round)
        }
        else if (compChoice === "scissor"){
            console.log(playerWin + round)
        }
    })
}

function choosePaper(){
    paper.addEventListener("click", function(){
        playerSelection = "paper"
    })
}

function chooseScissor(){
    scissor.addEventListener("click", function(){
        playerSelection = "scissor"
    })
}

function activateHands(){
    chooseRock()
    choosePaper()
    chooseScissor()
}


// function playRound(playerSelection, computerSelection){
//         if (playerSelection === computerSelection){
//             result.textContent = tie
//             console.log("tie")
//         } 
//         game()
// }

// Game Finish

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

// Reset Game

function resetGame(){
    round = 1;
    playerCount = 0;
    compCount = 0;
    playButton.textContent = "Play Again"
}

playButton.addEventListener("click", function(){
    result.textContent = "Good Luck! :)"
    resetGame()
})

// First Pick

activateHands()

// function beginGame(hands){
//     activateHands()
//     if (count == 0){
//         if (chooseRock() && computerPlay(hands)){
//             console.log()
//         }
//     }
// }


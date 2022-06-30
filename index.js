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

let handReset = false;
let resetCount = false;
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
    return computerHand
}

// Create Computer and Player Hands Pictures

// function createCompHand(computerHand){
//     if (count === 0){
//     let compHand = document.createElement("img")
//     compSide.appendChild(compHand)
//     compHand.classList.add("chosen-hand", "compChoice", "updateCompHand")
//     compHand.src = computerHand + ".jpg"
//     } else {
        // let updateCompHand = document.querySelector(".chosen-hand")
        // updateCompHand.src = computerHand + ".jpg"
//     }
// }

function createPlayerHand(computerHand){
    if (count === 0){
        let playerHand = document.createElement("img")
        playerSide.appendChild(playerHand)
        playerHand.classList.add("chosen-hand", "compChoice")
        playerHand.src = playerSelection + ".jpg"
        let compHand = document.createElement("img")
        compSide.appendChild(compHand)
        compHand.classList.add("chosen-hand", "compChoice", "updateCompHand")
        compHand.src = computerHand + ".jpg"
    } else{
        let updateHand = document.querySelector(".chosen-hand")
        updateHand.src = playerSelection + ".jpg"
        let updateCompHand = document.querySelector(".updateCompHand")
        updateCompHand.src = computerHand + ".jpg"
    }
    count++
}


// Player Hand Choices

function chooseRock(){
    rock.addEventListener("click", function(){
        resetButton()   
        let compChoice = computerSelection(hands)
        playerSelection = "rock"
        createPlayerHand(compChoice)
        if (compChoice === "rock"){
            result.textContent = tie
        }
        else if (compChoice === "paper"){
            result.textContent = compWin + round
            compCount++
            computerScore.textContent = compCount
            round++
            endGame()
        }
        else if (compChoice === "scissor"){
            result.textContent = playerWin + round
            playerCount++
            playerScore.textContent = playerCount
            round++
            endGame()
        }
    })
}

function choosePaper(){
    paper.addEventListener("click", function(){
        resetButton()
        let compChoice = computerSelection(hands)
        playerSelection = "paper"
        createPlayerHand(compChoice)
        if (compChoice === "rock"){
            result.textContent = playerWin + round
            playerCount++
            playerScore.textContent = playerCount
            round++
            endGame()
        }
        else if (compChoice === "paper"){
            result.textContent = tie
        }
        else if (compChoice === "scissor"){
            result.textContent = compWin + round
            compCount++
            computerScore.textContent = compCount
            round++
            endGame()
        }
    })
}

function chooseScissor(){
    scissor.addEventListener("click", function(){
        resetButton()
        let compChoice = computerSelection(hands)
        playerSelection = "scissor"
        createPlayerHand(compChoice)
        if (compChoice === "rock"){
            result.textContent = compWin + round
            compCount++
            computerScore.textContent = compCount
            round++
            endGame()
        }
        else if (compChoice === "paper"){
            result.textContent = playerWin + round
            playerCount++
            playerScore.textContent = playerCount
            round++
            endGame()
        }
        else if (compChoice === "scissor"){
            result.textContent = tie
        }
    })
}

function activateHands(){
    chooseRock()
    choosePaper()
    chooseScissor()
}

// Game Finish

function endGame(){
if (playerCount === 5){
    result.textContent = "You Win the Game! Player 1 Wins! :)"
    reset()
    count = 1;
}
else if (compCount === 5){
    result.textContent = "You Lose the Game! Computer Wins! :("
    reset()
    count = 1;
}
}

// Reset Game

function reset(){
    if (compCount || playerCount === 5){
    count = 0;
    round = 1;
    playerCount = 0;
    compCount = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;    
    }
}

function resetButton(){
    playButton.disabled = false;
    playButton.textContent = "Play Again"   
}

function resetGame(){
    count = 0;
    round = 1;
    playerCount = 0;
    compCount = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playButton.textContent = "Play Again"
}

playButton.addEventListener("click", function(){
    result.textContent = "Good Luck! :)"
    if(resetCount === false){
        activateHands()
        resetCount = true
        playButton.disabled = true;
    }
    else{
        resetGame()
        count = 1;
    }
})


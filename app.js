let playerScore = 0;                            //Global Variables
let shelBotScore = 0;
let boutStatusMessage1 = "You win! :)";
let boutStatusMessage2 = "You lose. :(";
let boutStatusMessage3 = "You tied. :|";
let gameOver = false;

document.getElementById("rock").onclick = playRock;       //The onclick event attribute works when the user clicks  on the button. When the mouse is clicked on the element then the script runs.
document.getElementById("paper").onclick = playPaper;
document.getElementById("scissors").onclick = playScissors;
document.getElementById("lizard").onclick = playLizard;
document.getElementById("spock").onclick = playSpock;
document.getElementById("reset").onclick = manualScoreReset;

function playRock() {                   //function created for onclick event to select specific player choice
    playGame("rock")                  
}

function playPaper() {
    playGame("paper");
}

function playScissors() {
    playGame("scissors");
}

function playLizard() {
    playGame("lizard");
}

function playSpock() {
    playGame("spock");
}

function manualScoreReset() {                //this function resets both player and shelbot scores to zero and the bout status messages of who played what, winner of round and winner of game.              
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("shelBotScore").innerHTML = 0;
    document.getElementById("boutStatus").innerHTML = "";
    //document.getElementById("results").innerHTML = "";    //is this needed?
    playerScore = 0;
    shelBotScore = 0;
    gameOver = false
}

function boutStatusMessage(number) {        //function used to insert boutstatus message depending on case of win, lose, or tie
     switch (number) {
        case 1:
            document.getElementById("boutStatus").innerHTML += "<p>You win! :)</p>";
                playerScore++
            break
        case 2:
            document.getElementById("boutStatus").innerHTML += "<p>You lose. :(</p>";
                shelBotScore++
            break
        default:
            document.getElementById("boutStatus").innerHTML += "<p>You tied. :|</p>";
            break
     }
}

function playGame(playerMove) {                         //function 
    if(!gameOver){
        let result = play(playerMove)                   //
        boutStatusMessage(result)                       //displays the bout status message of who won the round
        updateScore()                                   //updates the score
        winCheck()                                      //check to see who wins the game
        console.log(playerScore)

        if(playerScore == 10 || shelBotScore == 10) {   // how to stop the game completely at first to ten
            displayGameWinner()
        }
    }
}

// function addToScore(score) {                // is this even needed?
//     if(score < 10) {
//         score++
//     }
//     return
// }

function play(playerMove) {                         //function used for player choice and to determine the bout status message and updateing score depending on shelbots move

    let shelBotMove = getShelBotMove();

    document.getElementById("boutStatus").innerHTML = "<p>You have selected <strong>" + playerMove + "</strong>. Shelbot has selected <strong>" + shelBotMove + "</strong>.</p>"

    if (playerMove == "rock") {
        if (shelBotMove == "rock") {
            return 0 
        }   else if (shelBotMove == "paper") {
            return 2;
        }   else if (shelBotMove == "scissors") {
            return 1
        }   else if (shelBotMove == "lizard") {
            return 1
        }   else if (shelBotMove == "spock") {
            return 2
        }
    }   else if (playerMove == "paper") {
        if (shelBotMove == "rock") {
            return 1;
        }   else if (shelBotMove == "paper") {
            return 0;
        }   else if (shelBotMove == "scissors") {
            return 2;
        }   else if (shelBotMove == "lizard") {
            return 2;
        }   else if (shelBotMove == "spock") {
            return 1;
        }
    }   else if (playerMove == "scissors") {
        if (shelBotMove == "rock") {
            return 2
        }   else if (shelBotMove == "paper") {
            return 1
        }   else if (shelBotMove == "scissors") {
            return 0;
        }   else if (shelBotMove == "lizard") {
            return 1
        }   else if (shelBotMove == "spock") {
            return 2
        }
    }   else if (playerMove == "lizard") {
        if (shelBotMove == "rock") {
            return 2
        }   else if (shelBotMove == "paper") {
            return 1
        }   else if (shelBotMove == "scissors") {
            return 2
        }   else if (shelBotMove == "lizard") {
            return 0;
        }   else if (shelBotMove == "spcok") {
            return 2
        }
    }   else if (playerMove == "spock") {
        if (shelBotMove == "rock") {
            return 1
        }   else if (shelBotMove == "paper") {
            return 2
        }   else if (shelBotMove == "scissors") {
            return 1
        }   else if (shelBotMove == "lizard") {
            return 2
        }   else if (shelBotMove == "spock") {
            return 0;
        }
    }
}

function getShelBotMove() {                                                 //function to randomize shelbots choice
    let moves = ["rock", "paper", "scissors", "lizard", "spock"];
    let move = moves[Math.floor(Math.random() * moves.length)];    // study this
    return move;
}

function updateScore() {                                                    //function to update score in the DOM
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("shelBotScore").innerHTML = shelBotScore;
}

function winCheck() {                                                       //checks to see who won the game based on who reaches the round score of 10 first
    if(playerScore == 10 || shelBotScore == 10) {
        gameOver = true
    }
}

function displayGameWinner() {               //function to display overall game winner and game winning message
    if(playerScore >= shelBotScore) {
        document.getElementById("boutStatus").innerHTML = "<p><strong>You win the game!</strong> Reset the game if you wish to best Shelbot again! :)</p>"
    } else if(shelBotScore >= playerScore) {
        document.getElementById("boutStatus").innerHTML = "<p><strong>Bazinga!!!!!  You have lost the game!</strong> Reset the game if you want to be crushed again!! :(</p>"
    }
}
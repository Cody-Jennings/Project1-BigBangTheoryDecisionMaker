let playerScore = 0;                            //Global Variables
let shelBotScore = 0;
let boutStatusMessage1 = "You win! :)";
let boutStatusMessage2 = "You lose. :(";
let boutStatusMessage3 = "You tied. :|";
let gameOver = false;                           //always going to equal false until game ends

document.getElementById("rock").onclick = playRock;       //The onclick event attribute works when the user clicks on the button. When the mouse is clicked on the element then the script runs.
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

function manualScoreReset() {                //this function resets game as a whole   rename to resetGame              
    document.getElementById("playerScore").innerHTML = 0;    //changes html
    document.getElementById("shelBotScore").innerHTML = 0;
    document.getElementById("boutStatus").innerHTML = "";
    playerScore = 0;        //changes code side
    shelBotScore = 0;
    gameOver = false        //makes round playable again
}

function playGame(playerMove) {                         //function thatmoves game forward 
    if(!gameOver){                                       //checks if game over is false run the code
        let result = play(playerMove)                   //plays round and returns result
        boutStatusMessage(result)                       //displays the bout status message of who won the round
        updateScore()                                   //updates the score
        winCheck()                                      //check to see who wins the round

        if(playerScore == 10 || shelBotScore == 10) {   // this is the games end and displays winner
            displayGameWinner()
        }
    }
}

function play(playerMove) {                         //this function compares the player choice to the computers choice and returns the result

    let shelBotMove = getShelBotMove();             //gets computers choice

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
    let moves = ["rock", "paper", "scissors", "lizard", "spock"];           //5 moves but 0-4 indexes
    let move = moves[Math.floor(Math.random() * moves.length)];    //random gets number 0 inclusive 1 exclusive  math.floor rounds down  so we stay within the correct index length
    return move;
}

function boutStatusMessage(number) {        //function used to insert boutstatus message depending on case of win, lose, or tie
    switch (number) {                       // switch case is basically an if else statement
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

function manualScoreReset() {                //this function resets game as a whole   rename to resetGame              
    document.getElementById("playerScore").innerHTML = 0;    //changes html
    document.getElementById("shelBotScore").innerHTML = 0;
    document.getElementById("boutStatus").innerHTML = "";
    playerScore = 0;        //changes code side
    shelBotScore = 0;
    gameOver = false        //makes round playable again
}

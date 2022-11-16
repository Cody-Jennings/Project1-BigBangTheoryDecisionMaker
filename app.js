let playerScore = 0;
let shelBotScore = 0;
let boutStatusMessage1 = "You win! :)";
let boutStatusMessage2 = "You lose. :(";
let boutStatusMessage3 = "You tied. :|";

document.getElementById("rock").onclick = playRock;       //click event listeners for each player choice button
document.getElementById("paper").onclick = playPaper;
document.getElementById("scissors").onclick = playScissors;
document.getElementById("lizard").onclick = playLizard;
document.getElementById("spock").onclick = playSpock;
document.getElementById("reset").onclick = manualScoreReset;

function playRock() {                   //functions to be called to play each choice
    playGame("rock");
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

function manualScoreReset() {  
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("shelBotScore").innerHTML = 0;
    document.getElementById("boutStatus").innerHTML = "";
}

function boutStatusMessage(number) {
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

function playGame(playerMove) {
    let result = play(playerMove)
    boutStatusMessage(result)
    updateScore()
    console.log(playerScore)

    if(playerScore == 10 || shelBotScore == 10) {
        displayGameWinner()
    }
}

function play(playerMove) {

    let shelBotMove = getShelBotMove();

    document.getElementById("boutStatus").innerHTML = "<p>You have selected <strong>" + playerMove + "</strong>. Shelbot has selected <strong>" + shelBotMove + "</strong>.</p>";

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

function updateScore() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("shelBotScore").innerHTML = shelBotScore;
}

function getShelBotMove() {                                                 //function to randomize shelbots choice
    let moves = ["rock", "paper", "scissors", "lizard", "spock"];
    let move = moves[Math.floor(Math.random() * moves.length)];    // study this
    return move;
}

// function winnerOfGame () {

// }

function displayGameWinner() {               //function display game winner for whoever reaches 10 first// modul?
    if(playerScore > shelBotScore) {
        results.innerHTML += "<p>You win the game! :)</p>"
    } else if(shelBotScore > playerScore) {
        results.innerHTML += "<p>Bazinga!!!!!  You have lost the game! :(</p>"
    }
}


// window.location.reload(false);    //add an event listener onclick  to playagain button    div id play again modal

// function endingGameAtScoreOf10() {

// }

//reset at score of 10

//how to exit game/page upon displaying winner of overall game. give option to play again or exit with a next time message?


// two classes for modal   id and class

// class=


//function that hold score   if score is greater than 10
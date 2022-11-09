let playerScore = 0;
let shelBotScore = 0;

document.getElementById("rock").onclick = playRock;       //click event listeners for each player choice button
document.getElementById("paper").onclick = playPaper;
document.getElementById("scissors").onclick = playScissors;
document.getElementById("lizard").onclick = playLizard;
document.getElementById("spock").onclick = playSpock;

function playRock() {                   //functions to be called to play each choice
    playRock("rock");
}

function playPaper() {
    playRock("paper");
}

function playScissors() {
    playRock("Scissors");
}

function playLizard() {
    playRock("lizard");
}

function playSpock() {
    playRock("spock");
}

shelBotPlay = getShelBotPlay();
function getShelBotPlay() {                                                 //function to randomize shelbots choice
    let plays = ["rock", "paper", "scissors", "lizard", "spock"];
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}
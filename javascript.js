const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const thrown = [rock, paper, scissors];
let win = (rock > scissors, paper > rock, scissors > paper)
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

function getComputerChoice(){
    let randomResult = Math.floor(Math.random() * thrown.length);
    return (thrown[randomResult]);

}

function getHumanChoice(humanResult){
    if (thrown.includes(humanResult)){
    return true;
    } else{
        alert("Not an option");
        return false;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        alert("It's a tie!");
    } else if (
        (humanChoice === rock && computerChoice === scissors) ||
        (humanChoice === scissors && computerChoice === rock) ||
        (humanChoice === paper && computerChoice === rock)

    ){
        humanScore++;
        alert("Victory");
    } else {
        computerScore++
        alert("Loss");
    }

}


function endGame(){
    let finalResult;
    if (humanScore > computerScore){
        finalResult = "You win the game";
    } else if (humanScore < computerScore){
        finalResult = "You lose the game";
    } else {
        finalResult = "It's a tie";
    }
    alert(`Game over!\n\Final scores:\nYour score : ${humanScore}\nComputer score : ${computerScore}\n\n${finalResult}`);

}

function playGame(){
let humanChoice = prompt("Shoot").toLowerCase();
if (!getHumanChoice(humanChoice)){
    return;
}
let computerChoice = getComputerChoice();
let roundResult = playRound(humanChoice, computerChoice);
alert(`You chose : ${humanChoice}\nComputer chose : ${computerChoice}\nYour score : ${humanScore}\nComputer score : ${computerScore}`);
roundNumber++

if (roundNumber > 5){
    endGame();
} else {
    playGame();
}

}
    
playGame();







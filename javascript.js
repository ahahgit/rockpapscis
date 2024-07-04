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

const resultDoc = document.querySelector('#Result');
const roundDoc = document.createElement('div');
roundDoc.classList.add('roundDoc')

function getHumanChoice(humanResult){
    if (thrown.includes(humanResult)){
    return true;
    } else{
        console.log("Not an option");
        roundDoc.textContent = "Not an option";
        resultDoc.appendChild(roundDoc);
        return false;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
        roundDoc.textContent = "It's a tie!"
        resultDoc.appendChild(roundDoc)
    } else if (
        (humanChoice === rock && computerChoice === scissors) ||
        (humanChoice === scissors && computerChoice === rock) ||
        (humanChoice === paper && computerChoice === rock)

    ){
        humanScore++;
        console.log("Victory");
        roundDoc.textContent = "Victory!";
        resultDoc.appendChild(roundDoc)
    } else {
        computerScore++
        console.log("Loss");
        roundDoc.textContent = "Loss!";
        resultDoc.appendChild(roundDoc)
    }

}


function endGame(){
    let finalResult;
    if (humanScore > computerScore){
        finalResult = "You win the game";
    } else if (humanScore < computerScore){
        finalResult = "You lose the game";
    } else{
        finalResult = "It's a tie";
    } 
    console.log(`Game over!\n\Final scores:\nYour score : ${humanScore}\nComputer score : ${computerScore}\n\n${finalResult}`);
    roundDoc.textContent = `Game over!\n\Final scores:\nYour score : ${humanScore}\nComputer score : ${computerScore}\n\n${finalResult}`
    resultDoc.appendChild(roundDoc)

}




function playGame(){
let computerChoice = getComputerChoice();
let roundResult = playRound(humanChoice, computerChoice);
console.log(`You chose : ${humanChoice}\nComputer chose : ${computerChoice}\nYour score : ${humanScore}\nComputer score : ${computerScore}`);
roundNumber++
}

let rockBtn = document.querySelector('#rockButton');

rockBtn.addEventListener('click',() => {
    humanChoice = rock;
    playGame();
    if (roundNumber > 5){
        endGame();
    }

});

let paperBtn = document.querySelector('#paperButton');

paperBtn.addEventListener('click',() => {
    humanChoice = paper;
    playGame();
    if (roundNumber > 5){
        endGame();
    }
});

let scisBtn = document.querySelector('#scisButton');

scisBtn.addEventListener('click',() => {
    humanChoice = scissors;
    playGame();
    if (roundNumber > 5){
        endGame();
    }
    });





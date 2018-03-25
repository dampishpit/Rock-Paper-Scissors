//Function that creates either rock, paper or scissors from a random number between 1& 3.

let computerSelection;
let playerSelection;

function computerPlay (){
  let computerSelection = Math.floor(Math.random() * 3);
  switch (computerSelection){
    case 0:
      return ["rock", 0];
    case 1:
      return ["paper", 1];
    default:
      return ["scissors", 2];
  }
}

//Function that creates a single game of Rock Paper Scissors.



function playRound(playerSelection, computerSelection) {
  let selectedMessage = `You Selected: ${playerSelection[0]} and the computer selected: ${computerSelection[0]}`;
  let winMessage = "You won this round!";
  let loseMessage = "You lose this round, better luck next time!";

  if (playerSelection[1] === 0 && computerSelection[1] === 2){
   return [`${selectedMessage}: ${winMessage}`, 1];
 } else if (playerSelection[1] === 1 && computerSelection[1] === 0) {
   return [`${selectedMessage}: ${winMessage}`, 1];
  } else if (playerSelection[1] === 2 && computerSelection[1] === 1) {
   return [`${selectedMessage}: ${winMessage}`, 1];
  } else if (playerSelection[1] === 0 && computerSelection[1] === 1) {
   return [`${selectedMessage}: ${loseMessage}`, 0];
  } else if (playerSelection[1] === 1 && computerSelection[1] === 2) {
   return [`${selectedMessage}: ${loseMessage}`, 0];
 } else if (playerSelection[1] === 2 && computerSelection[1] === 0) {
   return [`${selectedMessage}: ${loseMessage}`, 0];
  } else {
   return [`${selectedMessage}: This round is a draw!`, 2];
  }

}

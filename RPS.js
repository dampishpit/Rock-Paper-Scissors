//Javascript file for Rock Paper Scissors
function computerPlay (){
  let random = Math.floor(Math.random() * 3);
  if(random === 0){
    return "rock"
  } else if (random === 1){
    return "paper"
  } else {
    return "scissors"
  }
}

let playerSelection;
let computerSelction;

function winner (playerSelection, computerSelection){
  if ('rock', 'paper'){
    return "You lose Paper beats Rock" //This works but not the parts below.
  } if ('paper', 'rock'){
    return "You win! Paper beats Rock"
  } else if ('paper', 'Scissors'){
    return "You lose! Scissors beats paper"
  }

}

winner ('paper', 'scissors');

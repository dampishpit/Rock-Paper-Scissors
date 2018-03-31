//Function that creates either rock, paper or scissors from a random number between 1& 3.

function computerPlay (){
  let computerSelection = Math.floor(Math.random() * 3);
  switch (computerSelection){
    case 0:
      return ["rock"];
    case 1:
      return ["paper"];
    default:
      return ["scissors"];
  }
}

//Function that creates a single game of Rock Paper Scissors and is case insensitive..

function playRound (playerSelection, computerSelection){
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
    return ["You lose! Paper beats rock."];
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
    return ["You win! Paper beats rock."];
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
    return ["You lose! Scissors beats paper"];
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
    return ["You win! Scissors beats paper."];
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
    return ["You lose! Rock beats scissors"];
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
    return ["You win! Rock beats scissors."];
  } else {
    return "It's a draw!"
  }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();

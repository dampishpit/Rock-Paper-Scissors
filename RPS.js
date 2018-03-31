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
    return ["You lose!"];
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
    return ["You win!"];
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
    return ["You lose!"];
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
    return ["You win!"];
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
    return ["You lose!"];
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
    return ["You win!"];
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
    return ["It's a draw"];
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
    return ["It's a draw"];
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
    return ["It's a draw"];
  }
}

//Function that creates a game of 5 rounds and displays the winner at the end.
//The game stops automatically if a player wins 3 rounds.

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 6; i++){
      let playerSelection = prompt ('rock, paper or scissors?');
      let result = playRound (playerSelection, computerPlay ());

      if (result = "You win!"){
        playerScore ++;
      } else if (result = "You lose!"){
        computerScore ++;
      }

      console.log("You: " + playerScore + " " + "Computer: " + computerScore);

      if (playerScore == 3) {
        return "You win the game!";
      } else if (computerScore == 3) {
        return "You lose the game!";
      } else if (playerScore == computerScore) {
        return "Tie game!";
      }
    }
  }

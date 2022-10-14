var computerSelection;
var playerMove;
var playerSelection;
var computerScore =0;
var playerScore= 0;

game();


function computerPlay(min, max) {
  computerSelection = Math.floor(Math.random() * (max - min + 1)) + min;

  switch(computerSelection){
      case 1:
          computerSelection =  "Rock";
          return computerSelection;

          break;
      case 2:
          computerSelection =  "Paper";
          return computerSelection;
          break;
      case 3:
          computerSelection =  "Scissors";
          return computerSelection;
          break;
      default:
        console.log("ERROR 1");
    }

}


function playRound(playerSelection, computerSelection){

    console.log("this is my move: " + playerSelection);
    console.log("this is computer move: " + computerSelection);
    if(playerSelection === "rock" && computerSelection === "Rock"){
        console.log("It's a draw, go again!");

    }
   else if(playerSelection === "paper" && computerSelection === "Paper"){
        console.log("It's a draw, go again!");

    }
    else if(playerSelection === "scissors" && computerSelection === "Scissors"){
        console.log("It's a draw, go again!");

    }
    else if(playerSelection === "rock" && computerSelection ==="Paper"){
        console.log("You lose! Paper beats rock!");

        computerScore = computerScore + 1;
        return computerScore;

        }
    else if(playerSelection === "rock" && computerSelection ==="Scissors"){
        console.log("You win! Rock beats scissors!");
        playerScore = playerScore + 1;
        return playerScore;

        }
    else if(playerSelection === "paper" && computerSelection ==="Rock"){
        console.log("You win! Paper beats rock!");
        playerScore = playerScore + 1;
        return playerScore;

        }
    else if(playerSelection === "paper" && computerSelection ==="Scissors"){
        console.log("You lose! Scissors beats paper!");
         computerScore = computerScore + 1;
        return computerScore;

        }
    else if(playerSelection === "scissors" && computerSelection ==="Paper"){
        console.log("You win! Scissors beats paper!");
        playerScore = playerScore + 1;
        return playerScore;

        }
    else if(playerSelection === "scissors" && computerSelection ==="Rock"){
        console.log("You lose! Rock beats scissors!");
        computerScore = computerScore + 1;
        return computerScore;

        }
    else{
        console.log("ERROR 2");
    }
}

function game(){
    for(let i=0; i<5; i++){
        console.log("Round: " + i);
        computerPlay(1,3);
        playerMove = prompt("What's your move?");
        playerSelection = playerMove.toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log("Your score is " + playerScore + " " +  "Computer score is " + computerScore);
    }
    if(playerScore > computerScore){
        console.log("You win!");
    }
    else if(playerScore < computerScore){
        console.log("You lose!");
    }
    else{
        console.log("It's a draw!");
    }
}

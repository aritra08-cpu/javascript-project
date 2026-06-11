function getComputerChoice()
{
    if(Math.floor(Math.random()*10-1)==0)
    {
        console.log("The computer says scissors");
        return "scissors";
    }
    else if(Math.floor(Math.random()*10-1)%2 == 0)
    {
        console.log("The computer says rock");
        return "rock";
    }
    else if(Math.floor(Math.random()*10-1)%2 != 0)
    {
        console.log("The computer says paper");
        return "paper";
    }
}
let answer;
function getHumanChoice()
{
    answer= prompt("ENTER YOUR CHOICE");
    answer= answer.toLowerCase();
    console.log("You say "+answer);
    return answer;
}
  
   let humanScore=0;
   let computerScore=0;
   function playRound(humanChoice, computerChoice)
   {
       
        if(humanChoice == computerChoice)
       {
            console.log("Its a Tie");
       }
       else if(humanChoice == "rock")
       {
           if(computerChoice == "paper")
           {
                console.log("You lose! Paper beats Rock");
                computerScore++;
           }
           else if(computerChoice == "scissors")
           {
                console.log("You win! Rock beats Scissors");
                humanScore++;
           }
        }
       else if(humanChoice == "paper")
       {
           if(computerChoice == "rock")
           {
               console.log("You win! Paper beats Rock");
               humanScore++;
           }
           else if(computerChoice == "scissors")
           {
               console.log("You lose! Scissors beats Paper");
               computerScore++;
           }
       }
        else if(humanChoice == "scissors")
       {
           if(computerChoice == "paper")
           {
                console.log("You win! Scissors beats Paper");
                humanScore++;
           }
           else if(computerChoice == "rock")
           {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
           }
       } 
   }   

function playGame()
{
    for(let i=1; i<=5; i++)
    {
        const humanSelection= getHumanChoice();
        const computerSelection= getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("YOUR SCORE:"+humanScore+ " COMPUTER SCORE:"+ computerScore);
    if(humanScore == computerScore)
    {
        console.log("THIS GAME IS A TIE");
    }
    else if(humanScore> computerScore)
    {
        console.log("CONGRATULATIONS!! YOU WIN THE GAME");
    }
    else
    {
        console.log("YOU LOSE THIS GAME!!");
    }
}
playGame();

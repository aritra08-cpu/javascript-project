function getComputerChoice()
{
    if(Math.floor(Math.random()*10-1)==0)
    {
        console.log("scissors");
    }
    else if(Math.floor(Math.random()*10-1)%2 == 0)
    {
        console.log("rock");
    }
    else if(Math.floor(Math.random()*10-1)%2 != 0)
    {
        console.log("paper");
    }
}
getComputerChoice();
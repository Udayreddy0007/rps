let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara= document.querySelector("#user-score");
const compScorepara= document.querySelector("#comp-score");

const genCompchoice = () =>
{
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame =() =>
{
    console.log("game is draw");
    msg.innerText ="Game was draw";
     msg.style.backgroundColor =" #081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>
    {
          if(userWin)
          {
            userScore++;
            userScorepara.innerText = userScore;
            msg.innerText =` You win Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor ="green";

          }
          else{
            compScore++;
            compScorepara.innerText = compScore;
            msg.innerText = `You lose ${compChoice} beats Your ${userChoice}`;
             msg.style.backgroundColor ="red";
          }
    }

 const playGame=(userChoice)=>
{
   console.log("user choice is",userChoice);
    //    generate a computer choice
    const compChoice = genCompchoice();
    console.log("computer choice is",compChoice);
    if( userChoice === compChoice)
    {
        drawGame();
    }else{
        userWin = true;
        if(userChoice === "Rock") {
            // paper,scissors cmpts choices
            userWin = compChoice === "Paper" ? false:true;

        }else if(userChoice ==="Paper")
           
            //rock,scissors
        {
            userWin = compChoice === "Scissors" ? false : true;
        }else 
        {
            //rock,paper
           userWin = compChoice === "Rock" ? false : true;

        }
        showWinner(userWin,userChoice,compChoice);

   }
};

choices.forEach((choice) =>
{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})





/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  a=["Rock","Paper","Scissors"]
  b=Math.floor(Math.random()*a.length)
  return a[b]
  
  
}
//console.log(getComputerChoice())


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  

  // All situations where human draws, set `score` to 0
  let score
  if(playerChoice==computerChoice){
    score=0
    
  }
  else if(playerChoice=="Rock"&& computerChoice=="Scissors"){
    score=1
  }
  else if(playerChoice=="Scissors"&& computerChoice=="Paper"){
    score=1
  }
  else{
    score=-1
  }
  return score
  
  
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}
//console.log(getResult("Paper","Scissors"))


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const result=document.getElementById("result")
  const playerSr=document.getElementById("player-score")
  playerSr.innerText=getResult(playerChoice,computerChoice)
  let hands=document.getElementById("hands")
  hands.innerText=`${playerChoice} vs ${computerChoice}`
  comp=document.getElementById("compchoice")
  play=document.getElementById("playchoice")
  comp.innerText=`Computer Choice:${computerChoice}`
  play.innerText=`Player Choice:${playerChoice}`
  
  
  
  if(score==-1){
   return result.innerText="You Lose!!"
  }
  else if(score==0){
    return result.innerText="Its a Draw!!"
  }
  else{
    return result.innerText="You Win!!"
  }



  
  
  

  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
} 







// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  ch=getComputerChoice()
  re=getResult(playerChoice.value,ch)
  showResult(re,playerChoice.value,ch)
  
}


   




// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  choices=document.querySelectorAll(".rpsButton")
  choices.forEach(choice=>{
    choice.onclick=()=>{
      onClickRPS(choice)
    }

  })

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  end=document.getElementById("endGameButton")
  end.onclick=()=>endGame()
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  result=document.getElementById("result")
  score=document.getElementById("player-score")
  comp=document.getElementById("compchoice")
  play=document.getElementById("playchoice")
  let hands=document.getElementById("hands")
  


  result.innerText=" "
  score.innerText=" "
  comp.innerText=" "
  play.innerText=" "
  hands.innerText=" "
}

playGame()
let timer = 60;
let score = 0;
let newhit = 0

function GetNewScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score
}
function GetNewHit() {
     newhit = Math.floor(Math.random()*10)
    document.querySelector(".hitval").textContent = newhit
}

function bubbleMaker() {
    let cluter = "";
for (let i = 1; i <= 133; i++) {
    let push = Math.floor(Math.random()*10)
    cluter += `<div class="bubble">${push}</div>`
    
}
document.querySelector("#pbtm").innerHTML = cluter


}

function runTimer() {
  let timeint = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector(".time").textContent = timer
        }
        else{
            clearInterval(timeint)
            document.querySelector("#pbtm").innerHTML = `<h1>☠️Game over My friend☠️</h1>`
            push.to("#pbtm",{
                y:-40,
                duration:.3,
                repeat:-1,
                yoyo:true
            })
        }
    }, 1000);

}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
  let clickNum = Number(dets.target.textContent)
  if(clickNum === newhit){
    GetNewScore()
    bubbleMaker()
   GetNewHit()
  }
})

runTimer()
bubbleMaker()
GetNewHit()

let push = gsap.timeline();


push.from("#elem",{
    opacity:0,
    dealy:0.4
})
push.from("#elem h2,#box",{
    y:-90,
    opacity:0,
    duration:0.5,
    dealy:0.2,
    ease:Expo.easeInOut,
})
push.from(".bubble",{
    opacity:0,
    duration:0.4,
    ease: Expo.easeInOut
})


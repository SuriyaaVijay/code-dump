const quizdata=[
    {
        question:"What does HTML stands for?",
        options:["Hyper Text Markup Language","Higher Technology Management Language", "High Tech Managment Langauge","Hypetext Makeup Language"],
        correct:0
    },
    {
        question:"Which css property is used to control spacing between elements?",
        options:["Margin","Padding","Spacing","Border-spacing"],
        correct:1,

    },
    {
        question:"In React.js which hook is used to perform side effects in a function component?",
        options:["use effect","use state","use content","use reducer"],
        correct:0,
    },
    {
        question:"Which HTML tag is used to create an ordered list?",
        options:["<ul>","<li>","<ol>","<dl>"],
        correct:2,
    },
];
const quiz=document.querySelector("#quiz");
 const answelem=document.querySelectorAll(".answer");
 const[questionelm,option1,option2,option3,option4]=document.querySelectorAll(".question",".option1",".option2",".option3",".option4");
 const submitbtn = document.querySelector("#submit");



 let  currentquiz=0;
  let  score=0;
    //let curoption=0;


  const loadquiz=() =>{
    const{question,options}=quizdata[currentquiz];
 //  console.log(options);
  //  questionelm.innerText=question;
  questionelm.innerText=`${currentquiz+1}:${question}`;
  score.innerText=`score:${score}/${quizdata.length}`;
      options.forEach(
        (curoption,index) => (window[`option${index+1}`].innerText=curoption)
 );
  };
  loadquiz();
     
  const getselected = ()=>{
    let ansindex;
    answelem.forEach((curoption,index)=>{
       if(curoption.checked){
        ansindex=index;
       }
    });
    return ansindex;  
        
  };
  const deselectedans = () =>{
       return answelem.forEach((curelm)=>curelm.checked=false);
  };

  submitbtn.addEventListener("click", () => {
       const selectedindex= getselected();
       console.log(selectedindex);

       if (selectedindex==quizdata[currentquiz].correct){
        score=score+1;
       }
       console.log(score);
       currentquiz++;
       if(currentquiz<quizdata.length){
        deselectedans();
        loadquiz();
              
       }
       else{
        quiz.innerHTML=`
        <div class="result">
        <h2>Your Score: ${score}/${quizdata.length} Correct Answers </h2>
        <p>Congratulations on completing the quiz! </p>
        <button clas="reload-button" onclick="location.reload()">Play Again </button>
        </div>`;
       }
  });




                   

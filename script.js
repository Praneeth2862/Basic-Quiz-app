const questions=[
{
    question:"Who is the current Prime minister of India?",
    options:[
        "Narendra Modi",
        "Rahul Gandhi",
        "Indira Gandhi",
        "Manmohan Singh"
    ],
    answer:"Narendra Modi"
},
{
    question:"Who is the current cricket captian of India?",
    options:[
        "Virat Kohli",
        "Rohit Sharma",
        "MS Dhoni",
        "Sachin Tendulkar"
    ],
    answer:"Rohit Sharma"
},
{
    question:"Who is the current Chess Grand Master of India?",
    options:[
        "Praggnanandha",
        "Vishwanadhan anand",
        "Gukesh",
        "vinith"
    ],
    answer:"Gukesh"
},
{
    question:"Which is Not Programming Language?",
    options:[
       "HTML",
        "Python",
        "Java",
        "C++"
    ],
    answer:"HTML"
},
{
    question:"Which language doesnot Support OOP?",
    options:[
        "Python",
        "Java",
        "C++",
        "C"
    ],
    answer:"C"
    
}
]
function startQuiz(){
    let current_question=0;
    let totalQuestions=questions.length;
    let optionClicked='';
    let correctAnswer='';
    let optionClickedID='';
    let current_score=0;
    let wrongAnswerd=0;
    let unAnswered=0;
    let correctAnswered=0;
    let startBox=document.querySelector("#start-page");
    let questionHeading=document.querySelector("#qid");
    let quizBox=document.querySelector("#quiz-page");
    let submitButton=document.querySelector("#submit-quiz");
    let skipButton=document.querySelector("#nav-next");
    let question_box=document.querySelector("#question-box");
    let options_box=document.querySelector("#options-box");
    let confirmButton=document.querySelector("#confirm-btn");
    let totalScore=document.querySelector("#score");
    let correctScore=document.querySelector("#correct");
    let wrongScore=document.querySelector("#wrong");
    let unAnsweredScore=document.querySelector("#unanswered");
    let buttonSet=options_box.children;
    confirmButton.addEventListener("click",checkAnswer);
    startBox.style.display="none";
    quizBox.style.display="block";
    document.querySelector(".result-box").style.display="none";
    showQuestion(current_question);
    function navVisibility(){
        skipButton.style.display=current_question === totalQuestions-1 ? "none" : "block";
        submitButton.style.display=current_question === totalQuestions-1 ? "block" : "none";
    }
    function checkAnswer(){
        if(optionClicked==='') return;
        if(optionClicked==correctAnswer){
            document.getElementById(optionClickedID).classList.add("correct");
            current_score++;
            correctAnswered++;
        }
        else{
            document.getElementById(optionClickedID).classList.add("wrong");
            wrongAnswerd++;
        }
        for (let i = 0; i < 4; i++) {
            if(buttonSet[i].id!=optionClickedID)
                buttonSet[i].disabled = true;
            }
        setTimeout(()=>{
            current_question++;
            showQuestion(current_question);
        },1500);
        
    }
    function showQuestion(qid){
        if(qid<totalQuestions){
            questionHeading.innerHTML=qid+" of "+totalQuestions;
            question_box.innerHTML=questions[qid].question;
            correctAnswer=questions[qid].answer;
            confirmButton.style.display="none";
            for(let i=0;i<4;i++){
                buttonSet[i].classList.remove("correct","wrong");
                buttonSet[i].disabled=false;
                buttonSet[i].textContent=questions[qid].options[i];
                buttonSet[i].addEventListener("click",()=>{
                    optionClicked=buttonSet[i].textContent;
                    optionClickedID=buttonSet[i].id;
                    if(current_question<totalQuestions-1)
                        confirmButton.style.display="block";
                    else submitButton.innerHTML="Confirm&Submit"
                    skipButton.style.display="none";
                });
            }
            navVisibility();
    }
    }
    skipButton.addEventListener("click",()=>{
        unAnswered+=1;
        current_question+=1;
        showQuestion(current_question);
        
    })
    submitButton.addEventListener("click",()=>{
        checkAnswer();
        totalScore.innerHTML=current_score;
        correctScore.innerHTML=correctAnswered;
        wrongScore.innerHTML=wrongAnswerd;
        unAnsweredScore.innerHTML=unAnswered;
        setTimeout(()=>{
            quizBox.style.display="none";
        document.querySelector(".result-box").style.display="flex";
        },1000);
    })
}

//Set the body to a variable
var body = document.body;

//Set the main container to a variable
var mainEl = document.querySelector(".card-body");
var question = document.querySelector(".question");
var answerEl = document.querySelector(".list-group list-group-flush");
var result = document.getElementById("result");
var answer = document.querySelector(".answer");
var choiceA = document.getElementById("button-A");
var choiceB = document.getElementById("button-B");
var choiceC = document.getElementById("button-C");
var choiceD = document.getElementById("button-D");
var correctAnswer = document.querySelector(".list-group list-group-flush");

//All the elements//
var time = document.querySelector(".time");
var seconds = document.getElementById("seconds");

var timeLeft = 30;

function setTime() {
    var timerRun = setInterval(function() {
        timeLeft--;
        seconds.textContent = timeLeft + " seconds!";
        
        if(timeLeft === 0) {
            clearInterval(timerRun);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    time.textContent = "GAME OVER";
}

setTime();


//Set all my questions as objets inside and array

var allQuestions = [
    {
        question: "1.How many species of sharks exist?",
        choiceA: "a.465",
        choiceB: "b.360",
        choiceC: "c.530",
        choiceD: "d.250",
        answer: "a"
    },
   
    {
       question: "2.For how long have sharks existed on earth?",
       choiceA: "a.200 thousands of years",
       choiceB: "b.50 millions of years",
       choiceC: "c.450 millions of years",
       choiceD: "d.5 millions of years",
       answer: "c"
   },
   
   {
       question: "3. Which is the biggest shark specie?",
       choiceA: "a.Lemon Shark",
       choiceB: "b.Whale Shark",
       choiceC: "c.Great White Shark",
       choiceD: "d.Tigger Shark",
       answer: "b"
   },
   
   {
       question: "4. Which shark specie is able to swim in fresh water?",
       choiceA: "a. Hammerhead Shark",
       choiceB: "b. Bull Shark",
       choiceC: "c. Mako Shark",
       choiceD: "d. Angel Shark",
       answer: "b"
   },
   
   {
       question: "5. Carcharodon Carcharias is the scientific name for:",
       choiceA: "a. Blacktip Rees Shark",
       choiceB: "b. Basking Shark",
       choiceC: "c. Blue Shark",
       choiceD: "d. Great White Shark",
       answer: "d"
   },
       
   {
       question: "6. The Carcharodon Megalodon, is an extinct specie. It was the prehistoric sibiling to the Great White Shark. ¿Which do you thing was its length?",
       choiceA: "a. 3-5 mts.",
       choiceB: "b. 6-10 mts.",
       choiceC: "c. 12-15 mts.",
       choiceD: "d. 15-18 mts.",
       answer: "d"
   },
   
   {
       question: "7. The Spiny dogfish is the longest-living shark specie. How many years do you think it lives?",
       choiceA: "a. 100-150 years",
       choiceB: "b. 20-40 years",
       choiceC: "c. 70-100 years",
       choiceD: "d. 10-20 years",
       answer: "c"
   },
   
   {
       question: "8. What is the Ampullae of Lorenzini?",
       choiceA: "a. Ampullae... WHAT?",
       choiceB: "b. What give sharks the super power of smelling blood kms away",
       choiceC: "c. Special sensing organs that help sharks and other species to sense electric fields in the water.",
       choiceD: "d. An alternative name to sharks dorsal fin ",
       answer: "c"
       
   },
   
   {
       question: "9. How many teeth a shark looses in a year?",
       choiceA: "a. 1000",
       choiceB: "b. 250",
       choiceC: "c. 500",
       choiceD: "d. 100",
       answer: "a"
   },
   
   {
       question: "10. Are sharks dangerous to humans?",
       choiceA: "a. Sure. They eat humans.",
       choiceB: "b. Not at all. Humans are such much more dangerous for sharks",
       choiceC: "As dangerous as Coronavirus ",
       choiceD: "Sure, they are as scarier as my ex",
       answer: "b"
   }, 
   ]

   console.log(allQuestions);


//questions variables//

var lastQuestion = allQuestions.length -1;
console.log(lastQuestion);
var runningIndexQ = 0;

//function to run the question

function renderQuestion(){
    var q = allQuestions[runningIndexQ];
    question.innerHTML = "<p>"+ q.question + "</p>";
    choiceA.innerHTML = q.choiceA; 
    choiceB.innerHTML = q.choiceB; 
    choiceC.innerHTML = q.choiceC; 
    choiceD.innerHTML = q.choiceD;
    answer.innerHTML = q.answer; 

} 
renderQuestion();
mainEl.style.display = "block";

//function to run questions//

function userAnswer (answer) {
    if(runningIndexQ < lastQuestion){
        runningIndexQ++;
        renderQuestion()
    }
}

//correct answer function
function correctAnswer () {
    document.querySelector(answer).innerHTML = "CORRECT!";
}

//wrong answer function
function wrongAnswer () {
    document.querySelector(answer).innerHTML = "WRONG!";
}

//Set a variable for user's answer

choiceA.addEventListener("click", function(event){
    console.log(runningIndexQ);
    dataIndex = choiceA.getAttribute("data-index", allQuestions[runningIndexQ]);
    userAnswer(dataIndex);
});

choiceB.addEventListener("click", function(event){
    console.log(runningIndexQ);
    dataIndex = choiceB.getAttribute("data-index", allQuestions[runningIndexQ]);
    userAnswer(dataIndex);

})
choiceC.addEventListener("click", function(event){
    console.log(runningIndexQ);
    dataIndex = choiceC.getAttribute("data-index", allQuestions[runningIndexQ]);
    userAnswer(dataIndex);

})
choiceD.addEventListener("click", function(event){
    console.log(runningIndexQ);
    dataIndex = choiceD.getAttribute("data-index", allQuestions[runningIndexQ]);
    userAnswer(dataIndex);

})




//Answers//



   
//Answers Text Content//













   
   
   










































//Set the body to a variable
var body = document.body;

//Set the main container to a variable
var mainEl = document.querySelector(".card-body");
var ques = document.querySelector(".question");
var answerEl = document.querySelector(".list-group list-group-flush");
var choiceA = document.getElementById("button-A");
var choiceB = document.getElementById("button-B");
var choiceC = document.getElementById("button-C");
var choiceD = document.getElementById("button-D");
var answer = document.getElementById("answer");

//All the elements//
var time = document.querySelector(".time");
var seconds = document.getElementById("seconds");

var timeLeft = 100;

function setTime() {
    var timerRun = setInterval(function() {
        timeLeft--;
        seconds.textContent = timeLeft + " seconds!";
        
        if(timeLeft === 0) {
            clearInterval(timerRun);
            sendMessage();
        }
    }, 1000);
    console.log(setTime);
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
        correct: choiceA,
    },
   
    {
       question: "2.For how long have sharks existed on earth?",
       choiceA: "a.200 thousands of years",
       choiceB: "b.50 millions of years",
       choiceC: "c.450 millions of years",
       choiceD: "d.5 millions of years",
       correct: choiceC,
   },
   
   {
       question: "3. Which is the biggest shark specie?",
       choiceA: "a.Lemon Shark",
       choiceB: "b.Whale Shark",
       choiceC: "c.Great White Shark",
       choiceD: "d.Tigger Shark",
       correct: choiceB,
   },
   
   {
       question: "4. Which shark specie is able to swim in fresh water?",
       choiceA: "a. Hammerhead Shark",
       choiceB: "b. Bull Shark",
       choiceC: "c. Mako Shark",
       choiceD: "d. Angel Shark",
       correct: choiceB,
   },
   
   {
       question: "5. Carcharodon Carcharias is the scientific name for:",
       choiceA: "a. Blacktip Rees Shark",
       choiceB: "b. Basking Shark",
       choiceC: "c. Blue Shark",
       choiceD: "d. Great White Shark",
       correct: choiceD,
   },
       
   {
       question: "6. The Carcharodon Megalodon, is an extinct specie. It was the prehistoric sibiling to the Great White Shark. ¿Which do you thing was its length?",
       choiceA: "a. 3-5 mts.",
       choiceB: "b. 6-10 mts.",
       choiceC: "c. 12-15 mts.",
       choiceD: "d. 15-18 mts.",
       correct: choiceD,
   },
   
   {
       question: "7. The Spiny dogfish is the longest-living shark specie. How many years do you think it lives?",
       choiceA: "a. 100-150 years",
       choiceB: "b. 20-40 years",
       choiceC: "c. 70-100 years",
       coiceD: "d. 10-20 years",
       correct: choiceC,
   },
   
   {
       question: "8. What is the Ampullae of Lorenzini?",
       choiceA: "a. Ampullae... WHAT?",
       choiceB: "b. What give sharks the super power of smelling blood kms away",
       choiceC: "c. Special sensing organs that help sharks and other species to sense electric fields in the water.",
       choiceD: "d. An alternative name to sharks dorsal fin ",
       correct: choiceC,
       
   },
   
   {
       question: "9. How many teeth a shark looses in a year?",
       choiceA: "a. 1000",
       choiceB: "b. 250",
       choiceC: "c. 500",
       choiceD: "d. 100",
       correct: choiceA,
   },
   
   {
       question: "10. Are sharks dangerous to humans?",
       choiceA: "a. Sure. They eat humans.",
       choiceB: "b. Not at all. Humans are such much more dangerous for sharks",
       choiceC: "As dangerous as Coronavirus ",
       choiceD: "Sure, they are as scarier as my ex",
       correct: choiceB,
   }, 
   ]


//Set text content 

ques.textContent = allQuestions[i].question;
choiceA.textContent = allQuestions[i].choiceA;
choiceB.textContent = allQuestions[i].choiceB;
choiceC.textContent = allQuestions[i].choiceC;
choiceD.textContent = allQuestions[i].choiceD;
answer.textContent = allQuestions[i].correct;

//Apend elements//

mainEl.appendChild(ques);
mainEl.appendChild(answerEl);

//questions loop //

for ( var i=0; i < allQuestions.length; i++){
    var response = addEventListener("click", function(){
        
    })
}
   
//Answers Text Content//

correct.textContent = "You are awesome";
incorrect.textContent = "Nice try :)";











   
   
   










































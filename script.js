//All the elements//
var time = document.querySelector(".time");
var seconds = document.getElementById("seconds");
var question = document.getElementById("question"); 
var choiceA = document.getElementById("button-A");
var choiceB = document.getElementById("button-B");
var choiceC = document.getElementById("button-C");
var choiceD = document.getElementById("button-D");

//question buttons in a variable//

var answerOptions = document.getElementsByTagName("question");

//Here are the timer functions//
var timeLeft = 10;

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

//Questions Arrays//

var questions = [
 {
     question: "1. How many species of sharks exist?",
     choiceA: "a.465",
     choiceB: "b.360",
     choiceC: "c.530",
     coiceD: "d.250",
     correct: "A"
 },

 {
    question: "2.For how long have sharks existed on earth?",
    choiceA: "a.200 thousands of years",
    choiceB: "b.50 millions of years",
    choiceC: "c.450 millions of years.",
    coiceD: "d.5 millions of years.",
    correct: "C"
},

{
    question: "3. Which is the biggest shark specie?",
    choiceA: "a.Lemon Shark",
    choiceB: "b.Whale Shark",
    choiceC: "c.Great White Shark",
    coiceD: "d.Tigger Shark",
    correct: "B"
},

{
    question: "4. Which shark specie is able to swim in fresh water?",
    choiceA: "a. Hammerhead Shark",
    choiceB: "b. Bull Shark",
    choiceC: "c. Mako Shark",
    coiceD: "d. Angel Shark",
    correct: "A"
},

{
    question: "5. Carcharodon Carcharias is the scientific name for:",
    choiceA: "a. Great White Shark",
    choiceB: "b. Basking Shark",
    choiceC: "c. Blue Shark",
    coiceD: "d. Blacktip Rees Shark",
    correct: "A"
},
    
{
    question: "6. The Carcharodon Megalodon, is an extinct specie. It was the prehistoric sibiling to the Great White Shark. ¿Which do you thing was its length?",
    choiceA: "a. 3-5 mts.",
    choiceB: "b. 6-10 mts.",
    choiceC: "c. 12-15 mts.",
    coiceD: "d. 15-18 mts.",
    correct: "A"
},

{
    question: "7. The Spiny dogfish is the longest-living shark specie. How many years do you think it lives?",
    choiceA: "a. 100-150 years.",
    choiceB: "b. 20-40 years.",
    choiceC: "c. 10-20 years.",
    coiceD: "d. 70-100 years.",
    correct: "A"
},

{
    question: "8. What is the Ampullae of Lorenzini?",
    choiceA: "a. Special sensing organs that help sharks and other species to sense electric fields in the water.",
    choiceB: "b. What give sharks the super power of smelling blood kms away",
    choiceC: "c. Ampullae... WHAT?",
    coiceD: "d. An alternative name to sharks dorsal fin ",
    correct: "A"
},

{
    question: "9. How many teeth a shark looses in a year?",
    choiceA: "a. 100",
    choiceB: "b. 250",
    choiceC: "c. 500",
    coiceD: "d. 1000",
    correct: "A"
},

{
    question: "10. Are sharks dangerous to humans?",
    choiceA: "a. Sure. They eat humans.",
    choiceB: "b. Not at all. Humans are such much more dangerous for sharks",
    choiceC: "As dangerous as Coronavirus ",
    coiceD: "Sure, they are as scarier as my ex",
    correct: "A"
},
    
]







































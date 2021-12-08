var questions =[
    {
    question:"What does HTML stand for?",
    selection: ["HyperText Markup Language","HyperText Maintanance Language","HyperText Markup Lingo","Hydrodynamic Thermal Micro Link"],
    answer: "HyperText Markup Language",
    },
    {
    question:"What does CSS often involve?",
    selection: ["Databases","Functionality","Backend Servers","Aesthetics"],
    answer: "Aesthetics",
    },
    {
    question:"Who invented HTML?",
    selection: ["Tim Berners-Lee","Mark Zuckerberg","Tim Cook","George Washington"],
    answer: "Tim Berners-Lee",
    },
    {
    question:"When was javascript created?",
    selection: ["1995","1996","1678","2001"],
    answer: "1995",
    },
    {
        question:"What does &lt;p&gt; refer to?",
        selection: ["Paragraph","Section","Link","Portal"],
        answer: "Paragraph",
    },
]
const ChoiceBox = document.getElementById("quizcard")
const Start = document.getElementById("start")
const TimeDisplay = document.getElementById("countdown")
const startquiz = document.querySelector("#startbutton")
const Afterpage = document.getElementById("after")
const Savebutton = document.getElementById("FinalBtn")
const Leaderboard = document.getElementById("leaderboard")
const Clearbutton = document.getElementById("clearbutton")
const FinalScore = document.getElementById("finalscore")
const Rightwrong = document.getElementById("rightwrong")
const Li1 = document.getElementById("Li1")
const Li2 = document.getElementById("Li2")
const Li3 = document.getElementById("Li3")
const Li4 = document.getElementById("Li4")
const Li5 = document.getElementById("Li5")
const Li6 = document.getElementById("Li6")
const Li7 = document.getElementById("Li7")
const Li8 = document.getElementById("Li8")
const Li9 = document.getElementById("Li9")
const Li10 = document.getElementById("Li10")
const Olist = document.getElementById("optionz")
var Ch1 = document.getElementById("Ch1")
var Ch2 = document.getElementById("Ch2")
var Ch3 = document.getElementById("Ch3")
var Ch4 = document.getElementById("Ch4")
var answer = document.getElementById("answer")
var Question = document.getElementById('question')
var leaderlist = document.getElementById("list")
var TimeLeft = 60
let quest= 0
let choice = document.querySelector("#Choices")
let SavedScores = [];
let Score =0

Setleaderboard();

function stopgame(){
FinalScore.textContent = "Your Score: " + TimeLeft;
ChoiceBox.style.display = "none";
Afterpage.style.display = "block";

}
function Clearleaderboard(){
    var cleardata = JSON.parse(localStorage.getItem("Score!" || []));
    if(0 === 0){
        let cleardata = [{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},]
        localStorage.setItem("Score!",JSON.stringify(cleardata));
        
    }
    
}
function Setleaderboard(){
    var olddata = JSON.parse(localStorage.getItem("Score!" || []));
    if (olddata == null){
        let olddata = [{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},{player: "AAA", score: 000},] 
        localStorage.setItem("Score!",JSON.stringify(olddata));
    }
    Viewleaderboard();
}
function checkans(event){
    if (quest >= questions.length) {
    stopgame();
    clearInterval(TimeInt);
    } else{
        if (event === questions[quest].answer) {
        console.log("you are corect!")
        Rightwrong.style.color = "Green"
        Rightwrong.innerHTML = "Correct"
        } else{
        TimeLeft -= 10;
        console.log("you are wromg!")
        Rightwrong.style.color = "Red"
        Rightwrong.innerHTML = "Incorrect, -10 Seconds."
        }
        Score = TimeLeft;   
        quest++;
        showq();
    }
}
function leaderboard() {
    SavedScores.sort((a, b) => {
        return b.score - a.score;
    });
    Best = SavedScores.slice(0, 10);
    if (localStorage === null){
        Leaderboard.style.display = "none";
    }   else{
    Li1.textContent = Best[0].player + " - " + Best[0].score; 
    Li2.textContent = Best[1].player + " - " + Best[1].score;
    Li3.textContent = Best[2].player + " - " + Best[2].score;
    Li4.textContent = Best[3].player + " - " + Best[3].score;
    Li5.textContent = Best[4].player + " - " + Best[4].score;
    Li6.textContent = Best[5].player + " - " + Best[5].score;
    Li7.textContent = Best[6].player + " - " + Best[6].score;
    Li8.textContent = Best[7].player + " - " + Best[7].score;
    Li9.textContent = Best[8].player + " - " + Best[8].score;
    Li10.textContent = Best[9].player + " - " + Best[9].score;
}
}

function saveScore() {
    localStorage.setItem("Score!", JSON.stringify(SavedScores));
}
function showq(){
    if (quest < questions.length){
        
        ChoiceBox.style.display = "block";
        Ch1.innerHTML = questions[quest].selection[0]
        Ch2.innerHTML = questions[quest].selection[1]
        Ch3.innerHTML = questions[quest].selection[2]
        Ch4.innerHTML = questions[quest].selection[3]
        Question.innerHTML = questions[quest].question;
    } else{
    stopgame();
    }
}
function Viewleaderboard() {
    var storedScore = JSON.parse(localStorage.getItem("Score!"));
    if (storedScore !== null) {
    SavedScores = storedScore;
    }
    leaderboard()
}
function timer(){
    TimeDisplay.innerHTML = "TIME LEFT: " + TimeLeft;
    TimeInt = setInterval(function(){
        TimeDisplay.innerHTML = "TIME LEFT: " + TimeLeft;
}, );
TimeInt = setInterval(function(){
    TimeDisplay.innerHTML = "TIME LEFT: " + TimeLeft;
    TimeLeft--;
if (TimeLeft <= 0 || quest >= questions.length) {
    console.log("game over!");
    clearInterval(TimeInt);
}
}, 1000);
    
}

startquiz.addEventListener("click",function (event){
    timer();
    showq();
    Start.style.display = "none";
    Leaderboard.style.display = "none";
})

Olist.addEventListener("click", function(e){
    var event = e.target;
    console.log(event.textContent.trim())
    checkans(event.textContent.trim())
    
});
FinalBtn.addEventListener("click", function() {
    var playerInitials = document.getElementById("PlayerInitials").value.trim();
    if(playerInitials === ""){
        alert("Please Enter Initials");
    } else if(playerInitials.length <= 3) {
        var newScore = {
            player: playerInitials,
            score: TimeLeft,
        }
        SavedScores.push(newScore);
        saveScore()
        Afterpage.style.display = "none";
        location.reload();
    } else{
        alert("Initials Too Long")
    };
});
Clearbutton.addEventListener("click", function (){
    Clearleaderboard();
    location.reload();
});

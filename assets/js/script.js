// array with questions/choices/answers to loop through later. 
var quizQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices : [
           "strings",
           "booleans",
           "alert",
           "numbers"
        ],
        answer : "alert"
    },

    {
        title: "The condition in an if / else statement is enclosed within _____.",
        choices : [
           "quotes",
           "curly brackets",
           "parentheses",
           "square brackets"
        ],
        answer : "parentheses"
    },

    {
        title: "Arrays in JavaScript can be used to store _____.",
        choices : [
           "numbers and strings",
           "other arrays",
           "booleans",
           "all of the above"
        ],
        answer : "all of the above"
    },

    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices : [
           "commas",
           "curly brackets",
           "quotes",
           "parentheses"
        ],
        answer : "quotes"
    },

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices : [
           "JavaScript",
           "terminal / bash",
           "for loops",
           "console log"
        ],
        answer : "console log"
    }
];

// todo 
    // 0. setup quiz questions and answers
    // 1. click start button 
    //      1.1. start timer
    //      1.2. hide initial page
    //      1.3. show page with question
    // 2. when user answers question 
    //      2.1. if right new question appears 
    //      2.1. if wrong time is deducted and new question appears 
    // 3. game over when all questions are answered or the timer reaches 0
    //      3.1. end screen appears
    //      3.2. user enters initials and data is stored
    //          3.2.A. local storage
    //          3.2.B. can be accesed via 'view highscores' link at the top
    // 4. restart game  
//

// DOM elements
var timerEl = document.querySelector("#time");

var startScreenEl = document.getElementById("start-screen");
var startBtn = document.querySelector("#start");

var questionsEl = document.querySelector("#questions");
var feedbackEl = document.querySelector("#feedback");
var choicesEl = document.querySelector("#choices");

var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

var currentQuestionIndex = 0;
var time = 75;
function setupTimer() {
    // update time
    time--;
    timerEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

function startQuiz() {

    startScreenEl.setAttribute("class", "hide")
    questionsEl.removeAttribute("class");

    timerId = setInterval(setupTimer, 1000);
    timerEl.textContent = time;

    getQuestion();
}



function getQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
  
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
  
    choicesEl.innerHTML = "";
  
    // loop 
    currentQuestion.choices.forEach(function(choice, i) {
      // new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      // listener
      choiceNode.onclick = questionClick;
      choicesEl.appendChild(choiceNode);
    });
}

function questionClick() {
    if (this.value === quizQuestions[currentQuestionIndex].answer) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        feedbackEl.style.fontSize = "150%";
        feedbackEl.style.marginTop = "20px";
    } else {
      time -= 15;
      if (time < 0) {
        time = 0;
      }
      timerEl.textContent = time;
      feedbackEl.textContent = "Wrong!";
      feedbackEl.style.color = "red";
      feedbackEl.style.fontSize = "150%";
      feedbackEl.style.marginTop = "20px";
      
    }
  
    // fade feedback
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    // next question
    currentQuestionIndex++;
  
    if (currentQuestionIndex === quizQuestions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
}



function quizEnd() {
    clearInterval(timerId);
    questionsEl.setAttribute("class", "hide")

    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
}

// start quiz
startBtn.onclick = startQuiz;

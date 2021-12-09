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
var timerEl = document.querySelector("#timer");

var startBtn = document.querySelector("#start");

var questionsEl = document.querySelector("#questions");
var feedbackEl = document.querySelector("#feedback");
var choicesEl = document.querySelector("#choices");

var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

// quiz questions and answers
var questions = [
    question1 = {
        textContent: "Commonly used data types DO NOT include:",
        options : [
           "strings",
           "booleans",
           "alert",
           "numbers"
        ],
        answer : "alert"
    },

    question2 = {
        textContent: "The condition in an if / else statement is enclosed within _____.",
        options : [
           "quotes",
           "curly brackets",
           "parentheses",
           "square brackets"
        ],
        answer : "parentheses"
    },

    question3 = {
        textContent: "Arrays in JavaScript can be used to store _____.",
        options : [
           "numbers and strings",
           "other arrays",
           "booleans",
           "all of the above"
        ],
        answer : "all of the above"
    },

    question4 = {
        textContent: "String values must be enclosed within _____ when being assigned to variables.",
        options : [
           "commas",
           "curly brackets",
           "quotes",
           "parentheses"
        ],
        answer : "quotes"
    },

    question5 = {
        textContent: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options : [
           "JavaScript",
           "terminal / bash",
           "for loops",
           "console log"
        ],
        answer : "console log"
    }
];



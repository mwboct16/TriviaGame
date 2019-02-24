/*
- On Click function that will start the game when the user hits the 'Start button provided by Jquery
    - On click run function that will basically move onto question 1 (index 0) in the array
- Make arrays that consist of the questions that will be taken during the quiz
- Make arrays that consist of the answers
- If then statements:
    If click = the correct answer, if click != the correct answer.
- Make a timer counting down 30 secs for each question
    -If timer = 0, move on to next question
- When quiz is over display the amount of questions correct and amount of questions incorrect
- Start over button
*/

$('document').ready(function() {
    $("#restart-btn").hide();

    var timeRemainingText = document.getElementById('time-remaining');
    var questionText = document.getElementById('question');
    var choicesText = document.getElementById('choices');
    var answersStatus = document.getElementById('answers-status');

    var correct = 0;
    var incorrect = 0;


    var triviaQuestions = [{
        question: "What year was the PS4 Released?",
        answerList: ["2013", "2012", "2019", "2015"],
        answer: 0
    },{
        question: "Name the character abused by Mario.",
        answerList: ["Luigi", "Bowser", "Donkey Kong", "Mushroom"],
        answer: 2
    },{
        question: "Who developed Destiny 2?",
        answerList: ["Microsoft Studios", "Bungie", "Activision", "Infinity Ward"],
        answer: 1
    },{
        question: "What field of study is the basis of Tomb Raider?",
        answerList: ["Social Studies", "Archaeology", "Geography", "English"],
        answer: 1
    },{
        question: "The competitive gaming-group 'FaZe', was originally founded based of of what game?",
        answerList: ["Fortnite", "Grand-Theft Auto", "League of Legends", "Call of Duty"],
        answer: 3
    },{
        question: "What does the word 'Atari' mean?",
        answerList: ["Tar", "Success", "Console", "First"],
        answer: 1
    },{
        question: "What does Mario jump on/in after completing a level?",
        answerList: ["Pipes", "Platform", "Flag Pole", "Castle"],
        answer: 2
    },{
        question: "What country was the PS3 first released?",
        answerList: ["China", "Japan", "North America", "Australia"],
        answer: 1
    },{
        question: "What is the name of the all-time highest grossing game?",
        answerList: ["Fortnite", "Call of Duty", "League of Legends", "World of Warcraft"],
        answer: 3
    },{
        question: "Which video-game app was taken of due to it being to addicting?",
        answerList: ["Angry Birds", "Bouncy Frog", "Flappy Birds", "Dots"],
        answer: 2
    }];
    

    function newQuestion(){
        for (var i = 0; i < triviaQuestions.length; i++){
            $(questionText).html(triviaQuestions[i]);
        }
        newQuestion();
        console.log(newQuestion(triviaQuestions));
    };

    // Hides start button once clicked and displays first question
    $("#start-btn").on("click", function(){
        $(this).hide(); 
        newQuestion();
    });




        
});
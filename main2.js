
//questions
const STORE = {
  currentQuestionIndex: 0,
  questions:
    [

      { //1
        question: 'What is offsides?',

        answer1: 'When a player is behind their own goal.',
        answer2: 'When a player is in the opposition\'s half is nearer to the opponent\'s goal than the ball and the second-last opponent when his teammate plays the ball to him.',
        answer3: 'When a player passes the ball to their teammate during kick off.',
        answer4: 'When the goalie kicks the ball.',

        correctAnswer: 'When a player is in the opposition\'s half is nearer to the opponent\'s goal than the ball and the second-last opponent when his teammate plays the ball to him.'
      },

      { //2
        question: 'How many points per goal?',

        answer1: '3',
        answer2: '7',
        answer3: '1',
        answer4: '5',

        correctAnswer: '1'

      },

      { //3
        question: 'How many players are on the field for each team during a game?',

        answer1: '19',
        answer2: '11',
        answer3: '15',
        answer4: '5',

        correctAnswer: '11'
      },
      
      { //4
        question: 'Who, if any player, can use their hands in soccer?',

        answer1: 'Forward can use their hands.',
        answer2: 'None.',
        answer3: 'All.',
        answer4: 'Keepers can use their hands.',

        correctAnswer:
          'Keepers can use their hands.',
      },
      { //5
        question: 'What happens when the opponents team kicks the ball out of bounds past the goal on your defending side?',

        answer1: 'Goal Kick.',
        answer2: 'Punt.',
        answer3: 'Corner Kick.',
        answer4: 'Throw In.',

        correctAnswer: 'Goal Kick.'
      },

      { //6
        question: 'What do you do when the opposing team touches the ball before rolling out of bounds on the sidelines?',

        answer1: 'You get to kick the ball in.',
        answer2: 'Nothing.  The other team gets to still play the ball.',
        answer3: 'A player on the other team kicks the ball back in.',
        answer4: 'You get to throw the ball in.',

        correctAnswer: 'You get to throw the ball in.'
      },
      { //7
        question: 'How do you start the game?',

        answer1: 'The team wearing the darker color gets the ball and the keeper punts it.',
        answer2: 'Both teams are set up at midfield and the team that wins the coin toss get the ball first.',
        answer3: 'The ball gets thrown up in the air to see who gets the ball.',
        answer4: 'The team captains play rock, paper scissors.',

        correctAnswer: 'Both teams are set up at midfield and the team that wins the coin toss get the ball first.'
      },
      { //8
        question: 'How much time is on the clock for a professional soccer game?',

        answer1: '60 minutes',
        answer2: '120 minutes',
        answer3: '90 minutes',
        answer4: '30 minutes',

        correctAnswer: '90 minutes'
      },
      { //9
        question: 'What size soccer ball do professional players use?',

        answer1: 'Size 2',
        answer2: 'Size 5',
        answer3: 'Size 4',
        answer4: 'Size 3',

        correctAnswer: 'Size 5'
      },
      { //10
        question: 'How do you get a penalty kick?',

        answer1: 'A player gets a hand ball.',
        answer2: 'A player get called offsides.',
        answer3: 'A player kicks the ball over the goal.',
        answer4: 'A player gets a direct foul inside the box by an opposing team\'s player.',

        correctAnswer: 'A player gets a direct foul inside the box by an opposing team\'s player.'
      }
    
    ]
}

//this is the global score
let qNum = 0;
let numRight = 0;

//updates the question number you are on
function numQuestion() {
  qNum++;
  $(".qNum").text(qNum);
}

//updates the score
function updateScore() {
  numRight++;
  $(".numRight").text(numRight);
}

//start handles start of quiz
function startQuizHandler() {
  $("body").on("click", ".startQuiz", function (event) {
    let $startContainer = $(".startContainer")
    $startContainer.html(displayCurrentQuestion());
    $('.qNum').text(1);
  });
}

//retrieves questions for HTML
function getQuestionHTML(quest) {
  return `
  <section class="quiz js-questions">
    <form id="quizQuestions">
      <fieldset>
        <legend>${quest.question}</legend>
        <input type="radio" id="opt1" name="answer" value="${quest.answer1}" required>
        <label for="opt1">${quest.answer1}</label><br><br>
        <input type="radio" id="opt2" name="answer" value="${quest.answer2}">
        <label for="opt2">${quest.answer2}</label><br><br>
        <input type="radio" id="opt3" name="answer" value="${quest.answer3}">
        <label for="opt3">${quest.answer3}</label><br><br>
        <input type="radio" id="opt4" name="answer" value="${quest.answer4}">
        <label for="opt4">${quest.answer4}</label><br><br>
      </fieldset>
        <button id="answer" type="submit">Submit Answer</button>
    </form>
  </section>
`
}

//this is how you get questions to work through the quiz
function displayCurrentQuestion() {
  const quest = STORE.questions[STORE.currentQuestionIndex];
  $("main").html(getQuestionHTML(quest))
}

//determines whether the quiz is completed
function isTheQuizCompleted() {
  if (STORE.currentQuestionIndex === STORE.questions.length - 1) {
    return true;
  }
    return false;
}

// returns the HTML for the next question or the results screen
function getNextOrResultsButton() {
  let text, id
  if (isTheQuizCompleted()) {
    text = 'Show me the results'
    id = 'results'
  } else {
    text = 'Next question'
    id = 'next'
  }
  return `<button id="${id}">${text}</button>`

}

//response to correct answer
function getRightAnswer() {
  return `
  <section>
      <h1>You're RIGHT! You are a soccer superstar!</h1> 
      <br>
      ${getNextOrResultsButton()}
  </section>
  `
}

//response to wrong answer with correct response included
function getWrongAnswer() {
  const correctAnswer = STORE.questions[STORE.currentQuestionIndex].correctAnswer
  return `
  <section>
      <h1>INCORRECT!</h1> 
      <p id="rightAns">The correct answer is: <br><br> ${correctAnswer} </p>
      <br><br>
      ${getNextOrResultsButton()}
  </section>
  `
}


//checks if answer is correct or not
function checkAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) {
    $("main").html(getRightAnswer);
    updateScore();
  } else {
    $("main").html(getWrongAnswer);
  }
}

//handles clicks for answers to questions
function setUpClickHandlerAnswer() {
  $("body").on("submit", "form#quizQuestions", function (event) {
    event.preventDefault();
    let radioValue = $("input[name='answer']:checked").val();
    const ca = STORE.questions[STORE.currentQuestionIndex].correctAnswer;
    checkAnswer(radioValue, ca);
  });
}

//handles clicks for next button
function setUpClickHandlerNext() {
  $("body").on("click", "#next", function (event) {
    event.preventDefault();
    STORE.currentQuestionIndex++;
    displayCurrentQuestion();
    numQuestion();
  });

  $("body").on("click", "#results", function (event) {
    displayFinalResults();
    restartQuiz();
  })
}

//response to perfect score
function getGreatJob() {
  return `
  <section class="quiz js-questions">
    <form id="finalResult">
      <fieldset>
        <legend id="finalScore">You got ${numRight} right.</legend>
        <h1 id="finalScoreResp">You did GREAT!  You know your soccer!</h1> 
        <br>
        <p id="tryAgain">Try again?</p>
        <br><br>
      </fieldset>
        <button id="restart" type="submit">Restart Quiz</button>
    </form>
  </section>
  `
}

//response for any score but perfect score
function getBadJob() {
  return `
  <section class="quiz js-questions">
    <form id="finalResult">
      <fieldset>
        <legend id="finalScore">You got ${numRight} right.</legend>
        <h1 id="finalScoreResp">You need to brush up on your soccer knowledge.</h1> 
        <br>
        <p id="tryAgain">Try again?</p>
        <br><br>
      </fieldset>
        <button id="restart" type="submit">Restart Quiz</button>
    </form>
  </section>
  `
}

//calculates score, provides response and try again
function displayFinalResults() {
  if (numRight === 10) {
    $("main").html(getGreatJob);
    numQuestion();
  } else {
    $("main").html(getBadJob);
    numQuestion();
  }

}

//restarts quiz
function restartQuiz() {
  $("main").on("submit", "#restart", (event) => {
    $startContainer.html();
  });
}

//runs app
$(function f() {
  startQuizHandler();
  setUpClickHandlerAnswer();
  setUpClickHandlerNext();
})
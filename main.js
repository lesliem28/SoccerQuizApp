
//questions
const STORE = {
  currentQuestionIndex: 0,
  questions: [
    { //1
      question: 'What is offsides?',
      answers: [
        'When a player is behind their own goal.',
        'When a player is in the opposition\'s half is nearer to the opponent\'s goal than the ball and the second-last opponent when his teammate plays the ball to him.',
        'When a player passes the ball to their teammate during kick off.',
        'When the goalie kicks the ball.'
      ],
      correctAnswer:
        'When a player is in the opposition\'s half is nearer to the opponent\'s goal than the ball and the second-last opponent when his teammate plays the ball to him.'
    },
    { //2
      question: 'How many points per goal?',
      answers: [
        '3',
        '7',
        '1',
        '5'
      ],
      correctAnswer:
        '1'
    },
    { //3
      question: 'How many players are on the field for each team during a game?',
      answers: [
        '19',
        '11',
        '15',
        '5'
      ],
      correctAnswer:
        '11'
    },
    { //4
      question: 'Who, if any player, can use their hands in soccer?',
      answers: [
        'Forward can use their hands.',
        'None.',
        'All.',
        'Keepers can use their hands.'
      ],
      correctAnswer:
        'Keepers can use their hands.'
    },
    { //5
      question: 'What happens when the opponents team kicks the ball out of bounds past the goal on your defending side?',
      answers: [
        'Goal Kick.',
        'Punt.',
        'Corner Kick.',
        'Throw In.'
      ],
      correctAnswer:
        'Goal Kick.'
    },
    { //6
      question: 'What do you do when the opposing team touches the ball before rolling out of bounds on the sidelines?',
      answers: [
        'You get to kick the ball in.',
        'Nothing.  The other team gets to still play the ball.',
        'A player on the other team kicks the ball back in.',
        'You get to throw the ball in.'
      ],
      correctAnswer:
        'You get to throw the ball in.'
    },
    { //7
      question: 'How do you start the game?',
      answers: [
        'The team wearing the darker color gets the ball and the keeper punts it.',
        'Both teams are set up at midfield and the team that wins the coin toss get the ball first.',
        'The ball gets thrown up in the air to see who gets the ball.',
        'The team captains play rock, paper scissors.'
      ],
      correctAnswer:
        'Both teams are set up at midfield and the team that wins the coin toss get the ball first.'
    },
    { //8
      question: 'How much time is on the clock for a professional soccer game?',
      answers: [
        '60 minutes',
        '120 minutes',
        '90 minutes',
        '30 minutes'
      ],
      correctAnswer:
        '90 minutes'
    },
    { //9
      question: 'What size soccer ball do professional players use?',
      answers: [
        'Size 2',
        'Size 5',
        'Size 4',
        'Size 3'
      ],
      correctAnswer:
        'Size 5'
    },
    { //10
      question: 'How do you get a penalty kick?',
      answers: [
        'A player gets a hand ball.',
        'A player get called offsides.',
        'A player kicks the ball over the goal.',
        'A player get a direct foul inside the box by an opposing team\'s player.'
      ],
      correctAnswer:
        'A player get a direct foul inside the box by an opposing team\'s player.'
    }]
}


/*let qNum = 0;
let numRight = 0;

//updates the question number you are on
function numQuestion () {
  qNum++;
  $(".qNum").text;
  (qNum +1);
}

function score () {
  numRight++;
  $(".numRight").text(numRight);
}*/


function checkAnswer() {
  if (STORE.currentQuestionIndex === STORE.questions.length - 1) {
    //alert('You\'re RIGHT! You are a soccer superstar!')
  } else {
    //alert(`"Sorry!  The correct answer is" ${correctAnswer}.`)
  }
  STORE.currentQuestionIndex++
  displayCurrentQuestionScreen();
}
//displays question screen
function displayCurrentQuestionScreen() {
  //identifies question list index and questions in STORE
  const { currentQuestionIndex, questions } = STORE
  //creates variable for above
  const question = questions[currentQuestionIndex]

  //console.log(question);

  //creates form for questions for quiz
  const qHTML = `
      <h1>${question.question}</h1>
      <form>
        <input type="radio" id="opt1" name="answers" value="${question.answers[0]}">
        <label for="opt1">${question.answers[0]}</label><br>
        <input type="radio" id="opt2" name="answers" value="${question.answers[1]}">
        <label for="opt2">${question.answers[1]}</label><br>
        <input type="radio" id="opt3" name="answers" value="${question.answers[2]}">
        <label for="opt3">${question.answers[2]}</label><br>
        <input type="radio" id="opt4" name="answers" value="${question.answers[3]}">
        <label for="opt4">${question.answers[3]}</label><br><br>
        <button>Answer</button>
      </form>
      `
  $('main').html(qHTML)
}

/*function checkAnswer() {
  if (STORE.currentQuestionIndex === STORE.questions.length - 1) {
    //alert('You\'re RIGHT! You are a soccer superstar!')
  } else {
    //alert(`"Sorry!  The correct answer is" ${correctAnswer}.`)
  }
  STORE.currentQuestionIndex++
  displayCurrentQuestionScreen();
}*/


function init() {

  //on checkAnswer 
  const selectedValue = $('input[name=answers]:checked', '#myForm').val()
  const quest = questions[currentQuestionIndex];
  //if (selectedValue === quest.correctAnswer) {
    //increment the score 
    //alert("Correct!");
    //qNum++;
    //numRight++;
    //STORE.currentQuestionIndex++;
    //displayCurrentQuestionScreen();
  //} else {
    //do nothing
    //alert(`"Sorry! Wrong Answer.  The correct answer is" ${correctAnswer}.`);
    //qNum++;
    //STORE.currentQuestionIndex++;
    //displayCurrentQuestionScreen();
  //}

  //when a user starts the quiz


  //upon clicking start quiz button this function takes you to the first 
  //question screen
 
  $('body').on('click', '.js-start-button', ev => {
    //console.log('Here is your question.')
    STORE.currentQuestionIndex = 0
    displayCurrentQuestionScreen()
    //STORE.currentQuestionIndex++;
  })
 

  /*$('body').on('click', '#js-checkAnswer', ev => {
      ev.preventDefault()
      //if ()
      checkAnswer()
    })*/
}

//run init when the DOM is ready
$(init)



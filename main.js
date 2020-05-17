
//questions
const STORE = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    question: 'How do you get a penalty kick?',
    answers: [
      'A player gets a hand ball.',
      'A player get called offsides.',
      'A player kicks the ball over the goal.',
      'A player get a direct foul inside the box by an opposing team\'s player.'
    ],
    correctAnswer:
      'A player get a direct foul inside the box by an opposing team\'s player.'
  },
]

function checkAnswer() {
  
  if (STORE.currentQuestionIndex === STORE.questions.length - 1) {
    alert('results screen!')
    return
  }
  STORE.currentQuestionIndex++
  displayCurrentQuestionScreen();
}

function displayCurrentQuestionScreen() {
  const { currentQuestionIndex, questions } = STORE
  const question = questions[currentQuestionIndex]
  const qHTML = `
      <h1>${question.title}</h1>
      <form>
      <h1>How many players are on the field for each team during a game?</h1>
      <input type="radio" id="opt1" name="players" value="15">
      <label for="opt1">15</label><br>
      <input type="radio" id="opt2" name="players" value="19">
      <label for="opt2">19</label><br>
      <input type="radio" id="opt3" name="players" value="11">
      <label for="opt3">11</label><br>
      <input type="radio" id="opt4" name="players" value="5">
      <label for="opt4">5</label><br><br>
      <button>Answer</button>
  </form>
      `
  $('main').html(qHTML)
}

function init() {
  $('body').on('click', '#js-start-button', ev => {
    console.log('Here is your question.')
    STORE.currentQuestionIndex = 0
    displayCurrentQuestionScreen()
  })

  $('body').on('click', '#js-checkAnswer', ev => {
    ev.preventDefault()
    checkAnswer()
  })
}

//run init when the DOM is ready
$(init)
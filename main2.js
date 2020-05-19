
//questions
const STORE = {
  currentQuestionIndex: 0
  [
    {//1
      question: 'What is offsides?',
      
      answer1: 'When a player is behind their own goal.',
      answer2: 'When a player is in the opposition\'s half is nearer to the opponent\'s goal than the ball and the second-last opponent when his teammate plays the ball to him.',
      answer3: 'When a player passes the ball to their teammate during kick off.',
      answer4:'When the goalie kicks the ball.',
    
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
      question3: 'How many players are on the field for each team during a game?',
      
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
      answer2:  'Nothing.  The other team gets to still play the ball.',
      answer3:'A player on the other team kicks the ball back in.',
      answer4:'You get to throw the ball in.',

      correctAnswer: 'You get to throw the ball in.'
    },
    { //7
      question: 'How do you start the game?',
  
      answer1: 'The team wearing the darker color gets the ball and the keeper punts it.',
      answer2:  'Both teams are set up at midfield and the team that wins the coin toss get the ball first.',
      answer3: 'The ball gets thrown up in the air to see who gets the ball.',
      answer4:  'The team captains play rock, paper scissors.',

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
      
      answer1:  'Size 2',
      answer2:  'Size 5',
      answer3: 'Size 4',
      answer4: 'Size 3',
      
      correctAnswer: 'Size 5'
    },
    { //10
      question: 'How do you get a penalty kick?',
      
      answer1: 'A player gets a hand ball.',
      answer2: 'A player get called offsides.',
      answer3: 'A player kicks the ball over the goal.',
      answer4: 'A player get a direct foul inside the box by an opposing team\'s player.',
    
      correctAnswer: 'A player get a direct foul inside the box by an opposing team\'s player.'
    }]
}


//this is how we get questions to work through the quiz
function getQuestions() {
  const quest = STORE.currentQuestionIndex;

  $("main").html(`
    <section class="quiz js-questions">
      <form>
        <fieldset>
          <legend>${quest.question}</legend>
          <input type="radio" id="opt1" name="answer" value="${question.answer1}">
          <label for="opt1">${question.answer1}</label><br>
          <input type="radio" id="opt2" name="answer" value="${question.answer2}">
          <label for="opt2">${question.answer2}</label><br>
          <input type="radio" id="opt3" name="answer" value="${question.answer3}">
          <label for="opt3">${question.answer3}</label><br>
          <input type="radio" id="opt4" name="answer" value="${question.answer4}">
          <label for="opt4">${question.answer4}</label><br><br>
        </fieldset>
          <button type="submit">Answer</button>
      </form>
    </section>

  `)
}

//get correct answer and congratulate them or give correct answer
function getAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) {
    $("main").html(`
    <section>
        <h1>You're RIGHT! You are a soccer superstar!</h1> 
        <br>
        <button>Next Question</button>
    </section>
    `)
  } else {
    $("main").html(`
    <section>
        <h1>INCORRECT!</h1> 
        <p>The correct answer is: ${correctAnswer}.</p)
        <br>
        <button>Next Question</button>
    </section>
    `)
  }
}


//
function startQuiz () {
  $("main").on("click", ".js-start-button", function(event) {
    getQuestions();
  });
}


let qNum = 0;
let numRight = -1;

//updates the question number you are on
function numQuestion () {
  qNum++;
  $(".qNum").text;
  (qNum +1);
}

function score () {
  numRight++;
  $(".numRight").text(numRight);
}
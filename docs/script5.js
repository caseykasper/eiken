const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Good Job! Click Here to Play Again!'
        startButton.classList.remove('hide')
    }
}


function setStatusClass(element, correct) {
    let x = 0;
    if (correct) {
        
    }
    
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')


}
const questions = [
    {
        question: 'A : This is your  birthday ( ).\nB : Thank you, Dad!',
        answers: [
            { text: 'time', correct: false },
            { text: 'day', correct: false },
            { text: 'present', correct: true },
            { text: 'sport', correct: false }
        ]
    },
    {
        question: 'A : Carl, do you go to school by  bus ( ) by train?\nB : By bus, Mr. Anderson.',
        answers: [
            { text: 'but', correct: false },
            { text: 'so', correct: false },
            { text: 'or', correct: true },
            { text: 'also', correct: false }
        ]
    },
    {
        question: 'A : Paul, what do you need for school?\n B : I need new pens and a ( ), Mom.',
        answers: [
            { text: 'bench', correct: false },
            { text: 'coin', correct: false },
            { text: 'notebook', correct: true },
            { text: 'plate', correct: false }
        ]
    },
    {
        question: 'My mother often works in the garden. I sometimes ( ) her.',
        answers: [
            { text: 'make', correct: false },
            { text: 'walk', correct: false },
            { text: 'close', correct: false },
            { text: 'help', correct: true }
        ]
    },
    {
        question: "A : 'Do  you  like ( ), Judy?\n B :  Yes. I like oranges.'",
        answers: [
            { text: 'bread', correct: false },
            { text: 'fruit', correct: true },
            { text: 'meat', correct: false },
            { text: 'fish', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's August.",
        answers: [
            { text: 'first', correct: false },
            { text: 'third', correct: false },
            { text: 'fifth', correct: false },
            { text: 'eighth', correct: true }
        ]
    },
    {
        question: 'A : Oh, your picture is  very ( ), Linda. I like it very much.\n B : Thank you, Ms. Wilson.',
        answers: [
            { text: 'nice', correct: true },
            { text: 'tall', correct: false },
            { text: 'sorry', correct: false },
            { text: 'young', correct: false }
        ]
    },
    {
        question: 'Nancy has piano lessons ( ) school.',
        answers: [
            { text: 'after', correct: true },
            { text: 'about', correct: false },
            { text: 'down', correct: false },
            { text: 'on', correct: false }
        ]
    },
    {
        question: 'Miki’s  grandparents ( ) in Nagoya.',
        answers: [
            { text: 'stand', correct: false },
            { text: 'live', correct: true },
            { text: 'know', correct: false },
            { text: 'get', correct: false }
        ]
    },
    {
        question: 'A :  Hi, Jack. Welcome  ( ) the party!\n B : Hi, Jane.',
        answers: [
            { text: 'to', correct: true },
            { text: 'out', correct: false },
            { text: 'up', correct: false },
            { text: 'under', correct: false }
        ]
    },
    {
        question: 'Tina and Bill watch their favorite TV show at nine o’clock every ( ).',
        answers: [
            { text: 'minute', correct: false },
            { text: 'calendar', correct: false },
            { text: 'night', correct: true },
            { text: 'hour', correct: false }
        ]
    },
    {
        question: 'A :  How  ( ) tennis rackets do you have, Kenji?\n B : Three.',
        answers: [
            { text: 'about', correct: false },
            { text: 'many', correct: true },
            { text: 'much', correct: false },
            { text: 'old', correct: false }
        ]
    },
    {
        question: 'A : Can I have dessert now, Dad?\nB :  (        ) your milk first, Lisa.',
        answers: [
            { text: 'To drink', correct: false },
            { text: 'Drinks', correct: false },
            { text: 'Drink', correct: true },
            { text: 'Drinking', correct: false }
        ]
    },
    {
        question: 'A : Are you and Tim from Canada?\nB :  Yes,  (        ) are.',
        answers: [
            { text: 'I', correct: false },
            { text: 'we', correct: true },
            { text: 'our', correct: false },
            { text: 'ours', correct: false }
        ]
    },
    {
        question: 'Carrie is ( ) a picture for art class now.',
        answers: [
            { text: 'painted', correct: false },
            { text: 'paints', correct: false },
            { text: 'painting', correct: true },
            { text: 'paint', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's January.",
        answers: [
            { text: 'first', correct: true },
            { text: 'third', correct: false },
            { text: 'fifth', correct: false },
            { text: 'eighth', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's February.",
        answers: [
            { text: 'first', correct: false },
            { text: 'second', correct: true },
            { text: 'fifth', correct: false },
            { text: 'seventh', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's March.",
        answers: [
            { text: 'second', correct: false },
            { text: 'third', correct: true },
            { text: 'fifth', correct: false },
            { text: 'sixth', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's April.",
        answers: [
            { text: 'first', correct: false },
            { text: 'second', correct: false },
            { text: 'third', correct: false },
            { text: 'fourth', correct: true }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's May.",
        answers: [
            { text: 'first', correct: false },
            { text: 'third', correct: false },
            { text: 'fifth', correct: true },
            { text: 'eighth', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's June.",
        answers: [
            { text: 'third', correct: false },
            { text: 'fourth', correct: false },
            { text: 'fifth', correct: false },
            { text: 'sixth', correct: true }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's June.",
        answers: [
            { text: 'fourth', correct: false },
            { text: 'fifth', correct: false },
            { text: 'sixth', correct: true },
            { text: 'seventh', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's July.",
        answers: [
            { text: 'sixth', correct: false },
            { text: 'seventh', correct: true },
            { text: 'eighth', correct: false },
            { text: 'ninth', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's August.",
        answers: [
            { text: 'eighth', correct: true },
            { text: 'ninth', correct: false },
            { text: 'tenth', correct: false },
            { text: 'eleventh', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's September.",
        answers: [
            { text: 'eighth', correct: false },
            { text: 'ninth', correct: true },
            { text: 'tenth', correct: false },
            { text: 'eleventh', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's October.",
        answers: [
            { text: 'eighth', correct: false },
            { text: 'ninth', correct: false },
            { text: 'tenth', correct: true },
            { text: 'eleventh', correct: false }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's November.",
        answers: [
            { text: 'eighth', correct: false },
            { text: 'ninth', correct: false },
            { text: 'tenth', correct: false },
            { text: 'eleventh', correct: true }
        ]
    },
    {
        question: "What is the ( ) month of the year?\n It's December.",
        answers: [
            { text: 'ninth', correct: false },
            { text: 'tenth', correct: false },
            { text: 'eleventh', correct: false },
            { text: 'twelfth', correct: true }
        ]
    },
    {
        question: "John, it's time for dinner. Go and ( ) your hands now.",
        answers: [
            { text: 'play', correct: false },
            { text: 'wash', correct: true },
            { text: 'give', correct: false },
            { text: 'have', correct: false }
        ]
    },
    {
        question: "What color do you like? ?\n I like ( ).",
        answers: [
            { text: 'trees', correct: false },
            { text: 'music', correct: false },
            { text: 'black', correct: true },
            { text: 'birds', correct: false }
        ]
    },
    {
        question: "My family has two ( ). We have a dog and a cat.",
        answers: [
            { text: 'pets', correct: true },
            { text: 'books', correct: false },
            { text: 'flowers', correct: false },
            { text: 'rooms', correct: false }
        ]
    },
    
    {
        question: "A :  Carl,  do  you  go  to  school  by  bus  ()  by  train? \n B :  By  bus,  Mr.  Anderson.",
        answers: [
            { text: 'but', correct: false },
            { text: 'so', correct: false },
            { text: 'or', correct: true },
            { text: 'also', correct: false }
        ]
    },
    {
        question: "My  mother  often  works  in  the  garden.    I  sometimes  ()  her.,",
        answers: [
            { text: 'help', correct: true },
            { text: 'walk', correct: false },
            { text: 'close', correct: false },
            { text: 'make', correct: false }
        ]
    },
    {
        question: "A : Do  you  like  ( ),  Mark?\n B : Yes. I  like  oranges.",
        answers: [
            { text: 'bread', correct: false },
            { text: 'fruit', correct: true },
            { text: 'meat', correct: false },
            { text: 'fish', correct: false }
        ]
    },
    {
        question: "A : Oh,  your  picture  is  very  ( ),  Mary.    I  like  it  very  much. \n B : Thank  you,  Ms.  Jones.",
        answers: [
            { text: 'nice', correct: true },
            { text: 'sorry', correct: false },
            { text: 'tall', correct: false },
            { text: 'young', correct: false }
        ]
    },
    
    {
        question: "Jane  has  piano  lessons  ( )  school.",
        answers: [
            { text: 'on', correct: false },
            { text: 'after', correct: true },
            { text: 'about', correct: false },
            { text: 'down', correct: false }
        ]
    },
    {
        question: "Miki’s  grandparents  ( )  in  Nagoya.",
        answers: [
            { text: 'help', correct: false },
            { text: 'walk', correct: false },
            { text: 'know', correct: false },
            { text: 'live', correct: true }
        ]
    },
    {
        question: "A : Hi,  Nancy.    Welcome  ( )  the  party! \n B : Hi,  Jane.",
        answers: [
            { text: 'to', correct: true },
            { text: 'out', correct: false },
            { text: 'up', correct: false },
            { text: 'under', correct: false }
        ]
    },
    
    {
        question: "Tina  and  Bill  watch  their  favorite  TV  show  at  nine  o’clock  every ( ).",
        answers: [
            { text: 'calendar', correct: false },
            { text: 'minute', correct: false },
            { text: 'night', correct: true },
            { text: 'hour', correct: false }
        ]
    },
    {
        question: "Mother :  Fred,  breakfast  is  ready. \n Boy :  OK.    ( ).",
        answers: [
            { text: 'I  like  cooking. ', correct: false },
            { text: 'I’m  coming.', correct: true },
            { text: 'You’re  welcome.', correct: false },
            { text: ' It’s  me.', correct: false }
        ]
    },
    {
        question: "Mother :  Is  the  baseball  game  on  Saturday,  Jake? \n Boy :  ( )    It  starts  at  eight  o’clock.",
        answers: [
            { text: 'That’s  right.', correct: true },
            { text: 'It’s  fine. ', correct: false },
            { text: 'See  you.', correct: false },
            { text: 'Here  you  are. ', correct: false }
        ]
    },
    {
        question: "Sister :  Let’s  go  to  the  pool,  Chris. \n Brother :  ( )    I  have  a  lot  of  homework.",
        answers: [
            { text: 'We’re  at  home. ', correct: false },
            { text: 'Sorry,  I  can’t. ', correct: true },
            { text: 'It’s  too  small.', correct: false },
            { text: 'That’s  not  yours.', correct: false }
        ]
    },
    
    {
        question: "Teacher :  Goodbye,  Jane.    Have  a  nice  weekend. \n Girl :  Thank  you,  Mr.  Baker.  ( )",
        answers: [
            { text: 'I  know. ', correct: false },
            { text: 'Next  time. ', correct: false },
            { text: 'To  the  sea.', correct: false },
            { text: 'You,  too.', correct: true }, 
        ]
    },
    {
        question: "Niki’s  grandparents  ( )  in  Nagoya.",
        answers: [
            { text: 'live', correct: true },
            { text: 'walk', correct: false },
            { text: 'know', correct: false },
            { text: 'help', correct: false }
        ]
    },
    {
        question: "Mother :  Pete,  do  you  like  the  blue  shoes? \n Boy :  ( )",
        answers: [
            { text: 'Yes,  I  play  volleyball. ', correct: false },
            { text: 'Yes,  they’re  very  easy.', correct: false },
            { text: 'No,  I  like  the  red  ones. ', correct: true }, 
            { text: 'No,  they’re  at  school.', correct: false }
        ]
    },
    
    {
        question: "I don’t have a ( ) in my room, so I study at the kitchen table.",
        answers: [
            { text: 'grape', correct: false },
            { text: 'desk ', correct: true },
            { text: 'basket', correct: false },
            { text: 'calender', correct: false }, 
        ]
    },
    {
        question: "A : Kate, you like music. Do you ( )?\nB : No, but I play the piano",
        answers: [
            { text: 'sing', correct: true },
            { text: 'sit', correct: false },
            { text: 'ski', correct: false },
            { text: 'run', correct: false }
        ]
    },
    {
        question: "A : Do you eat rice for ( ), Taro?\nB : No, I have eggs and toast",
        answers: [
            { text: 'newspaper', correct: false },
            { text: 'spoon', correct: false },
            { text: 'light', correct: false }, 
            { text: 'breakfast', correct: true }
        ]
    },
    {
        question: "It’s very ( ) today. It’s snowing.",
        answers: [
            { text: 'tall', correct: false },
            { text: 'sweet ', correct: false },
            { text: 'cold', correct: true },
            { text: 'fast', correct: false }, 
        ]
    },
    {
        question: "A : Do you often write ( ) to your friends? \nB : Yes, I do.",
        answers: [
            { text: 'letters', correct: true },
            { text: 'classes', correct: false },
            { text: 'pens', correct: false },
            { text: 'pictures', correct: false }
        ]
    },
    {
        question: "A : Bob is a good swimmer.\nB : Yes. He is very ( ).",
        answers: [
            { text: 'high', correct: false },
            { text: 'slow', correct: false },
            { text: 'long', correct: false }, 
            { text: 'fast', correct: true }
        ]
    },
    {
        question: "A : Do you have any ( ), Susan?\nB : Yes. I have two birds",
        answers: [
            { text: 'fruit', correct: false },
            { text: 'pets', correct: true },
            { text: 'sports', correct: false }, 
            { text: 'books', correct: false }
        ]
    },
    {
        question: "A : See ( ), Lynn.\nB : OK, Chris. Goodbye",
        answers: [
            { text: 'you', correct: true },
            { text: 'that ', correct: false },
            { text: 'us', correct: false },
            { text: 'them', correct: false }, 
        ]
    },
    {
        question: "A : I like hamburgers. How ( ) you, Steve?\nB : I don’t.",
        answers: [
            { text: 'down', correct: false },
            { text: 'on', correct: false },
            { text: 'about', correct: true },
            { text: 'up', correct: false }
        ]
    },
    {
        question: "A : What are you listening ( ), Bill?\nB : A new CD.",
        answers: [
            { text: 'on', correct: false },
            { text: 'over', correct: false },
            { text: 'under', correct: false }, 
            { text: 'to', correct: true }
        ]
    },
    {
        question: "A : It’s time for bed, Amy.\nB : OK, Dad.\nA : ( ) a good night’s sleep.",
        answers: [
            { text: 'Start', correct: false },
            { text: 'Have ', correct: true },
            { text: 'Make', correct: false },
            { text: 'See', correct: false }, 
        ]
    },
    {
        question: "A : Can I have some chocolate?\nB : Yes, ( ) course.",
        answers: [
            { text: 'with', correct: false },
            { text: 'by', correct: false },
            { text: 'of', correct: true },
            { text: 'after', correct: false }
        ]
    },
    {
        question: "A : What are you listening ( ), Bill?\nB : A new CD.",
        answers: [
            { text: 'on', correct: false },
            { text: 'over', correct: false },
            { text: 'under', correct: false }, 
            { text: 'to', correct: true }
        ]
    },
    {
        question: "My friends and I sometimes do ( ) homework in the library.",
        answers: [
            { text: 'our', correct: true },
            { text: 'us ', correct: false },
            { text: 'ours', correct: false },
            { text: 'we', correct: false }, 
        ]
    },
    {
        question: "A : ( ) color do you like?\nB : I like blue.",
        answers: [
            { text: 'Where', correct: false },
            { text: 'When', correct: false },
            { text: 'What', correct: true },
            { text: 'Who', correct: false }
        ]
    },
    {
        question: "A : ( ) your mother a nurse?\nB : Yes. She works at Central Hospital.",
        answers: [
            { text: 'Does', correct: false },
            { text: 'Do', correct: false },
            { text: 'Are', correct: false }, 
            { text: 'Is', correct: true }
        ]
    },
    {
        question: "Boy : Where is my notebook?\nMother : ( ) It’s on the table.",
        answers: [
            { text: 'After school. ', correct: false },
            { text: 'Here it is.', correct: true },
            { text: 'Please do it. ', correct: false }, 
            { text: 'No, he isn’t.', correct: false }
        ]
    },
    {
        question: "Father : Have a sandwich, Joan.\nGirl : ( ) Dad. I’m very hungry!",
        answers: [
            { text: 'Thanks,', correct: true },
            { text: 'Over there, ', correct: false },
            { text: 'They’re easy,', correct: false },
            { text: 'The kitchen,', correct: false }, 
        ]
    },
    {
        question: "Boy 1 : What is in that box?\nBoy 2 : ( ) Let’s look.",
        answers: [
            { text: 'They’re at school. ', correct: false },
            { text: 'He has one.', correct: false },
            { text: 'I don’t know. ', correct: true },
            { text: 'I have a lot of them.', correct: false }
        ]
    },
    {
        question: "Man : When do you play tennis, Mary?\nWoman : ( )",
        answers: [
            { text: 'Sure, I do. ', correct: false },
            { text: 'No, I can’t.', correct: false },
            { text: 'Near my house.', correct: false }, 
            { text: 'On Saturdays. ', correct: true }
        ]
    },
    {
        question: "Girl : How old is your little sister, Fred?\nBoy : ( )",
        answers: [
            { text: 'Every day.  ', correct: false },
            { text: 'Her name is Kate.', correct: false },
            { text: 'It’s very pretty. ', correct: false }, 
            { text: 'She’s four years old. ', correct: true }
        ]
    },

]

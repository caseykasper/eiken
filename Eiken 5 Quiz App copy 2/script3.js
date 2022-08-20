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
    clearStatusClass(element)
    let x = 0;
    if (correct) {
        element.classList.add('correct')
        x++;
        console.log(x);
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
        question: 'A : How do you make that potato dish?\nB : First, you (      ) the potatoes, and then cut them in half and put butter on them.',
        answers: [
            { text: 'eat', correct: false },
            { text: 'hurt', correct: false },
            { text: 'boil', correct: true }, 
            { text: 'care', correct: false }
        ]
    },
    {
        question: 'Last summer, Hiroshi’s family traveled around Japan. This year they want to go ( ).',
        answers: [
            { text: 'abroad ', correct: true },
            { text: 'inside', correct: false },
            { text: 'other ', correct: false }, 
            { text: 'similar', correct: false }
        ]
    },
    {
        question: 'Bob ( ) five friends to his party.',
        answers: [
            { text: 'made', correct: false },
            { text: 'invited', correct: true },
            { text: 'visited', correct: false }, 
            { text: 'spoke', correct: false }
        ]
    },
    {
        question: 'A : John, you should go to bed soon. If you stay up too late, you’ll ( ) and be late for school.\nB : OK, Mom.',
        answers: [
            { text: 'graduate', correct: false },
            { text: 'promise ', correct: false },
            { text: 'return', correct: false }, 
            { text: 'oversleep', correct: true }
        ]
    },
    {
        question: 'A : Did you buy your father something special for his birthday?\nB : Yes. He loves to cook, so I got him a new ( ).',
        answers: [
            { text: 'field', correct: false },
            { text: 'contact', correct: false },
            { text: 'apron', correct: true }, 
            { text: 'ring', correct: false }
        ]
    },
    {
        question: 'I bought a new Tshirt for my brother, but I bought the wrong size. It was too ( ) for him.',
        answers: [
            { text: 'tight ', correct: true },
            { text: 'heavy', correct: false },
            { text: 'clear ', correct: false }, 
            { text: 'bright', correct: false }
        ]
    },
    {
        question: 'Sarah saw some flowers by the road while she was taking a walk. She ( ) a few and took them home.',
        answers: [
            { text: 'spent', correct: false },
            { text: 'picked', correct: true },
            { text: 'wished', correct: false }, 
            { text: 'guessed', correct: false }
        ]
    },
    {
        question: 'Jenny saw her grandparents ( ) the first time in years. She missed them very much.',
        answers: [
            { text: 'over', correct: false },
            { text: 'out ', correct: false },
            { text: 'from', correct: false }, 
            { text: 'for', correct: true }
        ]
    },
    {
        question: 'A : I told my mother that I would be home by 7:00. I don’t want to ( ) my promise, so I have to go now.',
        answers: [
            { text: 'pass', correct: false },
            { text: 'sell', correct: false },
            { text: 'break', correct: true }, 
            { text: 'lend', correct: false }
        ]
    },
    {
        question: 'A : Don’t say anything to Dad about the surprise party!\nB : Don’t worry. He won’t find ( ) about it from me.',
        answers: [
            { text: 'out ', correct: true },
            { text: 'within', correct: false },
            { text: 'through ', correct: false }, 
            { text: 'near', correct: false }
        ]
    },
    {
        question: 'My little sister is ( ) of the dark, so she always sleeps with my parents.',
        answers: [
            { text: 'brave', correct: false },
            { text: 'afraid', correct: true },
            { text: 'true', correct: false }, 
            { text: 'glad', correct: false }
        ]
    },
    {
        question: 'Joseph lost his glasses again. He searched all ( ) the place, but he couldn’t find them.',
        answers: [
            { text: 'down', correct: false },
            { text: 'up ', correct: false },
            { text: 'under', correct: false }, 
            { text: 'over', correct: true }
        ]
    },
    {
        question: 'Last Saturday, my bicycle was ( ). I have to buy a new one.',
        answers: [
            { text: 'steal', correct: false },
            { text: 'stole', correct: false },
            { text: 'stolen', correct: true }, 
            { text: 'stealing', correct: false }
        ]
    },
    {
        question: 'A : Do you like ( ) in Japan, Mr. Kent?\nB : Yes, I do.',
        answers: [
            { text: 'living ', correct: true },
            { text: 'live', correct: false },
            { text: 'lived ', correct: false }, 
            { text: 'lives', correct: false }
        ]
    },
    {
        question: 'A : Which shirt do you like?\nB : I think the red one is ( ) than the blue one.',
        answers: [
            { text: 'nice', correct: false },
            { text: 'nicer', correct: true },
            { text: 'nicest', correct: false }, 
            { text: 'nicely', correct: false }
        ]
    },
    {
        question: 'Girl 1 : I’m having a party from one on Saturday. ( )\nGirl 2 : I’d love to. I’ll bring a pie.',
        answers: [
            { text: 'Your bus comes soon.', correct: false },
            { text: 'You missed it. ', correct: false },
            { text: 'I’d like that, please.', correct: false }, 
            { text: 'I hope you can come. ', correct: true }
        ]
    },
    {
        question: 'Son : ( ) Mom?\nMother : First, wash these potatoes. Then, cut them into small pieces.',
        answers: [
            { text: 'What did you cook for dinner', correct: false },
            { text: 'What did you buy at the store, ', correct: false },
            { text: 'What time will we have lunch,', correct: false }, 
            { text: 'What do you want me to do,', correct: true }
        ]
    },
    {
        question: 'Son : Mom, will the zoo be open on New Year’s Day?\nMother : ( ) Let’s check on the Internet.',
        answers: [
            { text: 'Have a great year.', correct: false },
            { text: 'It happened yesterday.', correct: false },
            { text: 'I’m not sure.', correct: true }, 
            { text: 'I did my best.', correct: false }
        ]
    },
    {
        question: 'Man : I’m going skiing this Sunday. ( ) you should come with me.\nWoman : That sounds fun. I’d love to.',
        answers: [
            { text: 'If you have no plans, ', correct: true },
            { text: 'While you’re at work,', correct: false },
            { text: 'When you don’t have time, ', correct: false }, 
            { text: 'Because your back hurts,', correct: false }
        ]
    },
    {
        question: 'Man : I went hiking in Nagano last Saturday.\nWoman : That’s pretty far from here. ( )\nMan : No, I came back to Tokyo that evening.',
        answers: [
            { text: 'Do you know the way?', correct: false },
            { text: 'Did you stay there?', correct: true },
            { text: 'Do you want to go together?', correct: false }, 
            { text: 'Did you take a map?', correct: false }
        ]
    },
]
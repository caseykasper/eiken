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
]
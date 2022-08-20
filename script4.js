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
        question: 'Risa is a good (    ). She draws very well.',
        answers: [
            { text: 'visitor', correct: false },
            { text: 'farmer', correct: false },
            { text: 'artist', correct: true }, 
            { text: 'contest', correct: false }
        ]
    },
    {
        question: '  A: I have two (     ) for the concert tonight. Do you want to go?\nB: Sure. I’d love to.',
        answers: [
            { text: 'shoulders', correct: false },
            { text: 'tickets', correct: true },
            { text: 'cards', correct: false }, 
            { text: 'presents', correct: false }
        ]
    },
    {
        question: 'A: Did you like the book, Andy?\nB: Well, the first (     ) of the book was interesting, but the ending wasn’t good.',
        answers: [
            { text: 'part', correct: true },
            { text: 'country', correct: false },
            { text: 'way', correct: false }, 
            { text: 'road', correct: false }
        ]
    },
    {
        question: ' A: This is a (      ) for your birthday, Steven. I bought it in Japan\nB: Thank you.',
        answers: [
            { text: 'report', correct: false },
            { text: 'festival', correct: false },
            { text: 'dream', correct: false }, 
            { text: 'gift', correct: true }
        ]
    },
    {
        question: 'Strawberry is not Jim’s favorite (       ) of ice cream. He likes chocolate ice cream better.',
        answers: [
            { text: 'thing', correct: false },
            { text: 'part', correct: false },
            { text: 'kind', correct: true }, 
            { text: 'last', correct: false }
        ]
    },
    {
        question: ' Jeffrey goes to a different (      ) every summer. This year, he’ll go to Mexico.',
        answers: [
            { text: 'passport', correct: false },
            { text: 'country', correct: true },
            { text: 'radio', correct: false }, 
            { text: 'hobby', correct: false }
        ]
    },
    {
        question: 'A: Greg, did you see the (      ) about the African animals on TV last night? \nB: No, I didn’t ',
        answers: [
            { text: 'program', correct: true },
            { text: 'view', correct: false },
            { text: 'road', correct: false }, 
            { text: 'member', correct: false }
        ]
    },
    {
        question: ' Brian’s father is a famous (      ). Many people want to buy his beautiful paintings.',
        answers: [
            { text: 'farmer', correct: false },
            { text: 'writer', correct: false },
            { text: 'pianist', correct: false }, 
            { text: 'artist', correct: true }
        ]
    },
    {
        question: 'That is the tallest (        ) in Nagoya. My father works there.',
        answers: [
            { text: 'computer', correct: false },
            { text: 'dish', correct: false },
            { text: 'building', correct: true }, 
            { text: 'world', correct: false }
        ]
    },
    {
        question: 'A: Do you like playing sports, Dan?\nB: Yes, I’m a (        ) of the tennis club.',
        answers: [
            { text: 'lesson', correct: false },
            { text: 'member', correct: true },
            { text: 'uniform', correct: false }, 
            { text: 'size', correct: false }
        ]
    },
    {
        question: 'I was able to get three (        ) for the concert. They’re very good seats.',
        answers: [
            { text: 'tickets', correct: true },
            { text: 'pictures', correct: false },
            { text: 'leaders', correct: false }, 
            { text: 'hobbies', correct: false }
        ]
    },
    {
        question: ' I went on a bus (        ) to Yamanashi last week.',
        answers: [
            { text: 'gift', correct: false },
            { text: 'poster', correct: false },
            { text: 'step', correct: false }, 
            { text: 'trip', correct: true }
        ]
    },
    {
        question: 'My grandfather and grandmother live in a small (        ) in the mountains.',
        answers: [
            { text: 'chair', correct: false },
            { text: 'size', correct: false },
            { text: 'village', correct: true }, 
            { text: 'world', correct: false }
        ]
    },
    {
        question: 'The (     ) is very clear and full of stars tonight. It’s beautiful.',
        answers: [
            { text: 'land', correct: false },
            { text: 'sky', correct: true },
            { text: 'boat', correct: false }, 
            { text: 'ground', correct: false }
        ]
    },
    {
        question: 'A: Those flowers are beautiful. Did you buy them?\nB: No, I got them from my (      ).',
        answers: [
            { text: 'garden', correct: true },
            { text: 'weather', correct: false },
            { text: 'time', correct: false }, 
            { text: 'handle', correct: false }
        ]
    },
    {
        question: 'A: Do you have to wear a (   ) at your school, Yuka?\nB: Yes, boys wear green jackets and red ties',
        answers: [
            { text: 'language', correct: false },
            { text: 'subject', correct: false },
            { text: 'contest', correct: false }, 
            { text: 'uniform', correct: true }
        ]
    },
    {
        question: 'A: I have good (    ), Mom. I’m going to play in the big baseball game next month.\nB: Really?  That’s great.',
        answers: [
            { text: 'walls', correct: false },
            { text: 'radios', correct: false },
            { text: 'news', correct: true }, 
            { text: 'members', correct: false }
        ]
    },
    {
        question: 'A: Where are we going for dinner, Dad?\nB: Let’s go to the Japanese (      ).',
        answers: [
            { text: 'station', correct: false },
            { text: 'restaurant', correct: true },
            { text: 'hospital', correct: false }, 
            { text: 'library', correct: false }
        ]
    },
    {
        question: ' I have to write a (      ) for history class.',
        answers: [
            { text: 'report', correct: true },
            { text: 'place', correct: false },
            { text: 'floor', correct: false }, 
            { text: 'hobby', correct: false }
        ]
    },
    {
        question: 'I went on a bus (   ) to Hokkaido last month.',
        answers: [
            { text: 'step', correct: false },
            { text: 'poster', correct: false },
            { text: 'gift', correct: false }, 
            { text: 'trip', correct: true }
        ]
    },
    {
        question: 'A: Now, everyone. Look at the world (     ) on the wall. Where is China?\nB: I know. Mr. Smith.',
        answers: [
            { text: 'holiday', correct: false },
            { text: 'shower', correct: false },
            { text: 'map', correct: true }, 
            { text: 'lesson', correct: false }
        ]
    },
    {
        question: 'On Christmas day, there are many letters in our (       ).',
        answers: [
            { text: 'picnic', correct: false },
            { text: 'mailbox', correct: true },
            { text: 'oven', correct: false }, 
            { text: 'concert', correct: false }
        ]
    },
    {
        question: ' A: Scott, it’s hot in this room. Is the air conditioner on now?\nB: I’m not sure. I’ll go and (     ).',
        answers: [
            { text: 'check', correct: true },
            { text: 'hope', correct: false },
            { text: 'learn', correct: false }, 
            { text: 'smile', correct: false }
        ]
    },
    {
        question: 'When Hiro finishes high school, he wants to study math at a (      ) in Canada.',
        answers: [
            { text: 'station', correct: false },
            { text: 'bridge', correct: false },
            { text: 'hospital', correct: false }, 
            { text: 'college', correct: true }
        ]
    },
    {
        question: 'I like cooking. I watch a cooking (     ) on TV every Wednesday.',
        answers: [
            { text: 'view', correct: false },
            { text: 'member', correct: false },
            { text: 'program', correct: true }, 
            { text: 'way', correct: false }
        ]
    },
    {
        question: 'On Christmas day, there are many letters in our (       ).',
        answers: [
            { text: 'picnic', correct: false },
            { text: 'mailbox', correct: true },
            { text: 'oven', correct: false }, 
            { text: 'concert', correct: false }
        ]
    },
    {
        question: ' My father is a (        ) of a sports club. He plays tennis there every Wednesday night.',
        answers: [
            { text: 'member', correct: true },
            { text: 'festival', correct: false },
            { text: 'picnic', correct: false }, 
            { text: 'group', correct: false }
        ]
    },
    {
        question: 'Mr. Clark told us many interesting (        ) about his trip to India.',
        answers: [
            { text: 'pictures', correct: false },
            { text: 'books', correct: false },
            { text: 'magazines', correct: false }, 
            { text: 'stories', correct: true }
        ]
    },
    {
        question: 'It’s snowing a lot today, so please drive (        ).',
        answers: [
            { text: 'busily', correct: false },
            { text: 'coldly', correct: false },
            { text: 'slowly', correct: true }, 
            { text: 'freely', correct: false }
        ]
    },
    {
        question: 'In spring, Jane likes to walk in her grandmother’s (        ). \nShe enjoys looking at the beautiful flowers there.',
        answers: [
            { text: 'stone', correct: false },
            { text: 'garden', correct: true },
            { text: 'sky', correct: false }, 
            { text: 'wall', correct: false }
        ]
    },
    {
        question: ' Many girls in my class have (        ) hair.',
        answers: [
            { text: 'long', correct: true },
            { text: 'slow', correct: false },
            { text: 'late', correct: false }, 
            { text: 'busy', correct: false }
        ]
    },
    {
        question: ' Many boys in my class have (        ) hair.',
        answers: [
            { text: 'short', correct: true },
            { text: 'slow', correct: false },
            { text: 'late', correct: false }, 
            { text: 'busy', correct: false }
        ]
    },
    {
        question: 'A : Do you live in a city?\nB : No. I live in a small (        ).',
        answers: [
            { text: 'hobby', correct: false },
            { text: 'ticket', correct: false },
            { text: 'holiday', correct: false }, 
            { text: 'town', correct: true }
        ]
    },
    {
        question: 'I (        ) Nancy’s notebook. It was on Mary’s desk.',
        answers: [
            { text: 'stopped', correct: false },
            { text: 'stayed', correct: false },
            { text: 'found', correct: true }, 
            { text: 'went', correct: false }
        ]
    },
    {
        question: 'Dennis went to Japan for a year in August. He was sad when he (        ) goodbye to his family.',
        answers: [
            { text: 'told', correct: false },
            { text: 'said', correct: true },
            { text: 'hoped', correct: false }, 
            { text: 'ended', correct: false }
        ]
    },
    {
        question: 'Jeff left the party at 8:00. He wanted to (        )home early and go to bed.',
        answers: [
            { text: 'get', correct: true },
            { text: 'put', correct: false },
            { text: 'meet', correct: false }, 
            { text: 'send', correct: false }
        ]
    },
    {
        question: 'Mom’s lemon cake is not as good (        ) her chocolate cake.',
        answers: [
            { text: 'to', correct: false },
            { text: 'of', correct: false },
            { text: 'by', correct: false }, 
            { text: 'as', correct: true }
        ]
    },
    {
        question: 'Patrick is very (        ) in art. He draws or paints pictures every day.',
        answers: [
            { text: 'clean', correct: false },
            { text: 'fast', correct: false },
            { text: 'interested', correct: true }, 
            { text: 'healthy', correct: false }
        ]
    },
    {
        question: 'A : Did you enjoy the speech in English? \nB : Yes, but I wasn’t able (        ) understand all of it.',
        answers: [
            { text: 'for', correct: false },
            { text: 'to', correct: true },
            { text: 'on', correct: false }, 
            { text: 'at', correct: false }
        ]
    },
    {
        question: 'When Sachiko was visiting India, she (        ) her camera.',
        answers: [
            { text: 'lost', correct: true },
            { text: 'lose', correct: false },
            { text: 'to lose', correct: false }, 
            { text: 'losing', correct: false }
        ]
    },
    {
        question: 'There (        ) a new swimming pool near our house.',
        answers: [
            { text: 'be', correct: false },
            { text: 'are', correct: false },
            { text: 'does', correct: false }, 
            { text: 'is', correct: true }
        ]
    },
    {
        question: 'A : Enjoy your trip.\nB : Thanks. I (        ) send you a postcard.',
        answers: [
            { text: 'do', correct: false },
            { text: 'am', correct: false },
            { text: 'will', correct: true }, 
            { text: 'are', correct: false }
        ]
    },
    {
        question: 'Boy 1 : Is that your new coat, Tom? (        )\nBoy 2 : Thanks. I like it, too.',
        answers: [
            { text: 'I’ll see you soon.', correct: false },
            { text: ' It’s really nice.', correct: true },
            { text: 'It’s cloudy today.', correct: false }, 
            { text: 'I have one, too.', correct: false }
        ]
    },
    {
        question: 'Mother : You don’t look well, Brad. Are you OK?\nSon : (        ) I didn’t sleep well last night.',
        answers: [
            { text: 'I’m tired.', correct: true },
            { text: 'It’s on TV.', correct: false },
            { text: 'This is for you. ', correct: false }, 
            { text: 'It’s time for dinner.', correct: false }
        ]
    },
    {
        question: 'Man : See you next week, Linda. Have a nice weekend.\nWoman : Thanks, John. (        )',
        answers: [
            { text: 'Just a little.', correct: false },
            { text: 'That’s all.', correct: false },
            { text: 'You’re right.', correct: false }, 
            { text: 'You, too.', correct: true }
        ]
    },
    {
        question: 'Brother : Are these your socks?\nSister : Yes. (        )\nBrother : Under the sofa.',
        answers: [
            { text: 'Did you wear them?', correct: false },
            { text: 'Can you wash them?', correct: false },
            { text: 'Where were they?', correct: true }, 
            { text: 'Whose are they?', correct: false }
        ]
    },
    {
        question: 'Son : When does this TV program finish?\nMother : (        ) Let’s make dinner after that.',
        answers: [
            { text: 'Every Monday night.', correct: false },
            { text: 'In about 10 minutes. ', correct: true },
            { text: 'Two hours ago.', correct: false }, 
            { text: 'Before I went shopping.', correct: false }
        ]
    },
    {
        question: 'A : Did you enjoy the speech in English? \nB : Yes, but I wasn’t able (        ) understand all of it.',
        answers: [
            { text: 'for', correct: false },
            { text: 'to', correct: true },
            { text: 'on', correct: false }, 
            { text: 'at', correct: false }
        ]
    },
    {
        question: 'When Sachiko was visiting India, she (        ) her camera.',
        answers: [
            { text: 'lost', correct: true },
            { text: 'lose', correct: false },
            { text: 'to lose', correct: false }, 
            { text: 'losing', correct: false }
        ]
    },
    {
        question: 'There (        ) a new swimming pool near our house.',
        answers: [
            { text: 'be', correct: false },
            { text: 'are', correct: false },
            { text: 'does', correct: false }, 
            { text: 'is', correct: true }
        ]
    },
    {
        question: 'A : Enjoy your trip.\nB : Thanks. I (        ) send you a postcard.',
        answers: [
            { text: 'do', correct: false },
            { text: 'am', correct: false },
            { text: 'will', correct: true }, 
            { text: 'are', correct: false }
        ]
    },
    {
        question: 'I don’t know this word. I need a ( ).',
        answers: [
            { text: 'chair', correct: false },
            { text: 'dictionary', correct: true },
            { text: 'desk', correct: false }, 
            { text: 'stamp', correct: false }
        ]
    },
    {
        question: 'The movie ( ) at 8:00, but I didn’t get to the theater until 8:20.',
        answers: [
            { text: 'began', correct: true },
            { text: 'met', correct: false },
            { text: 'invited', correct: false }, 
            { text: 'saw', correct: false }
        ]
    },
    {
        question: 'A : Look at that man. He’s a ( ) sumo wrestler.\nB : Wow! He’s big!',
        answers: [
            { text: 'long', correct: false },
            { text: 'left', correct: false },
            { text: 'dry', correct: false }, 
            { text: 'famous', correct: true }
        ]
    },
    {
        question: 'A : Mom, there’s no ( ) in the bathroom. I need to take a shower.\nB : OK. I’ll get some for you.',
        answers: [
            { text: 'store', correct: false },
            { text: 'stop', correct: false },
            { text: 'soap', correct: true }, 
            { text: 'ship', correct: false }
        ]
    },
    {
        question: 'The movie ( ) at 8:00, but I didn’t get to the theater until 8:20.',
        answers: [
            { text: 'began', correct: true },
            { text: 'met', correct: false },
            { text: 'invited', correct: false }, 
            { text: 'saw', correct: false }
        ]
    },
    {
        question: 'A : Look at that man. He’s a ( ) sumo wrestler.\nB : Wow! He’s big!',
        answers: [
            { text: 'long', correct: false },
            { text: 'left', correct: false },
            { text: 'dry', correct: false }, 
            { text: 'famous', correct: true }
        ]
    },
    {
        question: 'A : Mom, there’s no ( ) in the bathroom. I need to take a shower.\nB : OK. I’ll get some for you.',
        answers: [
            { text: 'store', correct: false },
            { text: 'stop', correct: false },
            { text: 'soap', correct: true }, 
            { text: 'ship', correct: false }
        ]
    },
    {
        question: 'A : What do you do in your ( ) time, Ben?\nB : I listen to music.',
        answers: [
            { text: 'good', correct: false },
            { text: 'free', correct: true },
            { text: 'high', correct: false }, 
            { text: 'long', correct: false }
        ]
    },
    {
        question: 'A : How was your fishing trip last weekend, John? Did you ( ) any fish?\nB : Yes! Five big ones.',
        answers: [
            { text: 'catch', correct: true },
            { text: 'arrive', correct: false },
            { text: 'close', correct: false }, 
            { text: 'think', correct: false }
        ]
    },
    {
        question: 'The ( ) was nice yesterday, so we went to the zoo.',
        answers: [
            { text: 'phone', correct: false },
            { text: 'hope', correct: false },
            { text: 'plane', correct: false }, 
            { text: 'weather', correct: true }
        ]
    },
    {
        question: 'Judy calls her friend Emily every weekend. They talk ( ) a long time.',
        answers: [
            { text: 'on', correct: false },
            { text: 'as', correct: false },
            { text: 'for', correct: true }, 
            { text: 'in', correct: false }
        ]
    },
    {
        question: 'A : I practice tennis every day, but I’m not good at it.\nB : Don’t give ( ). You’ll get better.',
        answers: [
            { text: 'of', correct: false },
            { text: 'up', correct: true },
            { text: 'over', correct: false }, 
            { text: 'under', correct: false }
        ]
    },
    {
        question: 'Natsuyo stayed ( ) a host family in Spain last year.',
        answers: [
            { text: 'with', correct: true },
            { text: 'into', correct: false },
            { text: 'from', correct: false }, 
            { text: 'through', correct: false }
        ]
    },
    {
        question: 'Lisa must go ( ) to her hometown because her father is sick.',
        answers: [
            { text: 'fine', correct: false },
            { text: 'little', correct: false },
            { text: 'long', correct: false }, 
            { text: 'back', correct: true }
        ]
    },
    {
        question: ' A : Did you go shopping last Sunday, Judy?\nB : No. I watched a soccer game on TV ( ) home.',
        answers: [
            { text: 'up', correct: false },
            { text: 'down', correct: false },
            { text: 'at', correct: true }, 
            { text: 'on', correct: false }
        ]
    },
    {
        question: 'Last month, Taro’s grandmother ( ) him and his sister to Disneyland.',
        answers: [
            { text: 'take', correct: false },
            { text: 'took', correct: true },
            { text: 'takes', correct: false }, 
            { text: 'taking', correct: false }
        ]
    },
    {
        question: 'A : How did you get to the party?\nB : My father brought ( ) by car.',
        answers: [
            { text: 'me', correct: true },
            { text: 'I', correct: false },
            { text: 'my', correct: false }, 
            { text: 'mine', correct: false }
        ]
    },
    {
        question: 'The students stopped ( ) when the teacher came into the classroom.',
        answers: [
            { text: 'talked', correct: false },
            { text: 'talk', correct: false },
            { text: 'talks', correct: false }, 
            { text: 'talking', correct: true }
        ]
    },
    {
        question: ' Girl : John, why did you go home early yesterday?\nBoy : ( ) but I’m better now.',
        answers: [
            { text: 'I took the train, ', correct: false },
            { text: 'My bus was late,', correct: false },
            { text: 'I had a cold,', correct: true }, 
            { text: 'That’s too bad,', correct: false }
        ]
    },
    {
        question: ' Wife : Do you want some coffee, Jim?\nHusband : ( ) I just had a cup of coffee.',
        answers: [
            { text: 'You’re welcome. ', correct: false },
            { text: 'It’s me. ', correct: false },
            { text: 'No, thanks.', correct: true }, 
            { text: 'No, I didn’t.', correct: false }
        ]
    },
    {
        question: 'Man : Excuse me. I want to go to the CBA Bank. Is it near here?\nWoman : Yes, ( )',
        answers: [
            { text: 'it’s a very nice day today.', correct: false },
            { text: 'it’s on the next corner.', correct: true },
            { text: 'I’m happy to meet you. ', correct: false }, 
            { text: 'I’ll see you then. ', correct: false }
        ]
    },
    {
        question: 'Woman : How was your trip to France?\nMan : ( ) and I met some nice people there.',
        answers: [
            { text: 'It was a lot of fun,', correct: true },
            { text: 'She is my new friend, ', correct: false },
            { text: 'It was too far,', correct: false }, 
            { text: 'I stayed home,', correct: false }
        ]
    },
    {
        question: 'Woman : Are you a science teacher?\nMan : ( ) I love teaching.',
        answers: [
            { text: 'I’m late for school.', correct: false },
            { text: 'Yes, every month.', correct: false },
            { text: 'I have no idea.', correct: false }, 
            { text: 'Yes, that’s right. ', correct: true }
        ]
    },
    {
        question: ' A : I can’t swim, so I want to take ( ).\nB : You should call the city pool. I learned to swim there.',
        answers: [
            { text: 'examples', correct: false },
            { text: 'flowers', correct: false },
            { text: 'lessons', correct: true }, 
            { text: 'minutes', correct: false }
        ]
    },
    {
        question: 'The rain ( ) in the morning, so we went to the park.',
        answers: [
            { text: 'studied', correct: false },
            { text: 'stopped', correct: true },
            { text: 'bought', correct: false }, 
            { text: 'heard', correct: false }
        ]
    },
    {
        question: 'The Internet is very useful for getting ( ) quickly.',
        answers: [
            { text: 'information', correct: true },
            { text: 'subjects', correct: false },
            { text: 'classrooms', correct: false }, 
            { text: 'tape', correct: false }
        ]
    },
    {
        question: 'Karen has some ( ) news. She’s going to move to France.',
        answers: [
            { text: 'each', correct: false },
            { text: 'every', correct: false },
            { text: 'easy', correct: false }, 
            { text: 'exciting', correct: true }
        ]
    },
    {
        question: 'A : Do you want ( ) hamburger, Larry?\nB : No, thanks. I’m full.',
        answers: [
            { text: 'all', correct: false },
            { text: 'same', correct: false },
            { text: 'another', correct: true }, 
            { text: 'few', correct: false }
        ]
    },
    {
        question: 'The city is going to ( ) a new school in my neighborhood.',
        answers: [
            { text: 'become', correct: false },
            { text: 'build', correct: true },
            { text: 'brush', correct: false }, 
            { text: 'bring', correct: false }
        ]
    },
    {
        question: 'Mr. Roberts is always busy, but he ( ) his e-mail every morning.',
        answers: [
            { text: 'checks', correct: true },
            { text: 'calls', correct: false },
            { text: 'changes', correct: false }, 
            { text: 'closes', correct: false }
        ]
    },
    {
        question: 'A : Do you often visit your grandfather?\nB : No, but we speak to each ( ) every weekend.',
        answers: [
            { text: 'many', correct: false },
            { text: 'next', correct: false },
            { text: 'some', correct: false }, 
            { text: 'other', correct: true }
        ]
    },
    {
        question: 'I can talk ( ) everything with my mom, so she’s my best friend.',
        answers: [
            { text: 'near', correct: false },
            { text: 'under', correct: false },
            { text: 'about', correct: true }, 
            { text: 'after', correct: false }
        ]
    },
    {
        question: 'Kyoko always ( ) up early in the morning. She makes her lunch before she goes to work.',
        answers: [
            { text: 'catches', correct: false },
            { text: 'wakes', correct: true },
            { text: 'forgets', correct: false }, 
            { text: 'keeps', correct: false }
        ]
    },
    {
        question: 'My parents both work, so they aren’t at home ( ) the day.',
        answers: [
            { text: 'during', correct: true },
            { text: 'against', correct: false },
            { text: 'before', correct: false }, 
            { text: 'down', correct: false }
        ]
    },
    {
        question: 'Each year, more ( ) more people travel to Japan to enjoy sightseeing and shopping.',
        answers: [
            { text: 'than', correct: false },
            { text: 'but', correct: false },
            { text: 'or', correct: false }, 
            { text: 'and', correct: true }
        ]
    },
    {
        question: 'The students ( ) 50 meters in the school pool yesterday.',
        answers: [
            { text: 'swim', correct: false },
            { text: 'swimming', correct: false },
            { text: 'swam', correct: true }, 
            { text: 'to swim', correct: false }
        ]
    },
    {
        question: 'Mike likes comic books. He reads ( ) every day.',
        answers: [
            { text: 'it', correct: false },
            { text: 'them', correct: true },
            { text: 'me', correct: false }, 
            { text: 'him', correct: false }
        ]
    },
    {
        question: 'A : I forgot my pencil. ( ) I use yours, Mark?\nB : Yes. Here you are.',
        answers: [
            { text: 'Could', correct: true },
            { text: 'Have', correct: false },
            { text: 'Are', correct: false }, 
            { text: 'Was', correct: false }
        ]
    },
    {
        question: 'Boy 1 : That’s a beautiful guitar. ( )\nBoy 2 : It’s my father’s. He bought it last year.',
        answers: [
            { text: 'When was it?', correct: false },
            { text: 'How is he?', correct: false },
            { text: 'Where did he go?', correct: false }, 
            { text: 'Whose is it?', correct: true }
        ]
    },
    {
        question: 'Boy : Did you bring your soccer ball?\nGirl : ( ) but I’ll bring it tomorrow.',
        answers: [
            { text: 'Wait a minute, ', correct: false },
            { text: 'I like P.E.,', correct: false },
            { text: 'Not today, ', correct: true }, 
            { text: 'You played well,', correct: false }
        ]
    },
    {
        question: 'Daughter : Dad, I can’t find my social studies textbook.\nFather : ( )\nDaughter : Thanks.',
        answers: [
            { text: 'It’s a difficult subject.', correct: false },
            { text: 'It’s on the kitchen table.', correct: true },
            { text: 'It was very interesting.', correct: false }, 
            { text: 'It’s for your brother.', correct: false }
        ]
    },
    {
        question: 'Girl 1 : I had a great time at your party tonight, Lucy!\nGirl 2 : ( ) See you!',
        answers: [
            { text: 'Thanks for coming.', correct: true },
            { text: 'I’ll be there soon. ', correct: false },
            { text: 'It was delicious.', correct: false }, 
            { text: 'I’ll try this one.', correct: false }
        ]
    },
    {
        question: 'Girl 1 : I’m going to open the window.\nGirl 2 : ( ) It’s really hot in here.',
        answers: [
            { text: 'That’s a great idea.', correct: true },
            { text: 'I’ll take it.', correct: false },
            { text: 'That’s our classroom.', correct: false }, 
            { text: 'I have one, too. ', correct: false }
        ]
    },
]

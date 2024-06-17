let currentQuestionIndex = 0;
let correctAnswers = 0;
const quizBox = document.getElementById('quiz-box');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextQ = document.getElementById('next-btn');
const finishQ = document.getElementById('finish-btn');
const scoreQ = document.getElementById('scoreQ');
let typeQ;

function startQuiz(type) {
    typeQ = type;
    if(typeQ == 'LagoNia')
        questions = questionhxh;
    else
        questions = questionbasket;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showQuestion();
    nextQ.addEventListener('click', nextQuestion);
    finishQ.addEventListener('click', finishQuiz);
    
    if (currentQuestionIndex == questions.length - 1) {
        nextQ.style.visibility = 'hidden';
        finishQ.disabled = true;
    } else {
        finishQ.style.visibility = 'hidden';
        nextQ.disabled = true;
    }
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    let n = 1;

    for (const key in currentQuestion.answers) {
        const answerText = currentQuestion.answers[key];
        const button = document.createElement('button');
        button.classList.add('ans' + n);
        button.textContent = answerText;
        button.addEventListener('click', () => checkAnswer(key));
        answersElement.appendChild(button);
        n++;
    }

    if (currentQuestionIndex == questions.length - 1) {
        nextQ.style.visibility = 'hidden';
        finishQ.style.visibility = 'visible';
        finishQ.disabled = true;
    } else {
        nextQ.style.visibility = 'visible';
        finishQ.style.visibility = 'hidden';
        nextQ.disabled = true;
    }
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    if (selectedAnswer === correctAnswer) {
        event.target.classList.add('correct');
        correctAnswers++;
    } else {
        event.target.classList.add('incorrect');
    }

    disableButtons();
}

function disableButtons() {
    const buttons = answersElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
        if (!button.classList.contains('correct') && !button.classList.contains('incorrect')) {
            button.style.opacity = 0.5;
        }
    });
    if (currentQuestionIndex == questions.length - 1) {
        finishQ.disabled = false;
    } else {
        nextQ.disabled = false;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        finishQ.style.display = 'block';
        nextQ.style.display = 'none';
        scoreQ.style.display = 'block';
    }
}

function finishQuiz() {
    if (typeQ == 'LagoNia') {
        if (correctAnswers >= 7) {
            startDialogue("LagoNiaWin");
            setQuiz('hidden');
        } else {
            startDialogue("LagoNiaLose");
        }
    } else {
        if (correctAnswers >= 7) {
            startDialogue("NegozioScarpeWin");
            setQuiz('hidden');
        } else {
            startDialogue("NegozioScarpeLose");
        }
    }
}
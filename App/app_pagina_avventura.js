var backButton = document.getElementById("backButton");

/* Map */
var map = document.getElementById('map');
var mapElements = ['showHouse', 'showLagoNia', 'showBoscoPasketta', 'showGragussySleeping', 'showNegozioScarpe', 'showCampoBasket', 'showSalon', 'showMonteMostro']

/* Ambient */
var ambient = document.getElementById('ambient');
var previousAmbient = "";
var animation = document.getElementById('animation');

/*Quiz LagoNia */
var quiz = document.getElementById('quiz-box');

/* Tris Bosco Pasketta */
var tris = document.getElementById('tris');

/* Basket */
var basketBack = document.getElementById('basketBack');
var basketball = document.getElementById('basketball');
var basketTop = document.getElementById('basketTop');
var scoreElement = document.getElementById('score');

/* Salon */
var bottoneSalon = document.getElementById('bottoneSalon');
var minigiocoBibik = document.getElementById('minigiocoBibik');
minigiocoBibik.addEventListener('click', startGame);
var nextButton = document.getElementById('nextButton');
var wrapper = document.getElementById('wrapper');

const typingText = document.querySelector(".typing-text p"),
      inpField = document.querySelector(".input-field"),
      tryAgainBtn = document.querySelector(".content button"),
      timeTag = document.querySelector(".time span b"),
      mistakeTag = document.querySelector(".mistake span"),
      wpmTag = document.querySelector(".wpm span"),
      cpmTag = document.querySelector(".cpm span");

let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

const paragraphs = [
    "Non pensi che qualcuno si possa offendendere leggendo i tuoi messaggi? Gli stai dando dell'incapace solo perchè non ha una singola arma. ", 
    "Solo per un misero 16%, che da quella staffa. A fronte delle cure di arcanisti che ad Elsweyr non c'erano.",
    "Chi siamo noi per spegnere un entusiasmo del genere?",
    "Io non tratto set, io tratto le mani delle persone.",
    "Questa è la build del Sorcerer Magicka No Pet aggiornata ad Elsweyr da parte di @iTzCillo: Razza: Elfo Alto (Consigliata)."
];

/* Score */
var score;

/* Imposta l'ambiente richiesto */
function setAmbient(idAmbient) {
    var changeTo = "Immagini/Ambients/" + idAmbient + "Ambient.png";
    ambient.src = changeTo;
    backButton.style.visibility = 'visible';

    if(idAmbient == 'CampoBasket') {
        setBasket('visible');
    }

    previousAmbient = idAmbient;
    setMap('hidden');
    startDialogue(idAmbient);

    console.log("Changed ambient to: " + changeTo);
}

/* Torna alla mappa */
function setBackAmbient() {
    ambient.src = "";
    backButton.style.visibility = 'hidden';

    if(previousAmbient == 'LagoNia' || previousAmbient == 'NegozioScarpe') {
        setQuiz('hidden');
    }

    if(previousAmbient == 'BoscoPasketta') {
        setBosco('hidden');
    }

    if(previousAmbient == 'CampoBasket') {
        setBasket('hidden');
        setBasketball('hidden');
        scoreElement.style.visibility = 'hidden';
    }

    if(previousAmbient == 'Salon') {
        setSalon('hidden');
        stopGame();
    }

    setMap('visible');

    startDialogue("Map");

    console.log("Reset ambient");
}

/* Imposta lo stato della mappa (visible/invisibile) */
function setMap(status) {
    map.style.visibility = status;
    var current;

    for (let i = 0; i < mapElements.length; i++) {
        current = document.getElementById(mapElements[i]);
        current.style.visibility = status;
    }
}

function setQuiz(status) {
    quiz.style.visibility = status;
    nextQ.style.visibility = status;
    finishQ.style.visibility = 'hidden';
}

function setBosco(status) {
    tris.style.visibility = status;
}

/* Imposta lo stato del basket (visibile/invisibile) */
function setBasket(status) {
    basketTop.style.visibility = status;
    basketBack.style.visibility = status;
}

function setBasketball(status) {
    basketball.style.visibility = status;
}

/* Imposta lo stato del Salon (visibile/invisibile) */
function setSalon(status) {
    bottoneSalon.style.visibility = status;
    minigiocoBibik.style.visibility = status;
}

/* Minigioco Salon */
function startGame() {
    wrapper.style.visibility = 'visible';
    setSalon('hidden');
    resetGame();
    inpField.addEventListener("input", initTyping);
    tryAgainBtn.addEventListener("click", resetGame);
    loadParagraph();
}

function stopGame() {
    wrapper.style.visibility = 'hidden';
    startDialogue("SalonWin");
}

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];

    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
        } else {
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / ((maxTime - timeLeft) / 60));
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    inpField.value = "";
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    timeTag.innerText = timeLeft;
    mistakeTag.innerText = mistakes;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
}

/* Gestione score */
function setScore() {
    score = 0;
}

function showScore() {
    scoreElement.textContent = "Punteggio: " + score;
}

function addScore() {
    score++;
    scoreElement.textContent = "Punteggio: " + score;
}

/* Imposta animazione */
function setAnimation(animationValue, watchTime) {
    var animationSrc = "Immagini/" + animationValue + ".gif";
    
    setTimeout(function() {
        animation.src = "";
        setBasket('visible');
        setBasketball('visible');
        backButton.style.visibility = 'visible';
    }, watchTime);

    setBasket('hidden');
    setBasketball('hidden');
    backButton.style.visibility = 'hidden';
    animation.src = animationSrc;
    
    console.log("Changed animation to: " + animationSrc);
}

/* Lancio palla da basket */
function shootBall() {

    //var randomAnimation = 0;
    var randomAnimation = Math.floor(Math.random() * 3); // Genera un numero casuale da 0 a 3

    switch (randomAnimation) {
        case 0:
            // Animazione 1: Canestro
            setAnimation("Basket/Canestro", 3600);
            addScore();
            break;
        case 1:
            // Animazione 2: Canestro verso sinistra
            setAnimation("Basket/MissCanestroSX", 2600);
            break;
        case 2:
            // Animazione 3: Canestro verso destra
            setAnimation("Basket/MissCanestroDX", 2600);
            break; 
        default:
            break;
    }

    // Vittoria
    setTimeout (function() {
        if (score == 5) {
            startDialogue("CampoBasketWin");
            setBasketball('hidden');
            scoreElement.style.visibility = 'hidden';
        }
    }, 4500);

}

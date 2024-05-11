var backButton = document.getElementById("backButton");

/* Map */
var map = document.getElementById('map');
var mapElements = ['showHouse', 'showLagoNia', 'showBoscoPasketta', 'showGragussySleeping', 'showCampoBasket', 'showNegozioScarpe', 'showSalon', 'showMonteMostro']

/* Ambient */
var ambient = document.getElementById('ambient');
var previousAmbient = "";
var animation = document.getElementById('animation');

/* Basket */
var basketBack = document.getElementById('basketBack');
var basketball = document.getElementById('basketball');
var basketTop = document.getElementById('basketTop');
var scoreElement = document.getElementById('score');

/* Shooter */
var shooterCans = ['can1', 'can2', 'can3', 'can4', 'can5', 'can6'];
var shooterHand = document.getElementById('hand');

/* Score */
var score;

/* Textbox */
var textbox = document.getElementById('textBox');

/* Imposta l'ambiente richiesto */
function setAmbient(idAmbient) {
    var changeTo = "Immagini/Ambients/" + idAmbient + "Ambient.png";
    ambient.src = changeTo;
    backButton.style.visibility = 'visible';

    if(idAmbient == 'CampoBasket') {
        setScore();
        setBasket('visible');
    }

    if(idAmbient == 'Salon') {
        setScore();
        setShooter('visible');
    }

    previousAmbient = idAmbient;

    setMap('hidden');

    console.log("Changed ambient to: " + changeTo);
}

/* Torna alla mappa */
function setBackAmbient() {
    ambient.src = "";
    backButton.style.visibility = 'hidden';

    if(previousAmbient == 'CampoBasket') {
        setBasket('hidden');
    }

    if(previousAmbient == 'Salon') {
        setShooter('hidden');
    }

    setMap('visible');

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

/* Imposta lo stato del basket (visibile/invisibile) */
function setBasket(status) {
    basketTop.style.visibility = status;
    basketball.style.visibility = status;
    basketBack.style.visibility = status;
    showScore();
    scoreElement.style.visibility = status;
}

/* Imposta lo stato dello shooter (visibile/invisibile) */
function setShooter(status) {
    for (let i = 0; i < shooterCans.length; i++) {
        current = document.getElementById(shooterCans[i]);
        current.style.visibility = status;
    }
    shooterHand.style.visibility = status;
    showScore();
    scoreElement.style.visibility = status;
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
        backButton.style.visibility = 'visible';
    }, watchTime);

    setBasket('hidden');
    backButton.style.visibility = 'hidden';
    animation.src = animationSrc;
    
    console.log("Changed animation to: " + animationSrc);
}

/* Lancio palla da basket */
function shootBall() {
    var ball = document.getElementById('basketball');

    //var randomAnimation = 2;
    var randomAnimation = Math.floor(Math.random() * 3); // Genera un numero casuale da 0 a 3

    switch (randomAnimation) {
        case 0:
            // Animazione 1: Canestro
            setAnimation("Basket/Canestro", 4000);
            addScore();
            break;
        case 1:
            // Animazione 2: Canestro verso sinistra
            setAnimation("Basket/MissCanestroSX", 3300);
            break;
        case 2:
            // Animazione 3: Canestro verso destra
            setAnimation("Basket/MissCanestroDX", 3300);
            break; 
        default:
            break;
    }

    // Vittoria
    setTimeout (function() {
        if (score == 5) {
            alert("Congratulazioni!");
        }
    }, 4500);

}

/* Modifica testo della box */
function changeText(content) {
    textbox.textContent = content;
}

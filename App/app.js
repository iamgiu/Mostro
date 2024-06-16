// Imposta la data del compleanno
const birthday = new Date("2024-06-18T00:00:00");

// Ottieni gli elementi del DOM
const titolo = document.getElementById("titolo");
const startGameButton = document.getElementById("startGame");
const countdownElement = document.getElementById("countdown");

// Nascondi il pulsante di avvio all'inizio
startGameButton.style.display = "none";

// Funzione per aggiornare il countdown
function updateCountdown() {
    const currentDate = new Date();
    const difference = birthday - currentDate;

    if (difference <= 0) {
        // Se il countdown è finito, mostra il pulsante e nascondi il countdown
        startGameButton.style.display = "block";
        countdownElement.style.display = "none";

        // Aggiorna il testo del titolo
        titolo.textContent = titolo.textContent.replace('TOCCA ASPETTARE', 'CI SIAMO');
        return;
    }

    const secondsLeft = Math.floor(difference / 1000);
    const daysLeft = Math.floor(secondsLeft / (60 * 60 * 24));
    const hoursLeft = Math.floor((secondsLeft % (60 * 60 * 24)) / (60 * 60));
    const minutesLeft = Math.floor((secondsLeft % (60 * 60)) / 60);
    const secondsRemaining = secondsLeft % 60;

    // Aggiorna il testo del countdown
    countdownElement.textContent = `Tempo rimanente ${daysLeft} : ${hoursLeft} : ${minutesLeft} : ${secondsRemaining}`;
}

// Aggiorna il countdown ogni secondo
setInterval(updateCountdown, 1000);

// Azione del bottone per avviare l'avventura grafica
document.getElementById("startGame").addEventListener("click", function() {
    // Reindirizzamento alla pagina dell'avventura grafica
    window.location.href = "pagina_avventura.html";
});

function PlayMusic() {
    var play=document.getElementById("music");
    play.play();
}

$(document).ready(function(){
setTimeout(PlayMusic,3000);
})

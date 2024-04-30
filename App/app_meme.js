// Setta la data del compleanno
const birthday = new Date("2024-05-01 00:00");
const titolo = document.getElementById("titolo");

document.getElementById("startGame").style.display = "none";

// Funzione per aggiornare il countdown
function updateCountdown() {
    const currentDate = new Date();
    const difference = birthday - currentDate;

    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Aggiorna il testo del countdown
    document.getElementById("countdown").textContent = `Giorni rimanenti: ${daysLeft}`;

    // Abilita il bottone se il countdown è finito
    if (daysLeft <= 0) {
        document.getElementById("startGame").style.display = "block";
        document.getElementById("countdown").style.display = "none";
        // Ottieni il testo all'interno dell'elemento h1
        var originalText = titolo.textContent;

        // Sostituisci le parole desiderate
        var modifiedText = originalText.replace('TOCCA ASPETTARE', 'EH VOLEVI');

        // Assegna il nuovo testo all'elemento h1
        titolo.textContent = modifiedText;
    }
}

// Aggiorna il countdown ogni secondo
setInterval(updateCountdown, 1000);

// Azione del bottone per avviare l'avventura grafica
document.getElementById("startGame").addEventListener("click", function() {
    // Reindirizzamento alla pagina dell'avventura grafica
    window.location.href = "volevi.html";
});

function PlayMusic() {
    var play=document.getElementById("music");
    play.play();
}

$(document).ready(function(){
setTimeout(PlayMusic,3000);
})

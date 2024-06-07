let currentDialogueIndex = 0;

/* Textbox */
var textBox = document.getElementById('textP');

/* Icon */
var pgIcon = document.getElementById('pgIcon');

/* Modifica testo della box */
function changeText(content) {
    textBox.textContent = content;
}

/* Modifica icona */
function changeIcon(icon) {
    var changeTo = "Immagini/Characters/" + icon + ".png";
    pgIcon.src = changeTo;
}

function displayDialogue(dialogue) {
    changeText(`${dialogue.character}: ${dialogue.text}`);
    changeIcon(dialogue.character);
}

function startDialogue(place) {
    let dialogues;

    if (place === 'House') {
        dialogues = dialoguesHouse;
    } else if (place === 'LagoNia') {
        dialogues = dialoguesLagoNia;
    } else if (place === 'BoscoPasketta') {
        dialogues = dialoguesBoscoPasketta;
    }

    if (dialogues) {
        currentDialogueIndex = 0;
        nextButton.disabled = false;
        nextButton.innerText = "Avanti";
        displayDialogue(dialogues[currentDialogueIndex]);

        // Rimuovi eventuali listener precedenti
        nextButton.removeEventListener("click", nextDialogue);

        // Aggiungi un nuovo listener
        nextButton.addEventListener("click", nextDialogue.bind(null, dialogues));

        function nextDialogue() {
            if (currentDialogueIndex < dialogues.length - 1) {
                currentDialogueIndex++;
                displayDialogue(dialogues[currentDialogueIndex]);
            } else {
                nextButton.disabled = true;
                nextButton.innerText = "Fine";
            }
        }
    }
}

/*function startDialogue(place) {
    if (place === 'House') {
        currentDialogueIndex = 0;
        nextButton.disabled = false;
        nextButton.innerText = "Avanti";
        displayDialogue(dialoguesHouse[currentDialogueIndex]);

        nextButton.addEventListener("click", () => {
            const dialogues = dialoguesHouse;
            if (currentDialogueIndex < dialogues.length - 1) {
                currentDialogueIndex++;
                displayDialogue(dialogues[currentDialogueIndex]);
            } else {
                nextButton.disabled = true;
                nextButton.innerText = "Fine";
            }
        });
    }

    if (place === 'LagoNia') {
        currentDialogueIndex = 0;
        nextButton.disabled = false;
        nextButton.innerText = "Avanti";
        displayDialogue(dialoguesLagoNia[currentDialogueIndex]);

        nextButton.addEventListener("click", () => {
            const dialogues = dialoguesLagoNia;
            if (currentDialogueIndex < dialogues.length - 1) {
                currentDialogueIndex++;
                displayDialogue(dialogues[currentDialogueIndex]);
            } else {
                nextButton.disabled = true;
                nextButton.innerText = "Fine";
            }
        });

        const LagoNiaWin = dialoguesLagoNiaWin;
        const LagoNiaLose = dialoguesLagoNiaLose;

        
    }

    if (place === 'BoscoPasketta') {
        currentDialogueIndex = 0;
        nextButton.disabled = false;
        nextButton.innerText = "Avanti";
        displayDialogue(dialoguesLagoNia[currentDialogueIndex]);

        nextButton.addEventListener("click", () => {
            const dialogues = dialoguesBoscoPasketta;
            if (currentDialogueIndex < dialogues.length - 1) {
                currentDialogueIndex++;
                displayDialogue(dialogues[currentDialogueIndex]);
            } else {
                nextButton.disabled = true;
                nextButton.innerText = "Fine";
            }
        });
    }
} */

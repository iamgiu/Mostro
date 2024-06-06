const dialoguesHouse = [
    {
        character: "Narratore",
        text: "Nel chiarore fioco dell'alba, il protagonista si sveglia lentamente dal suo sonno profondo, la mente annebbiata da un torpore che si dissolve gradualmente. Le palpebre pesanti si aprono con fatica, rivelando una stanza avvolta nell'oscurità. Il suono leggero del vento che sussurra tra le fessure delle finestre crea un'atmosfera silenziosa e misteriosa, mentre la figura di un'elfa immortale giace vicino al fuoco che arde fioco nell'angolo della stanza."
    },
    {
        character: "Frieren",
        text: "Salve, viandante. È giunto il momento di risvegliarsi."
    },
    {
        character: "Narratore",
        text: "Le parole della misteriosa figura risuonano dolcemente nell'aria, come un richiamo lontano. Con uno sbadiglio sbadigliato, il protagonista si solleva lentamente dal letto, gli occhi ancora annebbiati dalla stanchezza del sonno."
    },
    {
        character: "Cillo",
        text: "Dove... Dove sono? Chi... Chi sei tu?"
    },
    {
        character: "Frieren",
        text: "Sei in un luogo al di là del mondo con cui sei familiare, viandante. Ma non temere, perché qui inizia il tuo viaggio verso il destino che ti attende. Io sono Frieren, un'elfa immortale che ha visto molte ere passare in questo mondo. Ma non siamo qui per parlare di me. Tu sei qui per un motivo speciale, anche se forse non lo sai ancora."
    },
    {
        character: "Cillo",
        text: "Cosa intendi?"
    },
    {
        character: "Frieren",
        text: "Il tuo destino è legato a una montagna che si erge nella distanza, il Monte Mostro. Lì troverai ciò che cerco, un libro di magie. È il tuo compito raggiungerlo, ma sappi che il viaggio sarà pericoloso e pieno di sfide."
    },
    {
        character: "Cillo",
        text: "Monte Mostro? Perchè devo farlo io?"
    },
    {
        character: "Frieren",
        text: "Mani! Scusa, ho avuto un attimo di riflesso. Viandante, il tuo ruolo in questa avventura è più cruciale di quanto tu possa immaginare. Il libro di magie custodito nel Monte Mostro è un artefatto di inestimabile potere, ma le sue pagine non racchiudono solo incantesimi. Esse contengono il segreto di una magia antica, una magia che solo io posso evocare."
    },
    {
        character: "Cillo",
        text: "Quindi... il libro è per te?"
    },
    {
        character: "Frieren",
        text: "Esattamente. Mi servirà per compiere un incantesimo che risveglierà un potere dormiente, un potere che può salvare questo mondo dall'oscurità che lo minaccia. Ma il cammino verso il Monte Mostro è pericoloso, e solo un cuore coraggioso come il tuo può sperare di compierlo con successo."
    },
    {
        character: "Cillo",
        text: "Capisco. E cosa otterrò una volta che avrò trovato il libro?"
    },
    {
        character: "Frieren",
        text: "Quando riporterai il libro di magie, ti prometto una ricompensa degna del tuo coraggio. Potrà essere un dono prezioso o una conoscenza che ti servirà nei tuoi futuri viaggi. La scelta sarà tua, ma ti assicuro che non rimarrai deluso."
    },
    {
        character: "Cillo",
        text: "Mi metterò in cammino, grazie Frieren."
    },
    {
        character: "Frieren",
        text: "Che il vento sia alle tue spalle e la fortuna ti sorrida, viandante. Il Monte Mostro ti attende e, con esso, il tuo destino. Buon viaggio."
    }
];

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
    if (place === 'House') {
        currentDialogueIndex = 0;
        nextButton.disabled = false;
        nextButton.innerText = "Avanti";
        displayDialogue(dialoguesHouse[currentDialogueIndex]);
    }
}

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
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

let currentIndexes = {
  "Start": 0,
  "Map": 0,
  "House": 0,
  "LagoNia": 0,
  "BoscoPasketta": 0,
  "CampoBasket": 0,
  "CampoBasketWin": 0
};

let dialogues;
let place;
  
function startDialogue(placeDialogue) {
  place = placeDialogue;

  switch(place) {
    case 'Start':
      dialogues = dialoguesStart;
      displayDialogue(dialogues[currentIndexes[place]]);
      return;
    case 'Map':
      dialogues = dialoguesMap;
      displayDialogue(dialogues[currentIndexes[place]]);
      nextButton.style.visibility = "hidden";
      return;
    case 'House':    
      dialogues = dialoguesHouse;
      break;
    case 'LagoNia':
      dialogues = dialoguesLagoNia;
      break;
    case 'BoscoPasketta':
      dialogues = dialoguesBoscoPasketta;
      break;
    case 'CampoBasket':
      dialogues = dialoguesCampoBasket;
      break;
    case 'CampoBasketWin':
      dialogues = dialoguesCampoBasketWin;
      break;
  }
  
  if (dialogues && currentIndexes[place] < dialogues.length) {
    nextButton.style.visibility = "visible";
    if(dialogues.length == 1)
      setNextButton("Fine");
    else 
      setNextButton("Avanti");
    displayDialogue(dialogues[currentIndexes[place]]);
  }
}

function endDialogue() {
  changeText("");
  changeIcon("Narratore");

  if(place == "CampoBasket") {
    if(currentIndexes[place] == dialogues.length) {
      setScore();
      showScore();
      scoreElement.style.visibility = 'visible';
      basketball.style.visibility = 'visible';
    }
  }
}

function handleNext() {
  nextDialogue(dialogues, place);
}

function setNextButton(msg) {
  nextButton.innerText = msg;
}

function nextDialogue(dialogues, place) {
  currentIndexes[place]++; // Incrementa l'indice qui
  if (currentIndexes[place] < dialogues.length) {
    displayDialogue(dialogues[currentIndexes[place]]);
  }

  if(nextButton.innerHTML === "Fine") {
    nextButton.style.visibility = "hidden";
    endDialogue();
  }

  if (currentIndexes[place] == dialogues.length - 1) {
    setNextButton("Fine");
  }

}

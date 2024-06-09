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
  "BoscoPaskettaWin": 0,
  "BoscoPaskettaLose": 0,
  "GragussySleeping": 0,
  "NegozioScarpe": 0,
  "NegozioScarpeWin": 0,
  "NegozioScarpeLose":0,
  "CampoBasket": 0,
  "CampoBasketWin": 0,
  "GragussyWake":0,
  "Salon":0,
  "SalonWin":0,
  "MonteMostro":0,
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
    case 'BoscoPaskettaWin':
      dialogues = dialoguesBoscoPaskettaWin;
      break;
    case 'BoscoPaskettaLose':
      dialogues = dialoguesBoscoPaskettaLose;
      break;
    case 'GragussySleeping':
      dialogues = dialoguesGragussy;
      break;
    case 'NegozioScarpe':
      dialogues = dialoguesNegozioScarpe;
      break;
    case 'NegozioScarpeWin':
      dialogues = dialoguesNegozioScarpeWin;
      break;
    case 'NegozioScarpeLose':
      dialogues = dialoguesNegozioScarpeLose;
      break;
    case 'CampoBasket':
      dialogues = dialoguesCampoBasket;
      break;
    case 'CampoBasketWin':
      dialogues = dialoguesCampoBasketWin;
      break;
    case 'GragussyWake':
      dialogues = dialoguesGragussyWake;
      break;
    case 'Salon':
      dialogues = dialoguesSalon;
      break;
    case 'SalonWin':
      dialogues = dialoguesSalonWin;
      break;
    case 'MonteMostro':
      dialogues = dialoguesMonteMostro;
      break;
  }
  
  if (dialogues && currentIndexes[place] < dialogues.length) {
    nextButton.style.visibility = "visible";
    if(dialogues.length == currentIndexes[place]+1)
      setNextButton("Fine");
    else 
      setNextButton("Avanti");
    displayDialogue(dialogues[currentIndexes[place]]);
  }
}

function setMapInnerHTML(n, scene, sceneText) {
  document.getElementById(mapElements[n]).innerHTML = '<img class="imageOn" src="Immagini/Places/' + scene +'.png"><img class="imageOff" src="Immagini/Places/' + scene + 'Selected.png" onclick="setAmbient(\'' + scene + '\')"><span class="imageOff">' + sceneText + '</span>';
}

function endDialogue() {
  changeText("Cosa aspetti ad andare avanti?");
  changeIcon("Narratore");

  switch(place) {
    case 'House':
      setMapInnerHTML(1, "LagoNia", "Lago Nia");
      break;
    case 'LagoNia':
      setMapInnerHTML(2, "BoscoPasketta", "Bosco Pasketta");
      generateQuiz("LagoNia", questions, quizContainer, resultsContainer, submitButton);
      break;
    case 'BoscoPasketta':
      if(currentIndexes[place] == dialogues.length) {
        tris.style.visibility = 'visible';
      }
      break;
    case 'BoscoPaskettaWin':
      setMapInnerHTML(3, "GragussySleeping", "Gragussy");
      break;
    case 'BoscoPaskettaLose':
      if(currentIndexes[place] == dialogues.length) {
        tris.style.visibility = 'visible';
      }
      currentIndexes[place] = 0;
      break;
    case 'GragussySleeping':
      setMapInnerHTML(4, "NegozioScarpe", "Negozio di Shuba");
      document.getElementById(mapElements[3]).innerHTML = '<img class="imageUnavailable" src="Immagini/Places/GragussyWakeUnavailable.png">'; 
      break;
    case 'NegozioScarpe':
      generateQuiz("NegozioScarpe", questions, quizContainer, resultsContainer, submitButton);
      break;
    case 'NegozioScarpeWin':
      setMapInnerHTML(5, "CampoBasket", "Campo Basket");  
      break;
    case 'CampoBasket':
      if(currentIndexes[place] == dialogues.length) {
        setScore();
        showScore();
        scoreElement.style.visibility = 'visible';
        basketball.style.visibility = 'visible';
      }
      break;
    case 'CampoBasketWin':
      setMapInnerHTML(3, "GragussyWake", "Gragussy");
      break;
    case 'GragussyWake':
      setMapInnerHTML(6, "Salon", "Salon");
    break;
    case 'Salon':
      if(currentIndexes[place] == dialogues.length) {
        bottoneSalon.style.visibility = 'visible';
        minigiocoBibik.style.visibility = 'visible';
      }
      break;
    case 'SalonWin':
      setMapInnerHTML(7, "MonteMostro", "Monte Mostro");
      break;
    case 'MonteMostro':
      window.open('titoli_di_coda.html', "_self");
      break;
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

startDialogue("Start");
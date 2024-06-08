//variabili del gioco
const xchar = "✖";
const ochar = "〇";
var giocatore = xchar;
var schema = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

//funzione per eseguire e mostrare la scelta del giocatore e passare alla prossima
function mossa(x, y) {
  if (schema[x][y] === '') {
    schema[x][y] = giocatore;
    let cell = document.getElementsByTagName('td')[x * 3 + y];
    cell.innerText = giocatore;

   // controlla se uno dei 2 giocatori ha vinto
    if (haiVinto() && giocatore == xchar) {
        startDialogue("BoscoPaskettaWin");
        setBosco('hidden');
        resetGioco();
   // controlla se ci sono movimenti disponibili o il gioco è terminato con pareggio
    } else if ((haiVinto() && giocatore == ochar) || pareggio()) {
        startDialogue("BoscoPaskettaLose");
        setBosco('hidden');
        resetGioco();
    } else {
   // cambia il giocatore da X -> O e viceversa
      giocatore = giocatore === xchar ? ochar : xchar;
    }
  }

    if (giocatore === ochar) {
        let newX;
        let newY;
        do {
            newX = Math.floor(Math.random()*3);
            newY = Math.floor(Math.random()*3);
        } while (schema[newX][newY] != '');

        mossa(newX, newY);
    }
}

//funzione di controllo per verificare la vittoria di uno dei 2 giocatori
function haiVinto() {
  for (let i = 0; i < 3; i++) {
    if (
      (schema[i][0] !== '' && schema[i][0] === schema[i][1] && schema[i][0] === schema[i][2]) ||
      (schema[0][i] !== '' && schema[0][i] === schema[1][i] && schema[0][i] === schema[2][i])
    ) {
      return true;
    }
  }
  if (
    (schema[0][0] !== '' && schema[0][0] === schema[1][1] && schema[0][0] === schema[2][2]) ||
    (schema[0][2] !== '' && schema[0][2] === schema[1][1] && schema[0][2] === schema[2][0])
  ) {
    return true;
  }
  return false;
}

// controlla se i giocatori hanno pareggiato 
function pareggio() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (schema[row][col] === '') {
        return false;
      }
    }
  }
  return true;
}

// funzione per il reset del gioco
function resetGioco() {
  schema = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  giocatore = xchar;
  let cells = document.getElementsByTagName('td');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
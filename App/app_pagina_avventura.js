const id = [];
var backButton = document.getElementById("backButton");

// rende immagine visibile 
function setImageVisible(idImg) {
    var img = document.getElementById(idImg);
    img.style.visibility = 'visible';
    backButton.style.visibility = 'visible';

    if(idImg == 'ambientCampoBasket') {
        var basketTop = document.getElementById('basketTop');
        basketTop.style.visibility = 'visible';
        var basketBack = document.getElementById('basketBack');
        basketBack.style.visibility = 'visible';
        var basketball = document.getElementById('basketball');
        basketball.style.visibility = 'visible';
    }

    id.push(idImg);
}

// rende invisibile l'immagine precedentemente resa visibile
function setImageInvisible() {
    var pos = id.length - 1;
    var img = document.getElementById(id[pos]);
    img.style.visibility = 'hidden';

    if(id[pos] == 'ambientCampoBasket') {
        var basketTop = document.getElementById('basketTop');
        basketTop.style.visibility = 'hidden';
        var basketBack = document.getElementById('basketBack');
        basketBack.style.visibility = 'hidden';
        var basketball = document.getElementById('basketball');
        basketball.style.visibility = 'hidden';
    }

    id.pop();
    if(id.length == 0)
        backButton.style.visibility = 'hidden';
}

function shootBall() {
    var ball = document.getElementById('basketball');
    var hoop = document.getElementById('basketTop'); 

    var randomAnimation = Math.floor(Math.random() * 4); // Genera un numero casuale da 0 a 3

    switch (randomAnimation) {
        case 0:
            // Animazione 1: Canestro
            ball.style.bottom = 'calc(100% - 100px)';
            setTimeout(function() {
                ball.style.bottom = '0';
            }, 1000);
            break;
        case 1:
            // Animazione 2: Nessun Canestro
            ball.style.transition = 'transform 1s ease-in-out';
            setTimeout(function() {
                ball.style.transform = 'translate(-150px, -400px)';
            }, 100);
            setTimeout(function() {
                ball.style.transform = 'translate(0, 0)';
            }, 1100);
            break;
        case 2:
            // Animazione 3: Nessun Canestro
            ball.style.transition = 'transform 1s ease-in-out';
            setTimeout(function() {
                ball.style.transform = 'translate(150px, -400px)';
            }, 100);
            setTimeout(function() {
                ball.style.transform = 'translate(0, 0)';
            }, 1100);
            break;
        case 3:
            // Animazione 4: Nessun Canestro
            ball.style.transition = 'transform 1s ease-in-out';
            setTimeout(function() {
                ball.style.transform = 'translate(0, -400px)';
            }, 100);
            setTimeout(function() {
                ball.style.transform = 'translate(0, 0)';
            }, 1100);
            break;
        default:
            break;
    }
}
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

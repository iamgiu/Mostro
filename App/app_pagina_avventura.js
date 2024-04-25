const id = [];
var backButton = document.getElementById("backButton");

// rende immagine visibile 
function setImageVisible(idImg) {
    var img = document.getElementById(idImg);
    img.style.visibility = 'visible';
    backButton.style.visibility = 'visible';

    id.push(idImg);
}

// rende invisibile limmagine precedentemente resa visibile
function setImageInvisible() {
    var img = document.getElementById(id);
    img.style.visibility = 'hidden';
    id.pop();
    if(id.length == 0)
        backButton.style.visibility = 'hidden';
}

document.addEventListener("DOMContentLoaded", function() {
    var h1 = document.getElementById("titolo");
    var h1Height = h1.offsetHeight;
    var h1Width = h1.offsetWidth;

    var gifTop = document.getElementById("gif-container-top");
    gifTop.style.top = "-" + (h1Height + 50) + "px";
    gifTop.style.left = "50%";
    gifTop.style.transform = "translateX(-50%)";

    var gifBottom = document.getElementById("gif-container-bottom");
    gifBottom.style.bottom = "-" + (h1Height + 50) + "px";
    gifBottom.style.left = "50%";
    gifBottom.style.transform = "translateX(-50%)";

    var gifLeft = document.getElementById("gif-container-left");
    gifLeft.style.top = "calc(50% - " + (h1Height / 2) + "px)";
    gifLeft.style.left = "calc(50% - " + (h1Width / 2) + "px - 100px)";

    var gifRight = document.getElementById("gif-container-right");
    gifRight.style.top = "calc(50% - " + (h1Height / 2) + "px)";
    gifRight.style.right = "calc(50% - " + (h1Width / 2) + "px - 100px)";
});
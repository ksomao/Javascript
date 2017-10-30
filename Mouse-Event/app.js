var divs = document.querySelectorAll(".hoverMe");
var reset = document.querySelector("#reset");
var axeX = document.querySelector("#axeX");
var axeY = document.querySelector("#axeY");
/*
var body = document.querySelector("body");
*/


divs.forEach(function (div) {
    div.addEventListener("mouseenter", function () {
        this.style.opacity = 0;
    })
});

/*------------------------------------*/

reset.addEventListener("click", function () {
    divs.forEach(function (div) {
        div.style.opacity = 1;
    });
});

/*------------------------------------*/

document.addEventListener("mousemove", function (e) {
    axeX.innerHTML = e.clientX;
    axeY.innerHTML = e.clientY;
});

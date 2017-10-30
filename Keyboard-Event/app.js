var box1 = document.querySelector("#character");
document.addEventListener("keydown", function (e) {
    setTimeout(function () {
        box1.style.transform = "scale(1.5)";
    }, 100);
    var code = e.keyCode;
    switch (code) {
        case 96:
            box1.style.backgroundColor = "red";
            break;
        case 97:
            box1.style.backgroundColor = "orange";
            break;
        case 98:
            box1.style.backgroundColor = "yellow";
            break;
        case 99:
            box1.style.backgroundColor = "aqua";
            break;
        case 100:
            box1.style.backgroundColor = "magenta";
            break;
        case 101:
            box1.style.backgroundColor = "gray";
            break;
        case 102:
            box1.style.backgroundColor = "blue";
            break;
        case 103:
            box1.style.backgroundColor = "purple";
            break;
        case 104:
            box1.style.backgroundColor = "black";
            break;
        case 105:
            box1.style.backgroundColor = "lime";
            break;
    }
    box1.style.transform = "scale(0)";
});

/*-------------------------------------------------------------*/

var up = document.querySelector("#up");
var down = document.querySelector("#down");
var left = document.querySelector("#left");
var right = document.querySelector("#right");


document.addEventListener("keydown", function (e) {
    var code = e.keyCode;
    switch (code) {
        case 37:
            left.classList.add("highlight");
            break;
        case 38:
            up.classList.add("highlight");
            break;
        case 39:
            right.classList.add("highlight");
            break;
        case 40:
            down.classList.add("highlight");
            break;
    }
});

document.addEventListener("keyup", function (e) {
    var code = e.keyCode;
    switch (code) {
        case 37:
            left.classList.remove("highlight");
            break;
        case 38:
            up.classList.remove("highlight");
            break;
        case 39:
            right.classList.remove("highlight");
            break;
        case 40:
            down.classList.remove("highlight");
            break;
    }
});



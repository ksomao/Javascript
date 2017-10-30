var body = document.querySelector("body");
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");

var firstP = document.querySelector("#first-paragraph");
firstP.classList.remove("bg-lime", "gray");
firstP.classList.add("bg-aqua");

var allSilver = document.querySelectorAll(".bg-silver");
allSilver.forEach(function (elem) {
    elem.classList.add("bg-teal");
    elem.classList.remove("bg-silver");
});

var bqs = document.querySelectorAll("blockquote");
bqs.forEach(function (elem) {
    elem.classList.add("bg-white");
});
/*---------------------------------------------------------*/
var myTable = document.querySelector("#my-table");
myTable.classList.add("bg-purple");

var allP = document.querySelectorAll(".container p");
allP.forEach(function (elem) {
    elem.classList.add("shadow");
});

/*-------------------------------------------------------------*/

var allPre = document.querySelectorAll("pre");
allPre.forEach(function (elem) {
    elem.style.color = "yellow";
    elem.style.backgroundColor = "blue";
    elem.style.borderTop = "3px solid red";
    elem.style.borderBottom = "3px solid red";
});

var firstH3 = document.querySelector("h3");
firstH3.innerHTML = " ";
firstH3.innerHTML = "<em>Itelic title ! yeah !</em>";

var firstH2 = document.querySelector("h2");
firstH2.innerHTML = " ";
firstH2.innerHTML = "<strong>HTML doesn't work !</strong>";

/*----------------------------------------------------*/

var firstOl = document.querySelector("ol");

while (firstOl.firstChild) {
    firstOl.removeChild(firstOl.firstChild);
}

var tab = ["Silent Teacher", "Code Monkey", "CodeCombat"];

tab.forEach(function (text) {
    var li = document.createElement("li");
    li.innerHTML = text;
    firstOl.appendChild(li);
});


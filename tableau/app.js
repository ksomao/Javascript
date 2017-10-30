var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var res = 0;
numbers.forEach(function (val, index) {
    res += numbers[index];
});
console.log(res);

/*--------------------------------------*/

var actors = ["Brad Pitt", "Tom Cruise", "Morgan Freeman"];
var nb = ["premier", "deuxieme", "troisieme"];

actors.forEach(function (val, index) {
    console.log(`le ${nb[index]} ${val}  \n`);
});

/*--------------------------------------*/

var character =  ["Mario", "Luigi", "Peach"];
var clone = character.slice(0);
clone.push("Bowser");
console.log(clone);
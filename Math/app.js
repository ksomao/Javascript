var nbArrMin = [7, 5, -12, 6, 32, 18, 14, -2];
var nbArrMax = [ -3, 9, 21, 36, 27, 54, 17, 35];
var min = 0;
var max = 0;
var total = 0;

min = nbArrMin.reduce(function (a, b) {
    return Math.min(a,b);
});
max = nbArrMax.reduce(function (a, b) {
    return Math.max(a,b);
});
total = min+max;


/*
var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var voleBateau = Math.ceil(floatBateau);
*/

/*
console.log(Math.floor((Math.random() * 49) + 51));
console.log(Math.round((Math.random())));
console.log(Math.round((Math.random()) * 10));
*/

var mortal =["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
var i = (Math.floor((Math.random() * mortal.length)));
console.log(mortal[i]);
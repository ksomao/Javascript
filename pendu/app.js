function guessLetter() {
    if (wordToGuessLength > 0) {
        var letter = "";
        while (letter.length != 1) {
            letter = prompt("choose a letter (only one)");
        }
        if (wordToGuessArray.includes(letter)) {
            //boucle afin de verifier si la lettre apparait plusieures fois
            for (i = 0; i < wordToGuessArray.length; i++) {
                if (wordToGuessArray.includes(letter)) {
                    var index = wordToGuessArray.indexOf(letter);
                    //remplace les lettre trouvé par une astérique dans le tablra mot
                    wordToGuessArray.splice(index, 1, "*");
                    //remplace l'underscore par la lettre devniée par user
                    solutionArray.splice(index, 1, letter);
                    solutionText = solutionArray.join("");
                    wordToGuessLength--;
                }
            }
        } else if (!wordToGuessArray.includes(letter)) {
            //si la lettre ne figure pas dans la tableau errorsArray et solutionArray, je l'ajoute
            //au tableau array
            if (!errorsArray.includes(letter) && !solutionArray.includes(letter)) {
                errorsArray.push(letter);
                errorsCpt++;
            }
            errorsText = errorsArray.join(",");
        }
    }
    else {
        alert(`Yaaaay, you guessed right !!! ${errorsCpt} error(s)`);
        return;
    }
    if (errorsArray.length > 0)
        console.log("errors : " + errorsText);

    console.log(solutionText);
    guessLetter();
}

var motString = prompt("Choose a mystery word");
//creation du tableau sur base du mot é
var wordToGuessArray = Array.from(motString);

var wordToGuessLength = wordToGuessArray.length;
//creation du tableau solutionArray sur base de la taille du mot introdui
var solutionArray = Array(wordToGuessLength);
console.log(solutionArray);
solutionArray.fill("_");

var solutionText = "";
var errorsArray = [];
var errorsText = "";
var errorsCpt = 0;

guessLetter();

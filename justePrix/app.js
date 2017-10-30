function createRandomNumber() {
    return Math.round(Math.random() * (max-min-2) + (min+1));
}

function guess(nb) {
    if (NB_TO_GUESS > nb) {
        console.log("C'est plus: " + nb);
        nbEssai++;
    }
    else if (NB_TO_GUESS < nb) {
        console.log("C'est moins: " + nb);
        nbEssai++;
    }
    else {
        console.log("C'est juste tu as trouvé en " + nbEssai +  " coups");
        return;
    }

    nb = parseInt(prompt("entrez un nombre"));
    guess(nb);
}

var nbEssai = 0;
var min = 20;
var max = 80;
const NB_TO_GUESS = createRandomNumber();


var nb = parseInt(prompt("entrez un nombre"));
guess(nb);

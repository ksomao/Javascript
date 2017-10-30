var character = {
    name: "Law",
    age: "25",
    items_to_give: ["knife", "shield", "daggers"],
    giveItem: function () {
        var index = Math.floor(Math.random() * this.items_to_give.length);
        return this.items_to_give[index];
    }
};

for (var prop in character) {
    if (prop != "giveItem") {
        console.log(character[prop]);
    }else{
        console.log(character[prop]());
    }
}

/*-----------------------------------------*/

var epee = {
    title: "épée du néant",
    physic: 100,
    magic: 35,
    minLevel: 50,
    available: true
};

var sceptre = {
    title: "sceptre du magicien blance",
    physic: 10,
    magic: 80,
    minLevel: 5,
    available: false
};

var arc = {
    title: "arc en chêne blanc",
    physic: 50,
    magic: 50,
    minLevel: 30,
    available: true
};

var items = [epee, sceptre, arc];

function display() {
    items.forEach(function (item) {
        console.log(item);
    })
}

function displayAvailable() {
    items.forEach(function (item) {
        if (item.available == true)
            console.log(item);
    })
}


function displayMinLevel10() {
    items.forEach(function (item) {
        if (item.minLevel > 10)
            console.log(item);
    })
}

display();
displayAvailable();
displayMinLevel10();
/*-----------------------------------------*/


var mainCharacter = {
    name: "Sonya",
    level: 20,
    life: 4000,
    weapon: {
        name: "Great Sword",
        damage: 200
    },
    available: true,
    attack: function () {
        return `${this.name} attaque avec ${this.weapon.name} les dégats sont
        ${this.level * this.weapon.damage}`
    }
};

console.log(mainCharacter.attack());

/*--------------------------------------------------------*/

var character = {
    name: "Sonya",
    level: 20,
    life: 1000,
    weapon: {
        name: "Great Sword",
        damage: 20
    },
    available: true,
    attack: function (opponent) {
        console.log(`${this.name} attaque ${opponent.name} \n`);
        console.log(`${this.weapon.name} \n`);
        console.log(`et lui inflige ${this.weapon.damage * this.level} de dégats \n`);
        opponent.life -= this.weapon.damage * this.level;
        console.log(`${opponent.name} à maintenant ${opponent.life} points de vie `);
    }
};


var mainCharacter = Object.assign({}, character);
var opponentCharacter = Object.assign({}, character);
opponentCharacter.name = "Naseebo";

mainCharacter.attack(opponentCharacter);
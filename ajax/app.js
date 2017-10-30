var req = new XMLHttpRequest();
req.open('get','data.json',true);
req.send();
req.onload = function () {
    if(req.status === 200){
        data = JSON.parse(req.responseText);
        data.forEach(function (user) {
            user["score"] = Math.floor(Math.random() * 1000);
            if(user.score > 750){
                a.push(user);
            }
            else if(user.score < 750 && user.score > 500){
                b.push(user);
            }
            else{
                c.push(user);
            }
        });
        displayData(data);
    }
};



setTimeout(function () {
    console.log(data);
},2000);

var a = [];
var b = [];
var c = [];

function displayData(data){
/*
    var userBahrain=  data.filter(function (user) {
        return user.country == "Bahrain";
    });

    console.log("there are " + userBahrain.length + "persons from Bahrein \n");

*/
    data.sort(function (user1,user2) {
        return user1.score - user2.score
    });


    data.forEach(function (user) {
        console.log(user);
    });
/*    console.log("Le plus gros score est de " + data[data.length-1].score);
    console.log("Le plus petit score est de " + data[0].score);*/
}

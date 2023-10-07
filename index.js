var randomNumber1 = Math.floor(Math.random()*6) +1 ;
var randomNumber2 = Math.floor(Math.random()*6) +1 ;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesSrc = "./images/" + randomDiceImage;

var randomImageSrc2 = "./images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImagesSrc);
image2.setAttribute("src", randomImageSrc2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";

}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}


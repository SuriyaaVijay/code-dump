var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0]; // for the first img tag;

image1.setAttribute("src",randomImageSource);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image2 = document.querySelectorAll("img")[1]; // for the first img tag;

image2.setAttribute("src",randomImageSource1);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";   
}

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImage = "dice"+randomNumber1+".png";
var randomImagesource = "./images/"+randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber1*6;
randomNumber2 = Math.floor(randomNumber1) + 1;

var randomImage1 = "dice"+randomNumber2+".png";
var randomImagesource1 = "./images/"+randomImage1;

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImagesource1);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Its a Draw";
}
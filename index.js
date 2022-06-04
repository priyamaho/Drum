//Make sound using on Key press

document.addEventListener("keydown",function(event){
//alert(event.key);
makeSound(event.key);
buttonAnimation(event.key);
});




//on mouse click sound
var numberOfDrum = document.querySelectorAll(".drum").length;
for(i=0 ; i<=numberOfDrum ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function () {

    var clickButton = this.innerHTML;
    
    makeSound(clickButton);
    buttonAnimation(clickButton);

    });

}
//(this.style.color="white");


//Adding and playing sound using switch statement

function makeSound(key){

switch(key){
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    case "l":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    default:console.log(key);

}
};


// Animation javascript

function buttonAnimation(currentKey){
//select class from button like .w ,.s ,.l etc

var activeButton = document.querySelector("." +currentKey); 

//apply css class pressed to the button 
activeButton.classList.add("pressed");

// setting time and removing class pressed after 100 millisecond
setTimeout(function(){
activeButton.classList.remove("pressed");
},100);



}
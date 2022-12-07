
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userPattern = [];

var level = 0;

var n = 0;

var originalColor = $("body").css("background");

function nextSequence(){
        level++;
    
        $("h1").html("Level " + level);
    
        var randomNum = Math.floor(Math.random()*4);
    
        var randomColor = buttonColors[randomNum];

        setTimeout(function(){

            playSound(randomColor);

            $("."+randomColor).fadeOut(100).fadeIn(100);

        }, 1000);
        
        gamePattern.push(randomColor);
    
}


$(".btn").click(function(){

    if(level>0){

        var userButton = $(this).attr("id");

        playSound(userButton);

        userPattern.push(userButton);

        animatePress(userButton);
    
        if(userPattern[n] === gamePattern[n]){
            n++;
            if(userPattern.length === gamePattern.length){
                n = 0;
                userPattern = [];
                nextSequence();
            }


        }else{gameOver();}  
    
    }else {gameOver();}
        
        
});



function playSound(color){

        var audio = new Audio("sounds/" + color + ".mp3");
        audio.play();
}


function animatePress(color){
    $("."+color).addClass("pressed");
      
    setTimeout (function(){
        $("."+color).removeClass("pressed");
        }, 100);
}

$(document).keypress(function(){
    if(level===0){  
        nextSequence();}
        
});


function gameOver(){
    $("h1").html("Game Over, Press any key to restart Game");
    playSound("wrong");
    $("body").css("background", "red");
    setTimeout(function(){
    $("body").css("background", originalColor);
    },100);
    gamePattern = [];
    userPattern = [];
    n = 0;
    level = 0;
    
}
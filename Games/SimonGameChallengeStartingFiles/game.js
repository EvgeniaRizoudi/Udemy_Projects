var gamePattern = [];
var userClickedPattern = [];
var buttonColors= ["red", "blue", "green", "yellow"];






function nextSequence(){
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("." + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor); 
};
    
   $(".btn").on("click", function(){
    var userChosenColor = this.classList[1];
   userClickedPattern.push(userChosenColor);
   playSound(userChosenColor);
   animatePress(userChosenColor);

});


function playSound(name){
    
    
    var audio = new Audio("sounds/" + name + ".mp3")
        audio.play();
}


function animatePress(currentColor){
   
        $("." + currentColor).addClass("pressed");
        
        setTimeout(function(){
            $("." + currentColor).removeClass("pressed")
        }, 100);
    }

$(document).keydown(function(){
    var level = currentLevel();   
})


function currentLevel(){
    for(var i = 0; i<=30; i++){
       nextSequence();   
        $("#level-title").text("Level" + level)
    }}
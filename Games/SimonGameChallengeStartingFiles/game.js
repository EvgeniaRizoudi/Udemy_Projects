var gamePattern = [];
var userClickedPattern = [];
var buttonColors= ["red", "blue", "green", "yellow"];
var level = 0;
var start = false;



            /* Function to generate the random color sequence */
function nextSequence(){
    userClickedPattern = [];
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("." + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor); 
    $("#level-title").text("Level " + level);
   
};
    
            /* Player's moves via click */

   $(".btn").on("click", function(){
    var userChosenColor = this.classList[1];
   userClickedPattern.push(userChosenColor);
   playSound(userChosenColor);
   animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

            /* Button Sounds and Animation */
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

                /* Game Start */
$(document).keydown(
    function(){
        if(!start){
    $("#level-title").text("Level " + level);  
    nextSequence()
    start = true}
})

   
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("correct")
    

    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function (){
            nextSequence();
          }, 1000);}
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over")
          }, 1000);
          $("#level-title").text("Game Over! Press any key to restart");
          startOver();
    };
};




function startOver(){
    
        level = 0;
        gamePattern =[];
        start = false;
    
}
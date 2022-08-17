
/* Player One */



 
 var randomNumber1 = Math.floor(Math.random() * 6)+1;
 var randomDiceImage = "dice" + randomNumber1 + ".png";
 var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage)

 var randomNumber2 = Math.floor(Math.random() * 6)+1;
 var randomDiceImage2 = "dice" + randomNumber2 + ".png";
 var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)

/* function randomDice1(){  
   

    if(randomNumber1 === 1){
    player1.setAttribute("src","dice1.png"); 
        }else if(randomNumber1 === 2){
        player1.setAttribute("src","dice2.png");
        }else if(randomNumber1 === 3){
            player1.setAttribute("src","dice3.png");
        }else if(randomNumber1 === 4){
    player1.setAttribute("src","dice4.png");
        }else if(randomNumber1 === 5){
    player1.setAttribute("src","dice5.png");
        }else if(randomNumber1 === 6){
    player1.setAttribute("src","dice6.png");
           }
}

 document.getElementById("player1dice").addEventListener("click", randomDice1); 
 */

/* Player two */




/* var player2 = document.getElementById("player2dice")

 var randomNumber2 = Math.floor(Math.random() * 6)+1;
function randomDice2(){  
   
    
    if(randomNumber2 === 1){
    player2.setAttribute("src","dice1.png"); 
        }else if(randomNumber2 === 2){
        player2.setAttribute("src","dice2.png");
        }else if(randomNumber2 === 3){
            player2.setAttribute("src","dice3.png");
        }else if(randomNumber2 === 4){
    player2.setAttribute("src","dice4.png");
        }else if(randomNumber2 === 5){
    player2.setAttribute("src","dice5.png");
        }else if(randomNumber2 === 6){
    player2.setAttribute("src","dice6.png");
           }
}

document.getElementById("player2dice").addEventListener("click", randomDice2); 


/* Title */
 







     if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = 'Player 1 wins!';
    }else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML =  'Player 2 wins!';
    }else{
        document.querySelector("h1").innerHTML =  'It is a tie!';
    }

 
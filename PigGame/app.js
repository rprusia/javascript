/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, previousRoll, scoreToWin;

init();

//document.querySelector('#current-' + activePlayer).textContent = dice;  // only update text, set value
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';  // innerHTML to update html.
//var x = document.querySelector('#score-0').textContent;  // read value from id score-0


//function btn(){
//    
//}
//
//document.querySelector.('.btn-roll').addEventListener('click',btn); // btn would be call back function

document.querySelector('.btn-roll').addEventListener('click', function () {  // anonymous function
    
    if (gamePlaying){
        // random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';     
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';    
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        if ( dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        /*
        if (previousRoll === 6 && dice === 6) {
            
            // set scores to zero for user
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
            
        } else if (dice !== 1) {
         
            // display result
            //var diceDom = document.querySelector('.dice');
            document.getElementById('dice-1').style.display = 'block';
            document.getElementById('dice-2').style.display = 'block';     
            document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';    
            document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'; 
            
            //update round score only if rolled number is not a 1          
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;        
        
        } else {
            nextPlayer();
        }
    }
    previousRoll = dice; */     
    }
}); 

document.querySelector('.btn-new').addEventListener('click', init );  // don't use init(), becuase you want the event listener to call the function.

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (gamePlaying){
        
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        console.log('active player score ' + scores[activePlayer]);

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var inputVal = document.querySelector('.final-score').value;
        console.log('inputVal ' + inputVal);
        // Undefined, 0, null or "" are COERCE to false
        // antying else is COERCED to true
        if (inputVal){
            var winningScore = inputVal;
        } else {
            winningScore = 100;  // no input it will set winning score to 100.
        }

         console.log('score need to win' + winningScore);
        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none'; 
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            previousRoll = 0;
            nextPlayer();
        }
    }
        
   
});


function nextPlayer() {
    
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousRoll = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none'; 
    
}

function init() {
    
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;   
    previousRoll = 0;
    gamePlaying = true;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');   
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}


                                                     
                                                     
                                                    








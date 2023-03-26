'use strict';


var scores, roundScore, activePlayer,gamePlaying;
 init();


//  console.log(dice);

//  document.querySelector('#current-' +activePlayer).textContent = dice; //Setter

//  var x= document.querySelector('#score-0').textContent; //Getter
//  console.log(x);
 
 
 document.querySelector('.btn--roll').addEventListener('click', function() {
   if(gamePlaying)
    {
      var  dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display='block';
    diceDOM.src = 'dice-' + dice +'.png';
    
if(dice!== 1){
//Add Score
roundScore += dice;
document.querySelector('#current--' +activePlayer).textContent = roundScore;
}
else{
 //Next Player
nextPlayer();
 
} 



    }


 });
  document.querySelector('.btn--hold').addEventListener('click', function(){
   
   if(gamePlaying)
   {

//Add Current Score to Global Score
scores[activePlayer] +=roundScore;

//Update the UI

document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

//Check if player won the game

if(scores[activePlayer]>=20){

   document.getElementById('name--'+activePlayer).textContent = 'Winner';
   document.querySelector('.dice').style.display = 'none';
   document.querySelector('.player--'+activePlayer+'-panel').classList.add('player--winner');
   document.querySelector('.player--'+activePlayer+'-panel').classList.remove('active');
   gamePlaying=false;
}
else{
   nextPlayer();
}



nextPlayer();



   }
   
  });  

  function nextPlayer(){

   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
   roundScore = 0;
  
   document.getElementById('current--0').textContent='0';
   document.getElementById('current--1').textContent='1';
  
   document.querySelector('.player--0-panel').classList.toggle('active');
   document.querySelector('.player--1-panel').classList.toggle('active');
  //  document.querySelector('.player--0-panel').classList.remove('active');
  //  document.querySelector('.player--1-panel').classList.add('active');
  
  document.querySelector('.dice').style.display = 'none';



  }

  document.querySelector('.btn--new').addEventListener('click',init);


  function init(){
   scores=[0,0];
   activePlayer=0;
   roundScore=0;
   gamePlaying = true;
   document.querySelector('.dice').style.display='none';
   document.getElementById( 'score--0').textContent = '0';
   document.getElementById( 'score--1').textContent = '0';
   document.getElementById( 'current--0').textContent = '0';
   document.getElementById( 'current--1').textContent = '0';
   document.getElementById('name--0').textContent = 'Player 1';
   document.getElementById('name--1').textContent = 'Player 2';
   document.querySelector('.player--0-panel').classList.remove('player--winner');
   document.querySelector('.player--1-panel').classList.remove('player--winner');
   document.querySelector('.player--0-panel').classList.remove('active');
   document.querySelector('.player--1-panel').classList.remove('active');
   document.querySelector('.player--0-panel').classList.add('active');
}
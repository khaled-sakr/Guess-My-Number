'use strict';
// console.log(
//     document
//     .querySelector ('.message').textContent);
//     document.querySelector('.message').textContent ='that is message';
//     document.querySelector('.number').textContent='13'; 
//     document.querySelector('.guess').value='66';


// start the actually project
let secretNumber=Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore=0;
const displayMessage =function(message){
    document.querySelector('.message').textContent=message;
}
const displayScore =function(score){
    document.querySelector('.score').textContent=score;
}
       

    document.querySelector('.check').addEventListener('click' , function(){
        const guess= ( Number(document.querySelector('.guess').value));
            console.log(guess ,typeof guess);
            if(!guess){
               displayMessage('I am sorry it is totallll wrong');
                score--;
                displayScore(score);
                if(score <= 0 ){
                    displayMessage('you lose the game');
                    displayScore(0);
                    ;
                }
            }else if(guess===secretNumber){
                displayMessage('yaa , that is correct number');
                score--;
                displayScore(score);
                /////////////////////WHEN the player win the background will be green//////////
                document.querySelector('.number').textContent=secretNumber;
                document.querySelector('body').style.backgroundColor='#60b347';
                document.querySelector('.number').style.width='30rem';
                document.querySelector('.number').style.fontSize='10rem';
                if(score > highScore){
                    highScore = score ;
                    document.querySelector('.highscore').textContent=highScore;
                }

                if(score <= 0 ){
                   displayMessage('you lose the game');
                   displayScore(0);
                }
            }else if (guess !==secretNumber){
              displayMessage (guess>secretNumber ? 'too much':'too less');
                score--;
                displayScore(score);
                if(score <= 0 ){
                    displayMessage('you lose the game');
                    document.querySelector('.score').textContent=0;
                }
 }
            //  else if(guess>secretNumber) {
            //     document.querySelector('.message').textContent ='I am sorry that is too much';
            //     score--;
            //     document.querySelector('.score').textContent= score;
            //     if(score <= 0 ){
            //         document.querySelector('.message').textContent='you lose the game';
            //         document.querySelector('.score').textContent=0;
            //     }
            // }
            // else if(guess<secretNumber){
            // document.querySelector('.message').textContent ='I am sorry that is too small';
            // score--;
            // document.querySelector('.score').textContent=score;
            // } if(score <= 0 ){
            // document.querySelector('.message').textContent='you lose the game';
            // document.querySelector('.score').textContent=0;
            // }
    });

    document.querySelector('.again').addEventListener('click',function(){
        // location.reload();
        secretNumber=Math.trunc(Math.random()*20)+1;
        score=20;
        displayScore(20);
        document.querySelector('.number').textContent='?';
        displayMessage('Start guessing...');
        document.querySelector('.guess').value='';
        document.querySelector('body').style.backgroundColor='black';document.querySelector('.number').style.width='15rem';
        document.querySelector('.number').style.fontSize='6rem';
});
    
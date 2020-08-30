/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var current0=0, current1=0, score0=0, score1=0; 
document.querySelector("#current-0").textContent=current0;
document.querySelector("#current-1").textContent=current0;
document.querySelector("#score-0").textContent=current0;
document.querySelector("#score-1").textContent=current0;
player0();

    function player0(){

        document.querySelector(".btn-roll").addEventListener("click" , function(){

        var randomNo=Math.floor(Math.random()*6)+1;
        document.querySelector("img").setAttribute("src" , "dice-" +randomNo+ ".png");
       
        if(randomNo != 1){
            current0 += randomNo;
            document.querySelector("#current-0").textContent=current0;
        }
        else{
            score0 +=current0;
        document.querySelector("#score-0").textContent=score0;
        current0=0;
        document.querySelector("#current-0").textContent=current0;
            player1();
        }

    });
       
}

    function player1(){

        document.querySelector(".btn-roll").addEventListener("click" , function(){

            var randomNo1=Math.floor(Math.random()*6)+1;
            document.querySelector("img").setAttribute("src" , "dice-" +randomNo1+ ".png");
           
            if(randomNo1 != 1){
                current1 += randomNo1;
                document.querySelector("#current-1").textContent=current1;
            }

            else{
                score1 +=current1;
            document.querySelector("#score-1").textContent=score1;
            current1=0;
            document.querySelector("#current-1").textContent=current1;
                player0();
            }
    
        });

}
    
 
    
  








// document.querySelector(".btn-roll").addEventListener("click" , function(){

//     var randomNo=Math.floor(Math.random()*6)+1;
//     document.querySelector("img").setAttribute("src" , "dice-" +randomNo+ ".png");
    

    
//     if(randomNo != 1){
//     current0 += randomNo;
//     document.querySelector("#current-0").textContent=current0;

//     score1=current1;
//     document.querySelector("#score-1").textContent=score1;
//     }

//     else{
//         score0=current0;
//         document.querySelector("#score-0").textContent=score0;


//         current1 += randomNo;
//         document.querySelector("#current-1").textContent=current1; 
//     }




// });
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var current, score0, score1, active, inc;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {

    if (inc === 0) {

        document.querySelector(".dice").style.display = "block";
        var randomNo = Math.floor(Math.random() * 6) + 1;
        document.querySelector("img").setAttribute("src", "dice-" + randomNo + ".png");



        if (randomNo != 1) {

            current += randomNo;
            document.querySelector("#current-" + active).textContent = current;


        } else {

            if (active === 0) {
                score0 += current;
                document.querySelector("#score-" + active).textContent = score0;

                if (score0 >= 100) {
                    document.querySelector("#name-0").textContent = "Winner!";
                    document.querySelector("#name-0").style.fontSize = "4rem";
                    inc++;
                }


                current = 0;
                document.querySelector("#current-" + active).textContent = current;

                active = 1;


            } else {
                score1 += current;
                document.querySelector("#score-" + active).textContent = score1;

                if (score1 >= 100) {
                    document.querySelector("#name-1").textContent = "Winner!";
                    document.querySelector("#name-1").style.fontSize = "4rem";
                    inc++;
                }


                current = 0;
                document.querySelector("#current-" + active).textContent = current;

                active = 0;
            }
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");


        }

    }

});

document.querySelector(".btn-new").addEventListener("click", function () {
    document.location.reload(true);
});

function init() {
    current = 0;
    score0 = 0;
    score1 = 0;
    active = 0;
    inc = 0;

    document.querySelector("#current-0").textContent = current
    document.querySelector("#current-1").textContent = current;
    document.querySelector("#score-0").textContent = current;
    document.querySelector("#score-1").textContent = current;
    document.querySelector(".dice").style.display = "none";

}



// function check(score, active){
//     if(score >= 100 && active === 1){
//         document.querySelector("#name-0").textContent ="Winner!";
//     }
//     else if(score >= 100 && active === 0){
//         document.querySelector("#name-1").textContent ="Winner!";

//     }
// }



// player0();

//     function player0(){

//         document.querySelector(".btn-roll0").addEventListener("click" , function(){

//         var randomNo=Math.floor(Math.random()*6)+1;
//         document.querySelector("img").setAttribute("src" , "dice-" +randomNo+ ".png");

//         if(randomNo != 1){
//             current0 += randomNo;
//             document.querySelector("#current-0").textContent=current0;
//         }
//         else{
//             score0 +=current0;
//         document.querySelector("#score-0").textContent=score0;
//         current0=0;
//         document.querySelector("#current-0").textContent=current0;
//             player1();
//         }

//     });

// }

//     function player1(){

//         document.querySelector(".btn-roll1").addEventListener("click" , function(){

//             var randomNo1=Math.floor(Math.random()*6)+1;
//             document.querySelector("img").setAttribute("src" , "dice-" +randomNo1+ ".png");

//             if(randomNo1 != 1){
//                 current1 += randomNo1;
//                 document.querySelector("#current-1").textContent=current1;
//             }

//             else{
//                 score1 +=current1;
//             document.querySelector("#score-1").textContent=score1;
//             current1=0;
//             document.querySelector("#current-1").textContent=current1;
//                 player0();
//             }

//         });

// }
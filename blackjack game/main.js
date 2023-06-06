



const cards = [
    {path: "./public/cards/2-C.png", value: 2, id: 1},
    {path: "./public/cards/2-D.png", value: 2, id: 2},
    {path: "./public/cards/2-H.png", value: 2, id: 3},
    {path: "./public/cards/2-S.png", value: 2, id: 4},
    {path: "./public/cards/3-C.png", value: 3, id: 5},
    {path: "./public/cards/3-D.png", value: 3, id: 6},
    {path: "./public/cards/3-H.png", value: 3, id: 7},
    {path: "./public/cards/3-S.png", value: 3, id: 8},
    {path: "./public/cards/4-C.png", value: 4, id: 9},
    {path: "./public/cards/4-D.png", value: 4, id: 10},
    {path: "./public/cards/4-H.png", value: 4, id: 11},
    {path: "./public/cards/4-S.png", value: 4, id: 12},
    {path: "./public/cards/5-C.png", value: 5, id: 13},
    {path: "./public/cards/5-D.png", value: 5, id: 14},
    {path: "./public/cards/5-H.png", value: 5, id: 15},
    {path: "./public/cards/5-S.png", value: 5, id: 16},
    {path: "./public/cards/6-C.png", value: 6, id: 17},
    {path: "./public/cards/6-D.png", value: 6, id: 18},
    {path: "./public/cards/6-H.png", value: 6, id: 19},
    {path: "./public/cards/6-S.png", value: 6, id: 20},
    {path: "./public/cards/7-C.png", value: 7, id: 21},
    {path: "./public/cards/7-D.png", value: 7, id: 22},
    {path: "./public/cards/7-H.png", value: 7, id: 23},
    {path: "./public/cards/7-S.png", value: 7, id: 24},
    {path: "./public/cards/8-C.png", value: 8, id: 25},
    {path: "./public/cards/8-D.png", value: 8, id: 26},
    {path: "./public/cards/8-H.png", value: 8, id: 27},
    {path: "./public/cards/8-S.png", value: 8, id: 28},
    {path: "./public/cards/9-C.png", value: 9, id: 29},
    {path: "./public/cards/9-D.png", value: 9, id: 30},
    {path: "./public/cards/9-H.png", value: 9, id: 31},
    {path: "./public/cards/9-S.png", value: 9, id: 32},
    {path: "./public/cards/10-C.png", value: 10, id: 33},
    {path: "./public/cards/10-D.png", value: 10, id: 34},
    {path: "./public/cards/10-H.png", value: 10, id: 35},
    {path: "./public/cards/10-S.png", value: 10, id: 36},
    {path: "./public/cards/A-C.png", value: 1, id: 37},
    {path: "./public/cards/A-D.png", value: 1, id: 38},
    {path: "./public/cards/A-H.png", value: 1, id: 39},
    {path: "./public/cards/A-S.png", value: 1, id: 40},
    {path: "./public/cards/J-C.png", value: 10, id: 41},
    {path: "./public/cards/J-D.png", value: 10, id: 42},
    {path: "./public/cards/J-H.png", value: 10, id: 43},
    {path: "./public/cards/J-S.png", value: 10, id: 44},
    {path: "./public/cards/J-B.png", value: 10, id: 45},
    {path: "./public/cards/K-C.png", value: 10, id: 46},
    {path: "./public/cards/K-D.png", value: 10, id: 47},
    {path: "./public/cards/K-H.png", value: 10, id: 48},
    {path: "./public/cards/K-S.png", value: 10, id: 49},
    {path: "./public/cards/Q-C.png", value: 10, id: 50},
    {path: "./public/cards/Q-D.png", value: 10, id: 51},
    {path: "./public/cards/Q-H.png", value: 10, id: 52},
    {path: "./public/cards/Q-S.png", value: 10, id: 53},
]

const backImg = "./public/cards/BACK.png";

let playerValue = 0;
let dealerValue = 0;
let playerWin;

const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const dealerContainer = document.querySelector(".dealerCardContainer");
const playerContainer = document.querySelector(".playerCardContainer");
const backCard = document.getElementById("backCard");
const playerStatus = document.querySelector(".playerStatus");
const result = document.querySelector(".result");
const clickSound = document.getElementById("clickSound")
const winSound = document.getElementById("winSound")
const lostSound = document.getElementById("lostSound")


function hit(){

    clickSound.play()
    let randomNum = Math.floor(Math.random() * 53);
    let randomNum2 = Math.floor(Math.random() * 53);
    function addPlayer(){
        if(playerValue < 21){
            let card = document.createElement("img")
            card.setAttribute("src", cards[randomNum].path)
            card.setAttribute("id", cards[randomNum].id)
            playerContainer.appendChild(card)
            playerValue += cards[randomNum].value
            
            const index = cards.findIndex(obj => obj.id === card.id)
            if(index !== -1){
                cards.splice(index, 1)
            }
        }else{
            hitButton.style.cursor = "default"
            hitButton.style.display = "none"
        }
    }

    function addDealer(){
        if(dealerValue < 17){
            let dealercard = document.createElement("img")
            dealercard.setAttribute("src", cards[randomNum2].path)
            dealerContainer.appendChild(dealercard)
            dealerValue += cards[randomNum2].value;

            const index = cards.findIndex(obj => obj.id === dealercard.id)
            if(index !== -1){
                cards.splice(index, 1)
            }
        }
    }
    
    addPlayer()
    setTimeout(()=>{addDealer()}, 300)
}
function stand(){
    let randomNum3 = Math.floor(Math.random() * 53);  
    function checkWinner(){
        backCard.setAttribute("src", cards[randomNum3].path)
        dealerValue += cards[randomNum3].value
        standButton.style.display = "none"
        hitButton.style.display = "none"

       

        if(playerValue == dealerValue){
            
            playerWin = 0
        }else if(playerValue < 21 && dealerValue > 21){
            
            playerWin = true
        }else if(playerValue > 21 && dealerValue < 21){
            
            playerWin = false
        }else if( playerValue < 21 && dealerValue < 21 && playerValue > dealerValue){

            playerWin = true
        }else if(playerValue < 21 && dealerValue < 21 && playerValue < dealerValue){

            playerWin = false
        }else if(playerValue > 21 && dealerValue > 21 && dealerValue > playerValue){

            playerWin = false
        }else if(playerValue > 21 && dealerValue >21 && dealerValue < playerValue){

            playerWin = true
        }
            
            //-------------------------------


        if(playerWin == true){
            result.innerText = "You won";
            playerStatus.style.display ="flex";
            winSound.play()
                
        }else if(playerWin == false){
            result.innerText = "You Lose";
            playerStatus.style.display = "flex";
            lostSound.play()
        }else{
            result.innerText = "It's a draw";
            playerStatus.style.display = "flex";
            clickSound.play()
        }
        
        
    }


    //-------------------------------------


    if(playerValue != 0){
        checkWinner()
    }
}




function replayGame(){
    location.reload();
}


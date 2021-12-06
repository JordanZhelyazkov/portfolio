
const boxes = Array.from(document.querySelectorAll(".box"));
const winner = document.querySelector('#winner');
const resBtn = document.querySelector("#restart");


boxes.forEach(box => {
    box.addEventListener("click", checkTheBox)
})

const spaces = [];
const tick_circle = 'O';
const tick_x = 'X';
let currentPlayer = tick_circle;

function checkTheBox(event){
const id = event.target.id;
if(!spaces[id]){
    spaces[id] = currentPlayer;
    event.target.innerText = currentPlayer;
    if(playerWon()){
        winner.innerText = `${currentPlayer} has won!`;
        restart();
        return;
    }
    if(playerDraw()){
        return;
    }
    currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
}
}

function playerWon(){
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            winner.innerText = `${currentPlayer} won`;
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            winner.innerText = `${currentPlayer} won`;
            return  true
        }
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            winner.innerText = `${currentPlayer} won`;
            return true;
        }
    }
    if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            winner.innerText = `${currentPlayer} won`;
            return true;
        }
        if(spaces[7] === currentPlayer && spaces[6] === currentPlayer){
            winner.innerText = `${currentPlayer} won`;
            return true;
        }

    }
    if(spaces[4] === currentPlayer){
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            winner.innerText = `${currentPlayer} won`;
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            winner.innerText = `${currentPlayer} won`;
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            winner.innerText = `${currentPlayer} won`;
            return true;
        }
    }
}

function  playerDraw(){
    let draw = 0;
    spaces.forEach((space, index) => {
        if(spaces[index] !== null) {
            draw++;
        }
        if (draw === 9){
            winner.innerText = "Draw";
            restart();
        }
    })
}

function  restart(){

    spaces.forEach((space, i) => {
        spaces[i].innerText = null;
    })
    boxes.forEach(box => {
        box.innerText = "";

    })
    winner.innerText = 'Play again';

}
console.log(boxes);
console.log(spaces);
resBtn.addEventListener('click',restart);
restart();
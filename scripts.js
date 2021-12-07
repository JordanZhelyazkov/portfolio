
const boxes = document.querySelectorAll(".box");
const winner = document.querySelector('#winner');
const resBtn = document.querySelector("#restart");


boxes.forEach(box => {
    box.addEventListener("click", checkTheBox)
})

const cells = [];
console.log(cells);
console.log(boxes);
const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;

function  checkTheBox(event) {
    let currentId = event.target.id;
    if(cells[currentId] != null){
        return;
    }

    cells[currentId] = currentPlayer;
    event.target.textContent = currentPlayer;
    if(playerWin()){
        restart();
        winner.textContent = "";
        return;
    } else if (draw()){
        restart();
        winner.textContent = "";
        return;
    }
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
    console.log(currentPlayer);
    console.log(cells);

}

function playerWin(){
    if(cells[0] === currentPlayer){
        if(cells[1] === currentPlayer && cells[2] === currentPlayer){
            winner.textContent = `Player ${currentPlayer} won on the top row`;
            return true;
        }
        if(cells[3] === currentPlayer && cells[6] === currentPlayer){
            winner.textContent = `Player ${currentPlayer} won on the left column`;
            return true;
        }
        if(cells[4] === currentPlayer && cells[8] === currentPlayer){
            winner.textContent = `Player ${currentPlayer} won on the the diagonal`;
            return true;
        }
    }
    if(cells[8] === currentPlayer){
        if(cells[7] === currentPlayer && cells[6] === currentPlayer){
            winner.textContent = `Player ${currentPlayer} won on the bottom row`;
            return true;
        }
        if(cells[5] === currentPlayer && cells[2] === currentPlayer){
            winner.textContent = `Player ${currentPlayer} won on the right column`;
            return true;
        }
    }
    if(cells[4] === currentPlayer){
        if(cells[1] === currentPlayer && cells[7] === currentPlayer){
            winner.textContent = `Player ${currentPlayer} won on the middle column`;
            return true;
        }
        if(cells[3] === currentPlayer && cells[5] === currentPlayer){
            winner.textContent = `Player ${currentPlayer} won on the middle row`;
            return true;
        }
    }
}

 function restart(){
    setTimeout(() => {
   boxes.forEach((box, index) => {
       box.textContent = "";
   })
     empty(cells);
   }, 2000)
 }

   function draw(){
    let counter = 0;
    cells.forEach(cell => {
        if(cell != null){
            counter++;
        }
    });
    if(counter === 9){
        winner.textContent = `Draw!`;
        return true;
    }
   }

const empty = cells => cells.length = 0;
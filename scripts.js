    const boxes = document.querySelectorAll(".box");
    const display = document.querySelector('#display');
    const resBtn = document.querySelector("#restart");

    boxes.forEach(box => {
        box.addEventListener("click", checkTheBox)
    })

    const cells = [];
    const playerX = "X";
    const playerO = "O";
    let currentPlayer = playerX;

    function  checkTheBox(event) {

        if(display.textContent !== ''){
            return;
        }
        let currentId = event.target.id;
        if (cells[currentId] != null) {
            return;
        }

        cells[currentId] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (playerWin()) {
            return;
        } else if (draw()) {
            return;
        }
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
        console.log(currentPlayer);
        console.log(cells);
    }

    function playerWin(){
        if(cells[0] === currentPlayer){
              if(cells[1] === currentPlayer && cells[2] === currentPlayer){
            display.textContent = `Player ${currentPlayer} won on the top row`;
            return true;
        }
              if(cells[3] === currentPlayer && cells[6] === currentPlayer){
            display.textContent = `Player ${currentPlayer} won on the left column`;
            return true;
        }
              if(cells[4] === currentPlayer && cells[8] === currentPlayer){
            display.textContent = `Player ${currentPlayer} won on the the diagonal`;
            return true;
        }
            }
        if(cells[8] === currentPlayer){
              if(cells[7] === currentPlayer && cells[6] === currentPlayer){
            display.textContent = `Player ${currentPlayer} won on the bottom row`;
            return true;
            }
              if(cells[5] === currentPlayer && cells[2] === currentPlayer){
            display.textContent = `Player ${currentPlayer} won on the right column`;
            return true;
            }
        }
        if(cells[4] === currentPlayer){
              if(cells[1] === currentPlayer && cells[7] === currentPlayer){
            display.textContent = `Player ${currentPlayer} won on the middle column`;
            return true;
            }
              if(cells[3] === currentPlayer && cells[5] === currentPlayer){
            display.textContent = `Player ${currentPlayer} won on the middle row`;
            return true;
            }
              if(cells[2] === currentPlayer && cells[6] === currentPlayer){
            display.textContent = `Player ${currentPlayer} won on the diagonal`;
            return true;
            }
        }
   }

    function restart(){
       boxes.forEach((box) => {
       box.textContent = "";
    })
     empty(cells);
       display.textContent = "";
    }

   function draw(){
    let counter = 0;
    cells.forEach(cell => {
        if(cell != null){
            counter++;
        }
    });
    if(counter === 9){
        display.textContent = `Draw!`;
        return true;
       }
    }

    const empty = cells => cells.length = 0;

    resBtn.addEventListener('click', () => {
      restart();
    })
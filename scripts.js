
  let display = document.querySelector('.display-div');
  const buttonsDiv = document.querySelector(".buttons");
  let buttons = Array.from(buttonsDiv.querySelectorAll("div"));

  buttons.map(button => {
     button.addEventListener("click", (e) => {
        switch (e.target.innerText){
            case "C":
                display.innerText = "";
                break;
            case "←":
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                }
                break;
            case "%":
                display.innerText = display.innerText / 100;
                break;
            case "=":
               if(display.innerText.includes("*")){
                   display.innerText = calcResult("*", display.innerText)
               } else if(display.innerText.includes("/")){
                   display.innerText = calcResult("/", display.innerText)
               } else if(display.innerText.includes("+")){
                   display.innerText = calcResult("+", display.innerText)
               } else if(display.innerText.includes("-")) {
                   display.innerText = calcResult("-", display.innerText)
               }
               break;
            default:
                display.innerText += e.target.innerText;
        }
     })
  })

  function calcResult(currChar, displayText){
        const index = displayText.indexOf(currChar);
        const firstExpression = displayText.substring(0, index);
        const secondExpression = displayText.substring(index+1);
        return eval(`${firstExpression} ${currChar} ${secondExpression}`);
  }
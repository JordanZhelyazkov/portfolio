
let display = document.querySelector('.display-div');
let buttons = Array.from(document.getElementsByClassName('buttonCalc'));

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







// let index = display.innerText.indexOf("*");
// let firstExp = display.innerText.substring(0, index);
// let secondExp = display.innerText.substring(index+1);
// display.textContent = eval("firstExp * secondExp");



























































// buttons.map(button => {
//     button.addEventListener("click", (e) => {
//         switch (e.target.innerText){
//             case "C":
//                 display.innerText = "";
//                 break;
//             case "←":
//                 try {
//                     if(display.innerText){
//                         display.innerText = display.innerText.slice(0, -1);
//                     }
//                 } catch {
//                     display.innerText = "Error!"
//                 }
//                 break;
//             case "=":
//                 display.innerText = eval(display.innerText);
//                 break;
//             case "%":
//                 display.innerText = display.innerText / 100;
//                 break;
//         default:
//           display.innerText += e.target.innerText;
//
//         }
//     })
// })
console.log('something')
const display = document.querySelector(".display");
const subDisplay = document.querySelector(".sub-display");
const subText = document.querySelector(".sub-display")
subDisplay.innerText = "DAYS : HOURS";

let timer = setInterval(function() {
        const countDownDate = new Date("Jan 1, 2022 00:00:00");
        let currentTime = new Date();
        let distanceBetween = countDownDate.getTime() - currentTime.getTime();
        if (distanceBetween === 0) {
            alert('Happy New Year');
        }
        let days = Math.floor(distanceBetween / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distanceBetween / (1000 * 60 * 60 * 24)) * 24);
        let result = `${days}:${hours}`;

        if(distanceBetween < 0){
            clearInterval(timer);
        }
            return display.innerHTML = result;
        }, 1000 );
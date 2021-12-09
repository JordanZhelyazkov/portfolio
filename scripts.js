console.log('something');
const display = document.querySelector(".display");
const subDisplay = document.querySelector(".sub-display");
subDisplay.innerText = "DAYS:HOURS:MINUTES:SECONDS";

   let timer = setInterval(function() {
        let nextYear = new Date().getFullYear() + 1;
        let countDownDate = new Date(`Jan 1, ${nextYear} 00:00:00`);
        let currentTime = new Date();
        let distanceBetween = countDownDate.getTime() - currentTime.getTime();
        let days = Math.floor(distanceBetween / (1000 * 60 * 60 * 24));
        let getTheRest = getHoursAndSeconds(days);
        let result = `${days} ${getTheRest}`;
            return display.innerHTML = result;
        }, 1000 );


   function getHoursAndSeconds(days) {
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        hours = (24 - hours) - 1;
        minutes = (60 - minutes) - 1;
        seconds = (60 - seconds) - 1;
           if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
               alert('Happy New Year')
           }
            return `: ${smallerThanTen(hours)} : ${smallerThanTen(minutes)} : ${smallerThanTen(seconds)}`;
   }

   function smallerThanTen(num) {
       if(num < 10){
           num = "0" + num;
       }
       return num
   }
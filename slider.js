const slideContainer = document.querySelector('.images-slider');
const slideImages = document.querySelectorAll('.images-slider img');


const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;

const size = slideImages[0].clientWidth;

slideContainer.style.transform = "translateX(" + (-size * counter) + "px)";

prevBtn.addEventListener("click", () => {
    if(counter <= 0) { return }
    slideContainer.style.transition = "0.5s ease-in-out";
    counter--;
    slideContainer.style.transform = "translateX(" + (-size * counter) + "px)";
})

nextBtn.addEventListener("click", () => {
    if(counter >= slideImages.length - 1) { return }
    slideContainer.style.transition = "0.5s ease-in-out";
    counter++;
    slideContainer.style.transform = "translateX(" + (-size * counter) + "px)";
})

slideContainer.addEventListener("transitionend", () => {

    if(slideImages[counter].id === 'last-img'){
        slideContainer.style.transition = 'none';
        counter = slideImages.length -2;
        slideContainer.style.transform = "translateX(" + (-size * counter) + "px)";

    }

    if(slideImages[counter].id === 'first-img'){
        slideContainer.style.transition = 'none';
        counter = slideImages.length - counter;
        slideContainer.style.transform = "translateX(" + (-size * counter) + "px)";

    }
})
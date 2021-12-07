console.log('something');

const slideContainer = document.querySelector('.images-slider');
const slideImages = slideContainer.querySelectorAll('img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let counter = 1;
const size = slideImages[0].clientWidth;

setTransform(slideContainer, counter);

prevBtn.addEventListener("click", () => {
    if(counter <= 0) {
        return;
    }
      setTransition(slideContainer, counter, slideImages);
    counter--;
      setTransform(slideContainer, counter);
})

nextBtn.addEventListener("click", () => {
    if(counter >= slideImages.length - 1) { return }
      setTransition(slideContainer, counter, slideImages);
    counter++;
      setTransform(slideContainer, counter);
})

slideContainer.addEventListener("transitionend", () => {
    setTransition(slideContainer, counter, slideImages);
    if(slideImages[counter].id === 'last-img') {
        counter = slideImages.length -2;
    }
    if(slideImages[counter].id === 'first-img') {
        counter = slideImages.length - counter;
    }
      setTransform(slideContainer, counter);
})

function setTransition(target, count, picturesContainer) {
    if(picturesContainer[count].id === 'first-img' || picturesContainer[count].id === 'last-img') {
        target.style.transition = "none";
    } else {
        target.style.transition = "0.5s ease-in-out";
    }
        return target;
}

function setTransform(target, count) {
    target.style.transform = "translateX(" + (-size * count) + "px)";
        return target;
}
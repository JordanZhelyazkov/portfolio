console.log('something')

const images = [
    "https://cdn.pixabay.com/photo/2021/08/30/21/48/ferris-wheel-6587185_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/01/13/11/43/turtle-1137608_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/04/10/07/17/yorkie-5024336_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/08/10/20/52/mixing-1584267_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/03/07/04/37/digitization-4908699_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/04/05/01/09/aerial-2203634_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/03/01/18/09/skiing-6060431_960_720.jpg",
     "https://cdn.pixabay.com/photo/2021/11/25/07/18/beach-6822823_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/11/04/18/34/yorkshire-terrier-6769032_960_720.jpg",


];

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const mainContainer = document.querySelector(".container");
const currImg = document.querySelector('#currImg');

let counter = 0;

prevBtn.addEventListener('click', () => {

    if (counter === 0) {
        return
    }
    counter--;
    currImg.src = images[counter];

})

nextBtn.addEventListener("click", () => {

    if (counter === images.length - 1) {
        return
    }
    counter++
    currImg.src = images[counter];

})
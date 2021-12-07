console.log('something')

const accordItms = document.querySelectorAll('.accordionItem');




accordItms.forEach(acc=> {
    acc.addEventListener('click', toggleItem)

});

function toggleItem(event){

    closeAllOnClick();

    if(event.target.nodeName === "DIV"){
        const divPar = event.target.children[1];
        divPar.style.display = "block";
    } else  if (event.target.nodeName === "H3") {
        const h3SiblingPar = event.target.nextElementSibling;
        h3SiblingPar.style.display = "block";
    }

}

function closeAllOnClick(){
    const paragraphsVisible = document.querySelectorAll('.content');
    paragraphsVisible.forEach(par => par.style.display = "none");
}
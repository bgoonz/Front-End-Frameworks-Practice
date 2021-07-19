$(function(){
    console.log('Document is ready to use');
})

document.addEventListener("DOMContentLoaded",pageLoadedFunction('1'));

document.onload = pageLoadedFunction('2');

function pageLoadedFunction(num){
    console.log("DOM is ready to use "+num);
}
//https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
const menuHamburguer = document.querySelector("#hamburguer");
const menu = document.querySelector("#menu2");
let menuButtons = document.querySelectorAll("#menu2 a");
const menu1 = document.querySelector("#menu1");

var windowWidth = window.innerWidth;
var pw=600;
let windowS = true;

window.addEventListener("resize", windowResized);

document.addEventListener('DOMContentLoaded', function() {
    if (windowWidth<pw) {
        menu1.classList.toggle(token= 'hidden')
        windowS=true;
    } else {
        menuHamburguer.classList.toggle(token= 'hidden')
        menu.classList.toggle(token= 'hidden')
        windowS=false;
    }
});

menuHamburguer.addEventListener(type='click', listerner=() => { 
    toggleActive();
});
menuButtons[0].addEventListener(type='click', listerner=() => { 
    toggleActive();
});

menuButtons[1].addEventListener(type='click', listerner=() => { 
    toggleActive();
});
menuButtons[2].addEventListener(type='click', listerner=() => { 
    toggleActive();
});


function windowResized() {
    windowWidth = window.innerWidth;
    if ((windowWidth<pw && (windowS == false)) || (windowWidth>pw && (windowS == true))) {
        toggleHidden();
        removeActive();
        windowS = !windowS;
    }
}

function toggleActive() {
    menuHamburguer.classList.toggle(token= 'active')
    menu.classList.toggle(token= 'active')
}

function removeActive() {
    menuHamburguer.classList.remove(token= 'active')
    menu.classList.remove(token= 'active')
}

function toggleHidden() {
    menu1.classList.toggle(token= 'hidden')
    menuHamburguer.classList.toggle(token= 'hidden')
    menu.classList.toggle(token= 'hidden')
}
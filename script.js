let menu = document.querySelector(".hamburger"),
    links = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    links.classList.toggle("responsive");
    menu.children[0].classList.toggle("toggle1");
    menu.children[1].classList.toggle("toggle2");
    menu.children[2].classList.toggle("toggle3");
})

var headersticky = "sticky";
var scrollTrigger = 40;

window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.querySelector(".nav-container").classList.add(headersticky);
    }else {
        document.querySelector(".nav-container").classList.remove(headersticky);
    }
}
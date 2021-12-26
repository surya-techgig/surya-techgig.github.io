var themeIcon = document.getElementById("theme-icon");
var headerTheme = document.querySelector(".navbar");
var heroTheme = document.querySelector(".hero");
var aboutTheme = document.querySelector(".about-widget");
var skillTheme = document.querySelector(".skills");
var contactTheme = document.querySelector(".contact-container");


themeIcon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    headerTheme.classList.toggle("bgtheme");
    heroTheme.classList.toggle("bgtheme");
    aboutTheme.classList.toggle("bgtheme");
    skillTheme.classList.toggle("bgtheme");
    contactTheme.classList.toggle("bgtheme");
    if(document.body.classList.contains("dark-theme")) {
        themeIcon.src = "./Theme/dark theme icon/moon.png"
    }else {
        themeIcon.src = "./Theme/dark theme icon/sun.png"
    }
}

var mediaQuery = window.matchMedia('(max-width: 425px)');

mediaQuery.onchange = (e) => {
    heroTheme.classList.toggle("bgimgtheme");
    console.log(heroTheme);
}
    
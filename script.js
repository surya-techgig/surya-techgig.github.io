// While Window Loading Preloader Script

window.onload = function() {
	document.querySelector(".loader_bg").style.display ='none';
	document.querySelector(".nav-container").style.display = "block";
	document.querySelector(".main-container").style.display = "block";
	document.querySelector(".about-container").style.display= "block";
	document.querySelector(".skills").style.display="block";
	document.querySelector(".contact").style.display="block";
	document.querySelector(".footer").style.display="block";
}

// Mobile Responsive Hamburger Menu Script

let menu = document.querySelector(".hamburger"),
    links = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    links.classList.toggle("responsive");
    menu.children[0].classList.toggle("toggle1");
    menu.children[1].classList.toggle("toggle2");
    menu.children[2].classList.toggle("toggle3");
});

// Header Sticky Starts

let headersticky = "sticky";
let scrollTrigger = 40;
let menubtn = "show";

window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.querySelector(".nav-container").classList.add(headersticky);
    }else {
        document.querySelector(".nav-container").classList.remove(headersticky);
    }
	if (window.scrollY > 550) {
		document.querySelector(".scroll-up-btn").classList.add(menubtn);
	}else {
		document.querySelector(".scroll-up-btn").classList.remove(menubtn);
	}
};

// Scrollup Button Script

let scrollup = document.querySelector(".scroll-up-btn")

scrollup.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

// Typing Animation Script 

var typed = new Typed(".typing", {
	strings: ["Youtuber", "FrontEnd Developer", "Freelauncer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

var typed = new Typed(".typing-2", {
	strings: ["Youtuber", "FrontEnd Developer", "Freelauncer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

// Contact Form Validation Script

var form = document.getElementById("my-form");
async function handleSubmit(event) {
	var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	event.preventDefault();
	document.querySelector("#submitBtn").innerHTML = "SENDING ...";
	if (document.querySelector("#NAME").value.trim().length == 0) {
		isMessage("Please Fill out your Name", "#fec303");
	} else if (!emailRegEx.test(document.querySelector("#EMAIL").value)) {
		isMessage("Please Check your Email Address", "#fec303");
	} else if (document.querySelector("#MESSAGE").value.trim().length == 0) {
		isMessage("Please Fill out your Message", "#fec303");
	} else {
		var data = new FormData(event.target);
		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				isMessage("Thanks for your submission!", "#17ad11");
				form.reset();
			})
			.catch((error) => {
				isMessage(
					"Oops! There was a problem submitting your form",
					"#fec303"
				);
			});
	}
}
function isMessage(Value, Color) {
	var status = document.querySelector("#form-status");
	status.innerHTML = Value;
	status.style.display = "block";
	status.style.backgroundColor = Color;
	document.querySelector("#submitBtn").innerHTML = "SEND";
}
form.addEventListener("submit", handleSubmit);
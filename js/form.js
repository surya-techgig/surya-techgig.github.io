var form = document.getElementById("contactform");
async function handleSubmit(event) {
	var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	event.preventDefault();
	document.querySelector("#submitBtn").innerHTML = "SENDING ...";
	if (document.querySelector("#name").value.trim().length == 0) {
		isMessage("Please Fill out your Name", "#E1E8EB");
	} else if (!emailRegEx.test(document.querySelector("#email").value)) {
		isMessage("Please Check your Email Address", "#E1E8EB");
	} else if (document.querySelector("#comments").value.trim().length == 0) {
		isMessage("Please Fill out your Message", "#E1E8EB");
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
					"red"
				);
			});
	}
}
function isMessage(Value, Color) {
	var status = document.querySelector("#form-status");
	status.innerHTML = Value;
	status.style.display = "block";
	status.style.color = Color;
	document.querySelector("#submitBtn").innerHTML = "Send";
}
form.addEventListener("submit", handleSubmit);
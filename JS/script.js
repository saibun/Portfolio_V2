function toggleFunc(){
	const menu = document.getElementById("menu-links");
	const icon = document.getElementById("hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}
function resume() {
    window.open("./documents/UpdateResume280723.pdf");
}
function emailMe() {
    location.href = "mailto:someone@example.com";
}
function linkdin() {
    window.open("https://www.linkedin.com/in/saikat-chatterjee-55bb96200/");
}

function github() {
    window.open("https://github.com/saibun");
}
function youtube() {
    window.open("https://www.youtube.com/channel/UC03zwfNw0932w92jn9yglgg");
}
function getElement(query) {
	return document.querySelector(query);
}

function pullOutMenu() {
	var toggleMenu = getElement(".side-menu_toggle"),
	menu = getElement(".side-menu"),
	hamburger = getElement(".hamburger-btn");
	hamburger.onclick = function() {
		toggleMenu.classList.toggle("side-menu_toggle_active");
		menu.classList.toggle("side-menu_active");
		hamburger.classList.toggle("hamburger-btn_closed");
		document.body.classList.toggle("body-active");
	};
}

function resizeToggleMenu() {
	var toggleMenu = document.querySelector(".side-menu_toggle"),
	bodyRect = document.body.getBoundingClientRect(),
	toggleMenuRect = toggleMenu.getBoundingClientRect();
	var offset = toggleMenuRect.top - bodyRect.top;
	var menuWidth = toggleMenu.style.width;
	//var screenH = document.querySelector(".introduction__side").style.height;
	var tMenuWidth = document.querySelector(".introduction__welcome").style.width;
	if(offset >= screen.height) {
		toggleMenu.style.width = '100%';
		console.log("LONGER");
	} else {
		toggleMenu.style.width = tMenuWidth;
	}
	console.log("OFFSET " + offset);
	//console.log("SCREENH" + screenH);
}

let stateCheck = setInterval(() => {
	resizeToggleMenu();
}, 100);

function scrollAnim() {

}

pullOutMenu();
scrollAnim();

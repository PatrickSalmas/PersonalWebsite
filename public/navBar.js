var loadTime = 400;  //the amount of time we want to wait when things load onto screen
var fadeTime = 500;  //1500 == 1.5s (the amount of time we need to wait for things to fade offscreen)
					 //this time is based on the transition speeds being used
					 
loadTime = 0;
fadeTime = 0;

var backgroundColor = "white";
var navColor = "#24252A";
var textColor = "#7f7f7f";
var textHoverColor = "#0088a9";

var allTransition = "all 0.85s ease 0s";

//Booleans to determine what is currently on screen
var defaultStyle = 2;  //The index of the default style sheet in document.styleSheets

function initLoad() {
	// homepageOnScreen = true;
	// defaultStyle = document.styleSheets.length-1;
	
	let i;
	for(i = 1; i < document.styleSheets.length; i++) {
		document.styleSheets[i].disabled = true;
	}
	document.styleSheets[defaultStyle].disabled = false;
}

function dispContent(contentId,navOp) {
	// console.log(this);
	removeElements();
	let content = document.getElementById(contentId);
	
	document.getElementById(navOp).classList.add('active-nav');
	content.classList.add('to-remove');
	
	content.style.opacity = 0.0;
	content.style.removeProperty('display');
	
	setTimeout(function() {
		content.style.opacity = 100;
	}, 20);
}

//"Refactor prototype" ... i guess
//Clears content from screen with class name of 'to-remove'
//"Deactivates" the active nav option (removes hover color)
function removeElements() {
	let toFade = document.getElementsByClassName('to-remove');
	while(toFade.length != 0) {
		toFade[0].style.opacity = 0.0;
		toFade[0].style.display = "none";
		toFade[0].classList.remove('to-remove');
	}
	
	let activeNav = document.getElementsByClassName('active-nav');
	while(activeNav.length != 0) {
		activeNav[0].classList.remove('active-nav');
	}
}

function changeStyle(scheme) {
	// var stylesheet = document.styleSheets[0];
	// stylesheet.disabled = true;
	let stylesheet;
	let i;
	for(i = 1; i < document.styleSheets.length; i++) {
		document.styleSheets[i].disabled = true;
	}
	
	if(scheme == "blue") {
		document.styleSheets[1].disabled = false;
	} else if(scheme == "warm") {
		document.styleSheets[2].disabled = false;
	}
}

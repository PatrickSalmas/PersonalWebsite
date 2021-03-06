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

var onHomeScreen = true;

var defaultStyle = 3;  //The index of the default style sheet in document.styleSheets

function dispContent(contentClass,navOp,version) {
	if(onHomeScreen) {
		document.body.style.removeProperty('overflow');
		document.body.style.position = "initial"
		onHomeScreen = false;
	} 
	
	if(contentClass === "experience-container") {
		window.addEventListener('resize', adjustWidth);
		window.addEventListener('resize', adjustImages);
		window.addEventListener('resize',adjustFooter);
	} else {
		window.removeEventListener('resize', adjustWidth);
		window.removeEventListener('resize', adjustImages);
		window.removeEventListener('resize', adjustFooter);
		document.getElementById('footer').style = "";
	}
	
	if(version === "mobile") {
		document.getElementById('menu-checkbox').click();
	}
	
	if(contentClass === "experience-container") {
		adjustWidth();
	}
	
	removeElements();
	let content = document.getElementsByClassName(contentClass);
	
	document.getElementById(navOp).classList.add('active-nav');
	
	let i;
	for(i = 0; i < content.length; i++) {
		content[i].classList.add('to-remove');
		content[i].style.opacity = 0.0;
		content[i].style.removeProperty('display');
	}
	
	if(contentClass === "experience-container") {
		adjustFooter();
		adjustImages();
	}
	
	setTimeout(function() {
		for(i = 0; i < content.length; i++) {
			content[i].style.opacity = 100;
		}
	}, 20);
}

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

function handleMenu() {
	//Consider checking if the browser is safari and only doing this in that case
	if(checkMobile()) {
		let menuCheck = document.getElementById('menu-checkbox');
		if(menuCheck.checked === false) {
			document.body.style.overflowX = "hidden";
			setTimeout(function() {
				if(!onHomeScreen) {
					document.body.style.position = "initial";
				}
				document.getElementById('menu').style.display = "none";
				document.body.style.overflowX = "initial";
			}, 500);
		}
		else if(menuCheck.checked === true) {
			menuCheck.checked = false;
			document.body.style.overflowX = "hidden";
			document.body.style.position = "fixed"
			document.getElementById('menu').style.display = "block";
			setTimeout(function() {
				menuCheck.checked = true;
			}, 1);
			setTimeout(function() {
				menuCheck.checked = true;
				document.body.style.overflowX = "initial";
				if(!onHomeScreen) {
					document.body.style.position = "initial";
				}
			}, 500);
		}
	}
}

function changeStyle() {
	let scheme = document.getElementById('scheme-select').value;
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

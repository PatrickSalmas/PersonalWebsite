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
var resumeOnScreen;
var projectsOnScreen;
var experienceOnScreen;
var homepageOnScreen;
var defaultStyle = 2;  //The index of the default style sheet in document.styleSheets

function initLoad() {
	homepageOnScreen = true;
	// defaultStyle = document.styleSheets.length-1;
	
	let i;
	for(i = 1; i < document.styleSheets.length; i++) {
		document.styleSheets[i].disabled = true;
	}
	document.styleSheets[defaultStyle].disabled = false;
}

function displayContent(contentType) {
	let waitTime = 0;	
	removeElements();
	// waitTime = clearScreen();
	
	let contentDiv;
	let activeNav;
	
	if(contentType == "proj") {
		activeNav = document.getElementById('projNav');
		activeNav.classList.add('active-nav');
		contentDiv = document.getElementById('project-container');
		projectsOnScreen = true;
	} else {
		activeNav = document.getElementById('expNav');
		activeNav.classList.add('active-nav');
		contentDiv = document.getElementById('experience-container');
		experienceOnScreen = true;
	}
	
	contentDiv.classList.add('to-remove');
	setTimeout(function() {
		contentDiv.style.opacity = 0.0;			
		contentDiv.style.removeProperty('display');
	}, waitTime);
	
	setTimeout(function() {
		contentDiv.style.opacity = 100;
	}, waitTime+20);
}

// function clearScreen() {
	// removeElements();
	
	// // let waitTime;
	// // if (homepageOnScreen) {
		// // fadeHomeImg();
		// // waitTime = fadeTime;
	// // } else if(resumeOnScreen) {
		// // // resumeOnScreen = false;
		// // waitTime = fadeTime;  //We need to increase the loadTime to account for the
							  // // //transition speed so that whatever is fading off the screen
							  // // //has enough time. May want to eventually decrease the transition speed
	// // } else if(projectsOnScreen) {
		// // // projectsOnScreen = false;
		// // waitTime = fadeTime;
	// // } else if(experienceOnScreen) {
		// // // experienceOnScreen = false;
		// // waitTime = fadeTime;
	// // } else {
		// // waitTime = loadTime;
	// // }
	
	// // return waitTime;
	// return 0;
// }

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

function fadeHomeImg() {
	let homeImg = document.getElementById('homeImg');
	let homeImgDiv = document.getElementById('homeImgDiv');
	
	setTimeout(function() {
		// homeImg.style.opacity = 0.0;
	}, 0);
	
	setTimeout(function() {
		// homeImgDiv.style.display = "none";
	}, fadeTime);
	homepageOnScreen = false;
}

function loadHomeContent() {
	//fade current content
	let waitTime;
	if(projectsOnScreen) {
		fadeProjects();
		waitTime = fadeTime;
	} else if(experienceOnScreen) {
		fadeExperience();
		waitTime = fadeTime;
	}
	
	//Have no default content to load, but here is where we would want to handle that logic
	//Also want to handle the logic for loading the default navOptions
	loadDefaultNav(waitTime);
	loadHomeImg();
}

function loadHomeImg() {
	let homeImg = document.getElementById('homeImg');
	let homeImgDiv = document.getElementById('homeImgDiv');
	
	setTimeout(function() {
		homeImgDiv.style.removeProperty('display');
	}, loadTime);
	
	setTimeout(function() {
		homeImg.style.opacity = 100;
	}, loadTime+20);
	homepageOnScreen = true;
}

function loadResume() {
	let waitTime = 0;
	removeElements();
	// waitTime = clearScreen();

	let activeNav = document.getElementById('resumeNav'); 
	// activeNav.style.color = textHoverColor;
	activeNav.classList.add('active-nav');
	
	
	let resume = document.getElementById('resume');
	resume.classList.add('to-remove');
	
	setTimeout(function() {
		resume.style.removeProperty('display');
		resume.style.opacity = 0.0;
		resume.style.transition = allTransition;
	}, waitTime);
	
	setTimeout(function() {
		resume.style.opacity = 100;
	}, waitTime+20);
	
	resumeOnScreen = true;
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

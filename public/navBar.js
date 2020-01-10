var loadTime = 400;  //the amount of time we want to wait when things load onto screen
var fadeTime = 850;  //1500 == 1.5s (the amount of time we need to wait for things to fade offscreen)
					 //this time is based on the transition speeds being used

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
var defaultStyle;

function initLoad() {
	homepageOnScreen = true;
	defaultStyle = document.styleSheets.length-1;
	
	let i;
	for(i = 1; i < document.styleSheets.length; i++) {
		document.styleSheets[i].disabled = true;
	}
	document.styleSheets[defaultStyle].disabled = false;
}

function displayContent(contentType) {
	let waitTime;	
	waitTime = clearScreen();
	
	let contentDiv;
	
	if(contentType == "proj") {
		document.getElementById('projNav').style.color = textHoverColor;
		contentDiv = document.getElementById('project-container');
		projectsOnScreen = true;
	} else {
		document.getElementById('expNav').style.color = textHoverColor;
		contentDiv = document.getElementById('experience-container');
		experienceOnScreen = true;
	}
	
	setTimeout(function() {
		contentDiv.style.opacity = 0.0;			
		contentDiv.style.removeProperty('display');
	}, waitTime);
	
	setTimeout(function() {
		contentDiv.style.opacity = 100;
	}, waitTime+20);
}

function clearScreen() {
	let waitTime;
	if (homepageOnScreen) {
		fadeHomeImg();
		waitTime = fadeTime;
	} else if(resumeOnScreen) {
		document.getElementById('resumeNav').style.removeProperty('color');
		fadeResume();
		waitTime = fadeTime;  //We need to increase the loadTime to account for the
							  //transition speed so that whatever is fading off the screen
							  //has enough time. May want to eventually decrease the transition speed
	} else if(projectsOnScreen) {
		document.getElementById('projNav').style.removeProperty('color');
		fadeProjects();
		waitTime = fadeTime;
	} else if(experienceOnScreen) {
		document.getElementById('expNav').style.removeProperty('color');
		fadeExperience();
		waitTime = fadeTime;
	} else {
		waitTime = loadTime;
	}
	
	return waitTime;
}

function fadeHomeImg() {
	let homeImg = document.getElementById('homeImg');
	let homeImgDiv = document.getElementById('homeImgDiv');
	
	setTimeout(function() {
		homeImg.style.opacity = 0.0;
	}, 0);
	
	setTimeout(function() {
		homeImgDiv.style.display = "none";
	}, fadeTime);
	homepageOnScreen = false;
}

function fadeResume() {
	let resume = document.getElementById('resume');
	setTimeout(function() {
		resume.style.opacity = 0.0;
	}, 0);
	
	setTimeout(function() {
		resume.style.display = "none";
	}, fadeTime);
	
	resumeOnScreen = false;
}

function fadeExperience() {
	let expContainer = document.getElementById('experience-container');
	setTimeout(function() {
		expContainer.style.opacity = 0.0;
	}, 0);
	
	setTimeout(function() {
		expContainer.style.display = "none";
	}, fadeTime);
	experienceOnScreen = false;
}

function fadeProjects() {
	let projContainer = document.getElementById('project-container');
	setTimeout(function() {
		projContainer.style.opacity = 0.0;
	}, 0);
	
	setTimeout(function() {
		projContainer.style.display = "none"
	}, fadeTime);
	projectsOnScreen = false;
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
	let waitTime;
	waitTime = clearScreen();

	document.getElementById('resumeNav').style.color = textHoverColor;
	let resume = document.getElementById('resume');
	
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

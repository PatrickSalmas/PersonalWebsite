var loadTime = 500;  //the amount of time we want to wait when things load onto screen
var fadeTime = 1500;  //1500 == 1.5s (the amount of time we need to wait for things to fade offscreen)
					 //this time is based on the transition speeds being used

var backgroundColor = "white";
var navColor = "#24252A";
var textColor = "#7f7f7f";
var textHoverColor = "#0088a9";

var dropdownHeight = "250px";

var colorTransition = "color 1.5s";
var opacityTransition = "opacity 1.5s";
var allTransition = "all 1.5s ease 0s";

//Booleans to determine what is currently on screen
var resumeOnScreen;
var projectsOnScreen;
var experienceOnScreen;
var homepageOnScreen;

function initLoad() {
	homepageOnScreen = true;
}

function displayContent(pos,contentType) {
	let waitTime;
	
	waitTime = clearScreen();
	
	let content;
	let imgs;
	
	if(contentType == "proj") {
		document.getElementById('projNav').style.color = textHoverColor;
		content = document.getElementsByClassName('projContent');
		imgs = document.getElementsByClassName('projectImg');
		projectsOnScreen = true;
	} else {
		document.getElementById('expNav').style.color = textHoverColor;
		content = document.getElementsByClassName('expContent');
		imgs = document.getElementsByClassName('expImg');
		experienceOnScreen = true;
	}
	
	setTimeout(function() {
		let i;
		for(i = 0; i < content.length; i++) {
			content[i].style.removeProperty('display');
			content[i].children[0].style.color = backgroundColor;
			content[i].children[0].style.transition = colorTransition

			imgs[i].style.opacity = 0.0;
			imgs[i].style.transition = opacityTransition

		}
	}, waitTime);
	
	setTimeout(function() {
		let i;
		for(i = 0; i < content.length; i++) {
			content[i].children[0].style.color = navColor;
			imgs[i].style.opacity = 100;
		}
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
	let expContent = document.getElementsByClassName('expContent');
	let expImgs = document.getElementsByClassName('expImg');
	let i;
	setTimeout(function() {
		for(i = 0; i < expContent.length; i++) {
			expContent[i].children[0].style.color = backgroundColor;
			expImgs[i].style.opacity = 0.0;
		}
	}, 0);
	
	setTimeout(function() {
		for(i = 0; i < expContent.length; i++) {
			expContent[i].style.display = "none";
		}
	}, fadeTime);
	experienceOnScreen = false;
}

function fadeProjects() {
	let projContent = document.getElementsByClassName('projContent');
	let projImgs = document.getElementsByClassName('projectImg');
	let i;
	setTimeout(function() {
		for(i = 0; i < projContent.length; i++) {
			projContent[i].children[0].style.color = backgroundColor;
			projImgs[i].style.opacity = 0.0;
		}
	}, 0);
	
	setTimeout(function() {
		for(i = 0; i < projContent.length; i++) {
			projContent[i].style.display = "none";
		}
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
		// homeImg.style.opacity = 0.0;
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
		// resumeNav.style.transition = allTransition;
	}, waitTime);
	
	setTimeout(function() {
		resume.style.opacity = 100;
	}, waitTime+20);
	
	resumeOnScreen = true;
}

function loadHomeLink(waitTime) {
	let homeLink = document.getElementById('homeLink');
	
	setTimeout(function() {
		homeLink.style.removeProperty('display');
		homeLink.style.color = navColor;
		homeLink.style.transition = colorTransition;
	}, waitTime);
	
	setTimeout(function() {
		homeLink.style.color = textColor;
	}, waitTime+20);
}

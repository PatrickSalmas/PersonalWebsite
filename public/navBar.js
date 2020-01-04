var loadTime = 500;  //the amount of time we want to wait when things load onto screen
var fadeTime = 1500;  //1500 == 1.5s (the amount of time we need to wait for things to fade offscreen)
					 //this time is based on the transition speeds being used

var backgroundColor = "white";
var navColor = "black";
var textColor = "#7f7f7f";

var dropdownHeight = "250px";

var colorTransition = "color 1.5s";
var opacityTransition = "opacity 1.5s";

//Booleans to determine what is currently on screen
var resumeOnScreen;
var projectsOnScreen;
var experienceOnScreen;
var homepageOnScreen;

function initLoad() {
	homepageOnScreen = true;
}

function displayDropdownContent(pos,contentType) {
	let waitTime;
	fadeNavOptions();
	fadeDropdowns();
	
	if(resumeOnScreen) {
		fadeResume();
		waitTime = fadeTime;  //We need to increase the loadTime to account for the
							  //transition speed so that whatever is fading off the screen
							  //has enough time. May want to eventually decrease the transition speed
		loadHomeLink(waitTime);
	} else if(homepageOnScreen) {
		fadeHomeImg();
		waitTime = fadeTime;
		loadHomeLink(waitTime);
	} else {
		waitTime = loadTime;
		loadHomeLink(waitTime);
	}
	
	if(pos != 99 && pos != 0) {
		//do positioning stuff here
		orderContent(pos,contentType);
	}

	let options;
	let content;
	let imgs;
	
	if(contentType == "proj") {
		options = document.getElementsByClassName('projOpt');
		content = document.getElementsByClassName('projContent');
		imgs = document.getElementsByClassName('projectImg');
		projectsOnScreen = true;
	} else {
		options = document.getElementsByClassName('expOpt');
		content = document.getElementsByClassName('expContent');
		imgs = document.getElementsByClassName('expImg');
		experienceOnScreen = true;
	}
	
	setTimeout(function() {
		let i;
		for(i = 0; i < options.length; i++) {
			options[i].style.removeProperty('display');
			options[i].style.transition = colorTransition
			
			content[i].style.removeProperty('display');
			content[i].children[0].style.color = backgroundColor;
			content[i].children[0].style.transition = colorTransition

			imgs[i].style.opacity = 0.0;
			imgs[i].style.transition = opacityTransition

		}
	}, waitTime);
	
	setTimeout(function() {
		let i;
		for(i = 0; i < options.length; i++) {
			options[i].style.color = textColor;
			content[i].children[0].style.color = navColor;
			imgs[i].style.opacity = 100;
		}
	}, waitTime+20);
	
	
}

function orderContent(pos,contentType) {
	let navLinks = document.getElementsByClassName('navLinks');
	let contentDiv = document.getElementById('content');
	let options;
	let content;
	if(contentType == "proj") {
		options = document.getElementsByClassName('projOpt');
		content = document.getElementsByClassName('projContent');
	} else {
		options = document.getElementsByClassName('expOpt');
		content = document.getElementsByClassName('expContent');
	}
	
	navLinks[0].insertBefore(options[pos],options[0]);
	contentDiv.insertBefore(content[pos],content[0]);

	
}

function restoreExperienceOrder() {
	let navLinks = document.getElementsByClassName('navLinks');
	let expOptions = document.getElementsByClassName('expOpt');
	
	let content = document.getElementById('content');
	let expContent = document.getElementsByClassName('expContent');
	let i;
	for(i = expOptions.length-1; i >= 0; i--) {
		let optId = "expOpt"+i.toString(10);
		let currOpt = document.getElementById(optId);
		navLinks[0].insertBefore(currOpt,expOptions[0]);
		
		let expId = "exp"+i.toString(10);
		let currExp = document.getElementById(expId);
		content.insertBefore(currExp,expContent[0]);
	}
}

function restoreProjectOrder() {
	let navLinks = document.getElementsByClassName('navLinks');
	let projOptions = document.getElementsByClassName('projOpt');
	
	let content = document.getElementById('content');
	let projContent = document.getElementsByClassName('projContent');
	let i;
	for(i = projOptions.length-1; i >= 0; i--) {
		let optId = "pOpt"+i.toString(10);
		let currOpt = document.getElementById(optId);
		navLinks[0].insertBefore(currOpt,projOptions[0]);
		
		let projId = "proj"+i.toString(10);
		let currProj = document.getElementById(projId);
		content.insertBefore(currProj,projContent[0]);
	}	
}


function fadeNavOptions() {
	let navOptions = document.getElementsByClassName('navOpt');
	let i;
	while(navOptions.length > 0) {
		navOptions[0].classList.add('navFade');
		navOptions[0].classList.remove('navOpt');
	}

	setTimeout(function() { 
			let navOptions = document.getElementsByClassName('navFade');
			let i = 0; 
			for(i = 0; i < navOptions.length; i++) {
				navOptions[i].style.display = "none";
			}
		}, loadTime);
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

function fadeDropdowns() {
	let dropdowns = document.getElementsByClassName('dropdown-content');
	let i;
	for(i = 0; i < dropdowns.length; i++) {
		// dropdowns[i].style.height = 0;
		dropdowns[i].style.pointerEvents = "none";
	}
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
	let expOptions = document.getElementsByClassName('expOpt');
	let expContent = document.getElementsByClassName('expContent');
	let expImgs = document.getElementsByClassName('expImg');
	let homeLink = document.getElementById('homeLink');
	let i;
	setTimeout(function() {
		homeLink.style.color = navColor;
		for(i = 0; i < expOptions.length; i++) {
			expOptions[i].style.color = navColor;
			expContent[i].children[0].style.color = backgroundColor;
			expImgs[i].style.opacity = 0.0;
		}
	}, 0);
	
	setTimeout(function() {
		homeLink.style.display = "none";
		for(i = 0; i < expOptions.length; i++) {
			expOptions[i].style.display = "none";
			expContent[i].style.display = "none";
		}
		restoreExperienceOrder();
	}, fadeTime);
	experienceOnScreen = false;
}

function fadeProjects() {
	let projOptions = document.getElementsByClassName('projOpt');
	let projContent = document.getElementsByClassName('projContent');
	let projImgs = document.getElementsByClassName('projectImg');
	let homeLink = document.getElementById('homeLink');
	let i;
	setTimeout(function() {
		homeLink.style.color = navColor;
		for(i = 0; i < projOptions.length; i++) {
			projOptions[i].style.color = navColor;
			projContent[i].children[0].style.color = backgroundColor;
			projImgs[i].style.opacity = 0.0;
		}
	}, 0);
	
	setTimeout(function() {
		homeLink.style.display = "none";
		for(i = 0; i < projOptions.length; i++) {
			projOptions[i].style.display = "none";
			projContent[i].style.display = "none";
		}
		restoreProjectOrder();
	}, fadeTime);
	projectsOnScreen = false;
}

function loadDefaultNav(waitTime) {
	let navOptions = document.getElementsByClassName('defaultNav');
	let dropdowns = document.getElementsByClassName('dropdown-content');
	let i;
	
	setTimeout(function() {
		for(i = 0; i < navOptions.length; i++) {
			navOptions[i].style.removeProperty('display');
			navOptions[i].style.color = navColor;
		}
		
		// for(i = 0; i < dropdowns[i]; i++) {
			// dropdowns[i].style.
		// }
	}, waitTime);
	
	setTimeout(function() {
		for(i = 0; i < navOptions.length; i++) {
			navOptions[i].style.color = textColor;
		}
		
		for(i = 0; i < dropdowns.length; i++) {
			dropdowns[i].style.removeProperty('pointer-events');
		}
	}, waitTime + 20);

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
	// restoreProjectOrder();
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
	if(homepageOnScreen) {
		fadeHomeImg();
		waitTime = fadeTime;
	} else {
		waitTime = loadTime;
	}
	
	let resume = document.getElementById('resume');
	
	setTimeout(function() {
		resume.style.removeProperty('display');
		resume.style.opacity = 0.0;
		resume.style.transition = opacityTransition;
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

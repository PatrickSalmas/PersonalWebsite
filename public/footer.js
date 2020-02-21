//Respresented in pixels
var footerHeight = 50;
var windowHeight = 0;

function placeFooter() {
	let footTop = (window.innerHeight-footerHeight).toString(10) + "px";
	document.getElementById('footer').style = "top: " + footTop;
	document.getElementById('footer').style.removeProperty('display');
}

function adjustFooter() {
	if(!onHomeScreen) {
		let footTop = (calcFooterPos() + footerHeight).toString(10)+"px";
		footer.style = "top: " + footTop;
	} else if(window.outerHeight != windowHeight) {
		placeFooter();
		windowHeight = window.outerHeight;
	}
}

function calcFooterPos() {
	let navBarHeight = document.getElementById('header').offsetHeight;
	// let navBarHeight = document.getElementById('header').getAttribute('height');
	
	let onScreenElems = document.getElementsByClassName('to-remove');
	let distanceDown = [];
	
	for(let i = 0; i < onScreenElems.length; i++) {
		distanceDown.push(onScreenElems[i].offsetTop + onScreenElems[i].offsetHeight + navBarHeight);
	}
	distanceDown.push(window.outerHeight);
	
	return Math.max(...distanceDown);
}

window.addEventListener('resize', adjustFooter);


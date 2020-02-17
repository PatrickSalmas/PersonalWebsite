//Respresented in pixels
var footerHeight = 65;


function placeFooter() {
	let footTop = (window.innerHeight-footerHeight).toString(10) + "px";
	document.getElementById('footer').style = "top: " + footTop;
	document.getElementById('footer').style.removeProperty('display');
}

// function adjustFooterOld() {
	// var body = document.body;
	// var html = document.documentElement;
	
	// var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       // html.clientHeight, html.scrollHeight, html.offsetHeight );

	// let footer = document.getElementById('footer');
	// let footTop = (height-footerHeight).toString(10) + "px";
	// console.log(height);
	// console.log(footTop);
	// footer.style = "top: " + footTop;
// }

function adjustFooter() {
	// console.log(calcFooterPos());
	let footer = document.getElementById('footer');
	let footTop = (calcFooterPos() + footerHeight).toString(10)+"px";
	footer.style = "top: " + footTop;
}

function calcFooterPos() {
	let navBarHeight = document.getElementById('header').offsetHeight;
	
	let onScreenElems = document.getElementsByClassName('to-remove');
	let distanceDown = [];
	
	for(let i = 0; i < onScreenElems.length; i++) {
		distanceDown.push(onScreenElems[i].offsetTop + onScreenElems[i].offsetHeight + navBarHeight);
		// console.log(distanceDown[i]);
		// console.log(onScreenElems[i]);
	}
	
	return Math.max(...distanceDown);
}

// window.onresize = resizeEvent();
window.addEventListener('resize', adjustFooter);


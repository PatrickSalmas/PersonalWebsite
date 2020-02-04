var bodyHeight = document.body.clientHeight;
var nameHeight = (bodyHeight / 2.90) + "px";
var profHeight = (bodyHeight / 2.25) + "px";
var underlineHeight = (bodyHeight / 2.58) + "px";

var underline = document.getElementsByClassName('underline');
for(let i = 0; i < underline.length; i++) {
	underline[i].style.marginTop = underlineHeight;
}

// alert(height);

function fadeinName(i,firstName) {
	setTimeout(function() {
		firstName[i].style.opacity = "1.0";
		firstName[i].style.display = "block";
		// firstName[i].style.marginTop = "30vh";
		// firstName[i].style.marginTop = "325px";
		firstName[i].style.marginTop = nameHeight;
	}, 200*i);
}

function fadeinProf(i,prof) {
	setTimeout(function() {
		prof[i].style.opacity = "1.0";
		prof[i].style.display = "block";
		// prof[i].style.marginTop = "45vh";
		// prof[i].style.marginTop = "420px";
		prof[i].style.marginTop = profHeight;
	}, 200*i);
}

function fadeinUnderline(i,underline) {
	setTimeout(function() {
		underline[i].style.opacity = "1.0";
		// underline[i].
	}, 10*i);
}

let i;
let firstName = document.getElementsByClassName('hide-myName');
for(i = 0; i < firstName.length; i++) {
	fadeinName(i,firstName);
}

let prof = document.getElementsByClassName('hide-prof');
let profTime = (prof.length+10)*200;
for(i = 0; i < prof.length; i++) {
	fadeinProf(i,prof);
}

setTimeout(function() {
	// let underline = document.getElementsByClassName('underline');
	for(i = 0; i < underline.length; i++) {
		let mLeft = (i*5) + 30;
		underline[i].style.marginLeft = parseFloat(mLeft,10) + "px";
		fadeinUnderline(i,underline);
	}
}, (prof.length/2) * 200);

setTimeout(function() {
	let myName = Array.from(document.getElementsByClassName('hide-myName'));
	let prof = Array.from(document.getElementsByClassName('hide-prof'));
	let underline = Array.from(document.getElementsByClassName('underline'));
	let intro = myName.concat(prof,underline);
	
	for(let i = 0; i < intro.length; i++) {
		intro[i].style.transition = "opacity 0.3s ease 0s";
	}
	
	for(let i = 0; i < myName.length; i++) {
		// intro[i].style.marginTop = "41.5vh";
	}
	
}, profTime);

	// for(let i = 0; i < intro.length; i++) {
		// intro[i].style.transition = "opacity 0.3s ease 0";
	// }
// }, (16*200)+(8*200));
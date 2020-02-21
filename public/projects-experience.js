var setWidth = 1125;
var colWidth = 545;
var gapWidth = 25;
var increment = 30;

function adjustWidth() {
	let width = window.innerWidth;
	
	if(width >= setWidth) {
		let leftCol = document.getElementsByClassName('column-left');
		let rightCol = document.getElementsByClassName('column-right');
		
		for(let i = 0; i < leftCol.length; i++) {
			leftCol[i].style.marginLeft = ((width - ((colWidth*2) + gapWidth)) / 2).toString(10) + "px";
		}
		
	}
}

window.addEventListener('resize', adjustWidth);
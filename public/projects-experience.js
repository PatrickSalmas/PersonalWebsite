var setWidth = 1125;
var colWidth = 545;
var gapWidth = 25;
var increment = 30;

var singleColWidth = 800;
var singleColumn = false;

function adjustWidth() {
	let width = window.innerWidth;
	let leftCol = document.getElementsByClassName('column-left');
	let rightCol = document.getElementsByClassName('column-right');
	
	if(width >= setWidth) {
		if(singleColumn) {
			singleColumn = false;
			restoreCols();
		}
		
		for(let i = 0; i < leftCol.length; i++) {
			leftCol[i].style.marginLeft = ((width - ((colWidth*2) + gapWidth)) / 2).toString(10) + "px";
		}
	} 
	else if(width <= singleColWidth) {
		if(!singleColumn) {
			singleColumn = true;
			reOrderCols();
			leftCol[0].style = "";
		}
	}
	else if(width < setWidth) {
		leftCol[0].style = "";
	}
	
}

// TODO: Function that reorders columns by "importance"
function reOrderCols() {
	
}

// TODO: Function that restores original column order
function restoreCols() {
	
}

window.addEventListener('resize', adjustWidth);
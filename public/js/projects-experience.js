var setWidth = 1125;
var colWidth = 545;
var gapWidth = 25;
var increment = 30;

var singleColWidth = 800;
var singleColumn = false;

var imgResizeWidth425 = 425;
var imgResizeWidth360 = 360;
var imgResizeWidth325 = 325;
var imgResizeWidth300 = 300;
var imgResizeWidth265 = 265;

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

function adjustImages() {
	let width = window.innerWidth;
	
	if(width <= imgResizeWidth425) {
		let imgs = document.querySelectorAll(".projects-experience .card-img");
		let newWidth = 250;
		
		if(width <= imgResizeWidth360) {
			newWidth = 225;
		} 
		if(width <= imgResizeWidth325) {
			newWidth = 200;
		}
		if(width <= imgResizeWidth300) {
			newWidth = 175;
		}
		if(width <= imgResizeWidth265) {
			newWidth = 150;
		}
		
		
		for(let i = 0; i < imgs.length; i++) {
			let style = window.getComputedStyle(imgs[i]);
			let imgWidth = style.getPropertyValue('width').substring(0,style.getPropertyValue('width').length-2);
			let imgHeight = style.getPropertyValue('height').substring(0,style.getPropertyValue('height').length-2);			
			if(imgWidth === undefined || imgHeight === null) {
				imgWidth = imgs[i].style.width.substring(0,imgs[i].style.width.length-2);
				imgHeight = imgs[i].style.height.substring(0,imgs[i].style.height.length-2);
			}
			
			let aspectRatio = imgWidth/imgHeight;
			
			let newHeight = newWidth / aspectRatio;
			
			imgs[i].style.width = newWidth.toString(10) + "px";
			imgs[i].style.height = newHeight.toString(10) + "px";
		}
	} else {
		let imgs = document.querySelectorAll(".projects-experience .card-img");
		for(let i = 0; i < imgs.length; i++) {
			imgs[i].style = "";
		}
	}
}

// TODO: Function that reorders columns by "importance"
function reOrderCols() {
	
}

// TODO: Function that restores original column order
function restoreCols() {
	
}
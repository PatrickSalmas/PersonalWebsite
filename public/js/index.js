document.body.style.overflow = "hidden";
window.onbeforeunload = function(event) {
	scroll(0,0);
}

placeFooter();
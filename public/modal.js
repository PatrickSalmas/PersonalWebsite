function loadModal(modalId) {
	document.getElementById('contact-modal-div').style.removeProperty('display');
	let modal = document.getElementById(modalId);
	disableBackground();
	disableBtnsLinks();
	
	let content = document.getElementById('content');
	let header = document.getElementById('header');

	setTimeout(function() {
		content.addEventListener("click", function() {
			closeModal(modalId);
		}, false);
		header.addEventListener("click", function() {
			closeModal(modalId);
		}, false);
		modal.addEventListener("click", function(ev) {
			ev.stopPropagation();
		}, false);
	}, 1);
	
	
	modal.show();
}

function closeModal(modalId) {
	document.getElementById('contact-modal-div').style.display = "none";
	enableBackground();
	enableBtnsLinks();
	
	let header = document.getElementsByTagName('header')[0];
	let newHeader = header.cloneNode(true);	
	header.parentNode.replaceChild(newHeader, header);
}

function disableBackground() {
	let backgroundItems = document.getElementsByClassName('to-remove');
	let headerItems = document.getElementsByTagName('header');
	for(let i = 0; i < backgroundItems.length; i++) {
		backgroundItems[i].classList.add('disabled');
	}
	for(let i = 0; i < headerItems.length; i++) {
		headerItems[i].classList.add('disabled');
	}
}

function enableBackground() {
	let disabled = document.getElementsByClassName('disabled');
	while(disabled.length != 0) {
		disabled[0].classList.remove('disabled');
	}		
}

function sendEmail() {
	window.location.href = "mailto:patricksalmas@gmail.com";
	closeModal();
}

function disableBtnsLinks() {
	let btns = document.getElementsByTagName('button');
	let links = document.getElementsByTagName('a');
	
	for(let i = 0; i < btns.length; i++) { 
		if(!btns[i].classList.contains('dialog-btn')) {
			btns[i].disabled = true; 
		}
	}
	for(let i = 0; i < links.length; i++) { 
		if(!links[i].classList.contains('dialog-btn')) {
			links[i].style.pointerEvents = "none"; 
		}
	}
}

function enableBtnsLinks() {
	let btns = document.getElementsByTagName('button');
	let links = document.getElementsByTagName('a');
	
	for(let i = 0; i < btns.length; i++) { 
		if(!btns[i].classList.contains('dialog-btn')) {
			btns[i].removeAttribute('disabled');
		}
	}
	for(let i = 0; i < links.length; i++) { 
		if(!links[i].classList.contains('dialog-btn')) {
			links[i].style.pointerEvents = "auto"; 
		}
	}
}
//
// Toggle class when opening mobile menu (changing icon)
//

var el = document.querySelector('.menu-toggle');

el.onclick = function() {
  el.classList.toggle('menu-toggle--open');
}


//
// Load images in a modal
//

// Store body to apply styles when show the modal
const body = document.querySelector(`body`);

// Store all images we plan to show in a Modal
const modalImages = document.querySelectorAll(`.is-resizable`);

// Store modal element
const modal = document.querySelector(`.modal`);

// Select all elements inside the modal markup template
const modalElement = element => document.querySelector(`.modal ${element}`);

// For each item we want to be able to open in a modal
modalImages.forEach(img => {
	const data = img.dataset
	img.addEventListener(`click`, e => {
		body.style.overflow = `hidden`
		e.stopPropagation()
		modal.style.display = `flex`
		modalElement(`img`).src = img.src
	})
});

// Click anywhere to close the modal
document.addEventListener(`click`, () => {
	body.style.overflow = `auto`
	modal.style.display = `none`
}) 
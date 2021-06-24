'use strict';


const headerMenu = document.querySelector('.header__menu'),
	body = document.querySelector('body'),
	nav = document.querySelector('.nav'),
	logo = document.querySelector('.logo'),
	header = document.querySelector('.header'),
	arrow = document.querySelector('.header__arrow-down'),
	checkbox = document.querySelector('.checkbox2');

checkbox.addEventListener('click', () => {
	headerMenu.classList.toggle('active');
	nav.classList.toggle('active');
	logo.classList.toggle('active');
	body.classList.toggle('lock');
});

arrow.addEventListener('click', () => {
	window.scrollTo({
		top: header.scrollHeight,
		behavior: "smooth"
	});
});


// hover effect
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});


// filters
const btnFilters = document.querySelector('.works__btn-filters');
btnFilters.addEventListener('click', (e) => {
	const target = e.target;
	if (target && target.classList.contains('works__btn-filter')) {
		btnFilters.querySelectorAll('.works__btn-filter').forEach(item => {
			item.classList.remove('works__btn-filter--active');
		});
		target.classList.add('works__btn-filter--active');
	}
});



// slider
const sliderNav = document.querySelector('.team__pages');

let activeNav = document.querySelector('.team__pages__item.activeNav');

const slider = tns({
	"container": ".my-slider",
	"items": 3,
	"slideBy": "page",
	"mouseDrag": true,
	"swipeAngle": false,
	"speed": 500,
	"navContainer": "#customize-thumbnails",
	"controls": false
});

sliderNav.addEventListener('click', (e) => {
	const target = e.target;
	if (target && target.classList.contains('team__pages__item')) {
		activeNav.classList.remove('activeNav');
		activeNav = target;
		target.classList.add('activeNav');
	}

});
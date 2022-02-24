import * as functions from "./webp";
import $ from "jquery";
import Swiper, {Navigation} from 'swiper';

functions.isWebp();
$(document).ready(function(){

	const slider = new Swiper('.slider',{
		modules: [ Navigation ],
		slidesPerView: 3, 
		spaceBetween: 12,
		loop: true,
		navigation: {
			nextEl: '.navigation__arrow-next',
			prevEl: '.navigation__arrow-prev'
		},
	
	});
	const rewiews = new Swiper('.rewiews__slider',{
		slidesPerView: 2, 
		spaceBetween: 25,
		loop: true,
	});
	
	// open popup
	$(document).on('click', '#calculation', function(){
		$('.popup__fade').fadeIn();
		$('body').addClass('fixed-page');
	});
	
	
	// close Esc.
	$(document).keydown(function(e) {
		if (e.key === 'Escape') {
			e.stopPropagation();
			close();
		}
	});
	
	// close background
	$(document).on('click', '.popup__fade', function(e) {
		if ($(e.target).closest('.popup__container').length == 0) {
			close();
		}
		return false;
	});

	// close button
	$(document).on('click', '.popup__close', function(e) {
		close();
	});
	
	function close(){
		$('.popup__fade').fadeOut();
		$('body').removeClass('fixed-page');
	
	}

	$('.form__input-submit' ).click(function(){ 
	    $( '.form' ).submit(); 
	});

	$(document).on('submit','.form', function(e) {
		console.log('Hello, World');
		e.preventDefault();
	}); 

	

});












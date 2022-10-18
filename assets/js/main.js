(function ($) {
	"use strict";
	
	
	var heroSlider = $('.hero-area-slider');
	heroSlider.owlCarousel({
		loop:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
		items: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		mouseDrag: true,
		touchDrag: true,
		responsive:{
			768:{
				mouseDrag: false,
				touchDrag: false,
			}
		}
	});
	
	/*----------------------------
    START - Switcher animation
    ------------------------------ */
	$('#toggle-switcher').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'right':'-232px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'right':'0'});
		}
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).on('load', function(){
		jQuery("#preloader").fadeOut(500);
	});
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();

}(jQuery));
import {Swiper, Pagination, Lazy, EffectFade} from "swiper/js/swiper.esm";
import domReady from './xpage/ready';
import EventListener from './xpage/EventListener';
import App from './xpage/core';

Swiper.use([Pagination, Lazy, EffectFade]);

domReady(() => {
	const navSlider = new Swiper(".cs-thumbs__slider", {
		slidesPerView: 3,
		freeMode: true,
		spaceBetween: 15,
		lazy: {
			loadOnTransitionStart: true,
			loadPrevNext: true
		},
		navigation: {
			prevEl: ".cs-thumbs .swiper-button-prev",
			nextEl: ".cs-thumbs .swiper-button-next",
		}
	});
	
	const bigSlider = new Swiper(".csb-slider", {
		effect: "fade",
		lazy: {
			loadPrevNext: true,
			loadOnTransitionStart: true,
		},
		pagination: {
			el: ".csb-slider .swiper-pagination",
			type: "bullets",
			clickable: true,
		}
	});

	App.each(".cs-thumbs .swiper-slide", function(el: HTMLElement, i: number){
		new EventListener(el).add("click", function(){
			bigSlider.slideTo(i);
		});
	});
});
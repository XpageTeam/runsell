import {Swiper, Pagination, Lazy, EffectFade} from "swiper/js/swiper.esm";
import domReady from './xpage/ready';

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
	
	new Swiper(".csb-slider", {
		effect: "fade",
		lazy: {
			loadPrevNext: true,
			loadOnTransitionStart: true,
		}
	});
});
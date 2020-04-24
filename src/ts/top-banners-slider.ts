import {Swiper, Autoplay, Keyboard, Navigation, Pagination, Lazy} from "swiper/js/swiper.esm";
import domReady from "./xpage/ready";

Swiper.use([Autoplay, Keyboard, Navigation, Pagination, Lazy]);
	
domReady(() => {
	new Swiper(".top-banners__slider", {
		// slidesPerView: 1,
		slidesPerView: "auto",
		spaceBetween: 20,
		freeMode: true,
		watchSlidesVisibility: true,
		lazy: {
			loadOnTransitionStart: true,
			loadPrevNext: true,
			loadPrevNextAmount: 4
		},
		on: {
			lazyImageReady(){
				const slider = this as Swiper;

				slider.update();
			}
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true
		},
		navigation: {
			prevEl: ".top-banners .swiper-button-prev",
			nextEl: ".top-banners .swiper-button-next"
		},
		breakpoints: {
			1200: {
				spaceBetween: 32,
				slidesPerView: "auto",
			},
			// 800: {
			// 	slidesPerView: "auto",
			// },
			660: {
				slidesPerView: "auto",
			},
		}
	});
});
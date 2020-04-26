import {Swiper, Autoplay, Navigation, Pagination, Lazy} from "swiper/js/swiper.esm";
import domReady from './xpage/ready';
import App from './xpage/core';

Swiper.use([Autoplay, Navigation, Pagination, Lazy]);

domReady(() => {
	const catNavSliders = App.transformNodeListToArray(App.getElements(".cat-nav"));

	for (const slider of catNavSliders)
		new Swiper(slider.querySelector(".cat-nav__slider") as HTMLElement, {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			freeMode: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			navigation: {
				prevEl: slider.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: slider.querySelector(".swiper-button-next") as HTMLElement
			},
			lazy: {
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				1200: {
					spaceBetween: 32,
					slidesPerView: 4
				},
				1000: {
					slidesPerView: 4
				},
				660: {
					slidesPerView: 3
				},
				400: {
					slidesPerView: 2
				}
			}
		});
});
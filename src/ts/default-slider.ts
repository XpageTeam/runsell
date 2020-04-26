import {Swiper, Autoplay, Pagination, Lazy, Keyboard, Navigation} from "swiper/js/swiper.esm";
import domReady from './xpage/ready';
import App from './xpage/core';

Swiper.use([Autoplay, Pagination, Lazy, Keyboard, Navigation]);

domReady(() => {
	const clSliders = App.transformNodeListToArray(document.querySelectorAll(".default-slider__slider"));

	for (const slider of clSliders)
		new Swiper(slider.querySelector(".default-slider__slider-list") as HTMLElement, {
			slidesPerView: 1,
			spaceBetween: 20,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			lazy: {
				loadOnTransitionStart: true,
				loadPrevNext: true,
			},
			navigation: {
				prevEl: slider?.closest(".default-slider")?.querySelector(".swiper-buttin-prev") as HTMLElement,
				nextEl: slider?.closest(".default-slider")?.querySelector(".swiper-buttin-next") as HTMLElement
			},
			pagination: {
				el: slider?.closest(".default-slider")?.querySelector(".swiper-pagination") as HTMLElement,
				clickable: true,
				type: "bullets"
			},
			breakpoints: {
				1200: {
					spaceBetween: 32,
					slidesPerView: 4,
				},
				1000: {
					slidesPerView: 4
				},
				660: {
					slidesPerView: 3,
				}
			}
		});
});
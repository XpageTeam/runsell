import {Swiper, Autoplay, Pagination, Lazy, EffectFade} from "swiper/js/swiper.esm";
import domReady from './xpage/ready';
import App from './xpage/core';

Swiper.use([Autoplay, Pagination, Lazy, EffectFade]);

domReady(() => {
	const clSliders = App.transformNodeListToArray(document.querySelectorAll(".cli-slider"));

	for (const slider of clSliders){
		const slidesCount = slider.querySelectorAll(".swiper-slide").length;

		if (slidesCount < 2){
			const dots = slider.querySelector(".cli-slider__dots") as HTMLElement;

			dots.remove();
		}

		new Swiper(slider, {
			effect: "fade",
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			lazy: {
				loadOnTransitionStart: true,
				loadPrevNext: true,
			},
			on: {
				lazyImageReady(){
					const slider = this as Swiper;
	
					slider.update();
				}
			},
			pagination: {
				el: slider.querySelector(".swiper-pagination") as HTMLElement,
				clickable: true,
				type: "bullets"
			}
		});
	}
});
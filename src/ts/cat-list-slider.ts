import {Swiper, Autoplay, Pagination, Lazy, EffectFade} from "swiper/js/swiper.esm";
import domReady from './xpage/ready';
import App from './xpage/core';

Swiper.use([Autoplay, Pagination, Lazy, EffectFade]);

domReady(() => {
	const clSliders = App.transformNodeListToArray(document.querySelectorAll(".cli-slider"));

	for (const slider of clSliders)
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
			pagination: {
				el: slider.querySelector(".swiper-pagination") as HTMLElement,
				clickable: true,
				type: "bullets"
			}
		});
});
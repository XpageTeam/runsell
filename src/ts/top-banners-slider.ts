import {Swiper, Autoplay, Keyboard, Navigation, Pagination} from "swiper/js/swiper.esm";
import domReady from "./xpage/ready";

Swiper.use([Autoplay, Keyboard, Navigation, Pagination]);

domReady(() => {
    new Swiper(".top-banners__slider", {
        slidesPerView: "auto",
        spaceBetween: 32,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        navigation: {
            prevEl: ".top-banners .swiper-button-prev",
            nextEl: ".top-banners .swiper-button-next"
        }
    });
});
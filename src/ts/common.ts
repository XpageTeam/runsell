import "./top-banners-slider";
import "./cat-nav-slider";
import "./cat-list-slider";
import "./default-slider";
import "./card-slider";
import "./mobile-filter-slider";
import "./tabs";
import domReady from './xpage/ready';
import MobileMenu from './xpage/mobileMenu';
import EventListener from './xpage/EventListener';
import App from './xpage/core';

declare global {
	interface Window {
		$: any;
		// is: any;
	}
}


domReady(() => {
	new MobileMenu({
		burger: ".head__burger",
		menu: ".mobile-menu__cont",
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__menu-open",
		ignoreWarnings: false,
		fixBody: true,
		media: "(max-width: 1000px)"
	});

	new EventListener(".menu__el--submenu > span.menu__link").add("click", function(el: HTMLElement){
		const curMenuEl = el.closest(".menu__el--submenu"),
			targetSubmenu = curMenuEl.querySelector(".submenu");

		if (!targetSubmenu) return;

		targetSubmenu.classList.add("js__visible");
	});

	new EventListener(".submenu__back").add("click", function(el: HTMLElement){
		const targetSubmenu = el.closest(".submenu");

		if (!targetSubmenu) return;

		targetSubmenu.classList.remove("js__visible");
	});

	new EventListener(".head-search").add("click", function(el: HTMLElement, e: Event){
		e.preventDefault();

		window.$(".head__search-field").slideToggle(300);
	});

	new EventListener(".cat-sort__links select").add("change", function(select: HTMLSelectElement){
		App.each(".cat-sort__links-link", function(el: HTMLLinkElement, index: number){
			console.log(select.value, index);
			if (parseInt(select.value) == index)
				el.click();
				// new EventListener(el).trigger("click");
		});
	});
});
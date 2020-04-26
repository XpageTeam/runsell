import domReady from './xpage/ready';
import MobileMenu from './xpage/mobileMenu';
import EventListener from './xpage/EventListener';

domReady(() => {
	const filter = new MobileMenu({
		burger: ".mobile-filter-btn",
		menu: ".catalog__filter",
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__filter-open",
		ignoreWarnings: true,
		fixBody: true,
		media: "(max-width: 660px)"
	});

	new EventListener(".catalog__filter-close").add("click", function(){
		filter.closeMenu();
	});
});
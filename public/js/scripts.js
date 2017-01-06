// initialize Animate On Scroll elements
AOS.init({
	offset: 200,
	duration: 1000,
	easing: 'ease-in-sine',
	delay: 100,
	disable: window.innerWidth < 700
});

// setup sticky nav
var nav = $('nav');
var navHeight = $('nav').height();
var navScrolled = 'nav-scrolled';
var hero = $('.hero').height();
var section = $('section');
$(window).scroll(function() {
	if( $(this).scrollTop() > hero ) {
		nav.addClass(navScrolled);
		section.css('margin-top', '56px');
		// mobileBar.css('position', 'initial');
	} else {
		nav.removeClass(navScrolled);
		section.css('margin-top', '0px');
		// mobileBar.css('position', 'initial');
	}
});

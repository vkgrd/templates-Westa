$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop > 145) {
		$('.header').addClass('scrolled');
	} else {
		$('.header').removeClass('scrolled');
	}
});

new WOW().init();
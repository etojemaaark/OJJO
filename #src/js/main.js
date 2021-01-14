/// SWIPER ///

new Swiper(".swiper-container", {
	// Стрелки //
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 4,
});
$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	var headerMenu = $('header__menu');
	var headerLang = $('header__top-lang');
	if (w < 767) {
		if (!headerLang.hasClass('done')) {
			headerLang.addClass('done').appendTo(headerMenu);
		}
	} else {
		if (headerLang.hasClass('done')) {
			headerLang.removeClass('done').prependTo($('.header__top'));
		}
	}
	if (w < 767) {
		if (!$('.header__bottom-menu').hasClass('done')) {
			$('.header__bottom-menu').addClass('done').appendTo(headerMenu);
		}
	} else {
		$.each($('.header__bottom-menu'), function (index, val) {
			if ($(this).hasClass('header-bottom-menu--right')) {
				if ($(this).hasClass('done')) {
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			} else {
				if ($(this).hasClass('done')) {
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		});
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();
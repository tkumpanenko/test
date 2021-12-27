window.onscroll = () => {
	const menu = document.querySelector('.header__top');
	const Y = window.scrollY
	if (Y > 100) {
		menu.classList.add('fixed');
	} else if (Y < 300) {
		menu.classList.remove('fixed');
	}
};


$('.select-style').styler();

$(document).ready(function () {
	$('.popular-questions__title').click(function (event) {
		if ($('.popular-questions__inner').hasClass('one')) {
			$('.popular-questions__title').not($(this)).removeClass('active');
			$('.popular-questions__box').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
		$('.popular-questions__box').not($(this)).removeClass('active');
	});
});
jQuery(document).ready(function () {

	"use strict";
	$('#slider-carousel').carouFredSel({
		responsive: true,
		width: '100%;',
		circular: true,

		scroll: {
			items: 1,
			duration: 500,
			pauseOnHover: true,
		},
		auto: true,
		items: {
			visible: {
				min: 1,
				max: 1
			},
			height: "variable"
		},
		pagination: {
			container: ".sliderpager",
			pageAnchorBuilder: false
		},
	});

	/*works section slider*/
	$('.works-carousel').carouFredSel({
		responsive: true,
		width: '100%;',
		circular: true,
		prev: '#prev',
		next: '#next',

		scroll: {
			items: 1,
			duration: 400,
			pauseOnHover: true,
		},
		auto: true,
		items: {
			visible: {
				min: 1,
				max: 4
			},
			height: "variable"
		},

	});

	/*sticky nav*/
	$(window).scroll(function () {
		var top = $(window).scrollTop();

		if (top >= 60) {
			$("header").addClass("secondary");
		} else if ($("header").hasClass("secondary")) {
			$("header").removeClass("secondary");
		}
	});

	/*slicknav*/
	$('#menu').slicknav({
		label: '',
	});


});

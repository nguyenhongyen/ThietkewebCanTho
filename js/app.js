(() => {
	///====================update ====================

	const handleTabpriceList = function (){
		let itemTab = $("#price-list-tab .nav-item");
		itemTab.on("click",function(){
			itemTab.removeClass("active");

			$(this).addClass("active");
			$("#price-list-tab .bg-tab").css({
				left: parseInt($(this)[0].offsetLeft) + "px",
				width:parseInt($(this)[0].offsetWidth) + "px",

			});
		});
	}

	$(".heading-animation .animation-text").removeClass("active").hide();
	$(".heading-animation .animation-text:first-child").addClass("active").show();
	const handleAnimationText = function(){
		if($(".heading-animation .animation-text").length){
			$(".heading-animation .animation-text").each(function (number) {
				let self = $(this);
				let count = number;
				setTimeout(function () {
					$(".heading-animation .animation-text").removeClass("active").hide();
					$(self).addClass("active").show();
				}, 2500 * count);
			});
		}
	}

	const handleHeaderSliderBlogs = function () {
		if ($('#section-blogs .swiper').length) {
			new Swiper('#section-blogs .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.2,
				speed:1000,
				autoplay: {
					delay: 3500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#section-blogs .button-next",
					prevEl: "#section-blogs .button-prev",
				},
				breakpoints: {
					425: {
						slidesPerView: 1.6
					},
					768: {
						slidesPerView: 2.3
					},
					992: {
						slidesPerView: 2.5
					},
					1024: {
						slidesPerView: 2.6,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleSectionHtmlBlogs = function () {
		if ($('#section-html-blogs').length) {
			let elmDescription = $('#section-html-blogs');
			let scrollHeight = elmDescription.find('.content').get(0).scrollHeight;

			$('#section-html-blogs').css('--height', '400' + 'px');

			if (scrollHeight <= elmDescription.innerHeight()) {
				$('#expand-button').remove();
				$('#section-html-blogs').css('--height', 'auto');
			} else {
				$('#expand-button').click(function () {
					if (elmDescription.hasClass('is-show')) {
						elmDescription.removeClass('is-show');
						$(this).html('<span>Xem thêm</span><span><i class="fal fa-angle-down"></i></span>');
						$('#section-html-blogs').css('--height', '400' + 'px');
					} else {
						elmDescription.addClass('is-show');
						$(this).html('<span>Thu gọn </span><span><i class="fal fa-angle-up"></i></span>');
						$('#section-html-blogs').css('--height',  'auto');
					}
				});
			}
		}
	}

	const handleHeaderSliderIntroduce = function () {
		if ($('#section-introduce-6 .swiper').length) {
			new Swiper('#section-introduce-6 .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.3,
				speed:1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#section-introduce-6 .button-next",
					prevEl: "#section-introduce-6 .button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView:1.7
					},
					425: {
						slidesPerView:2
					},
					768: {
						slidesPerView: 3.2
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 4,
					},
					1440: {
						slidesPerView: 4,
					},

				}
			});
		}
	}

	const handleSwiperPriceList = function () {
		if ($('#section-price-list .swiper').length) {
			let listSliderTable = $('#section-price-list .swiper');
			listSliderTable.each((index, sliderItem) => {
				let sliderItemID = '#' + $(sliderItem).closest('.tab-pane').attr('id');
				new Swiper(sliderItemID + ' .swiper', {
					slidesPerView: 1.2,
					spaceBetween: 20,
					speed:1000,
					autoplay: {
						delay: 2500,
					},
					breakpoints: {
						576: {
							slidesPerView: 1.3
						},
						768: {
							slidesPerView: 2
						},
						992: {
							slidesPerView: 2
						},
						1024: {
							slidesPerView: 2,
						},
						1440: {
							slidesPerView: 3,
						},

					}
				});
			});
		}
	}

	$(function () {
		handleTabpriceList();
		$(document).ready(function () {
			setInterval(function(){handleAnimationText()}, 2500);
		});
		handleHeaderSliderBlogs();
		handleSectionHtmlBlogs();
		handleHeaderSliderIntroduce();
		handleSwiperPriceList();
	});

})();

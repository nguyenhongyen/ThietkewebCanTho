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
				}, 3000 * count);
			});
		}
	}



	const handleAnimationProdure = function(){
		if($(".section-procedure .nav-link").length){
			$(".section-procedure .nav-link").each(function (number) {
				let self = $(this);
				//let idTab = self.data("id");
				let count = number;
				setTimeout(function () {
					$('.section-procedure .nav-link.active').removeClass("bg-active");
					self.trigger('click');
					$('.section-procedure .nav-link:before').css('display','none');
					/*self.delay(9000).addClass("bg-active");*/
					/*$(".section-procedure .nav-link").removeClass("active");
					$(".section-procedure .tab-pane").removeClass("show active");
					$(self).addClass("active");
					$(`.section-procedure .tab-pane[id="${idTab}"]`).addClass('show active');*/
				}, 5000 * count);
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

	const handleHeaderSliderIntroduce6 = function () {
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

	const handleHeaderSliderIntroduce = function () {
		if ($('#swiper-introduce .swiper').length) {
			new Swiper('#swiper-introduce .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.2,
				speed:1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce .button-next",
					prevEl: "#swiper-introduce .button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView:1.3
					},
					425: {
						slidesPerView:1.5
					},
					768: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleHeaderSliderIntroduce3 = function () {
		if ($('#swiper-introduce-3 .swiper').length) {
			new Swiper('#swiper-introduce-3 .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.1,
				speed:1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce-4 .button-next",
					prevEl: "#swiper-introduce-4.button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView:1.2
					},
					425: {
						slidesPerView:1.3
					},
					768: {
						slidesPerView: 1.6
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleHeaderSliderIntroduce4 = function () {
		if ($('#swiper-introduce-4 .swiper').length) {
			new Swiper('#swiper-introduce-4 .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.1,
				speed:1000,
				autoplay: {
					delay: 6500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce-4 .button-next",
					prevEl: "#swiper-introduce-4.button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView:1.2
					},
					425: {
						slidesPerView:1.3
					},
					768: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	const handleHeaderSliderIntroduce5 = function () {
		if ($('#swiper-introduce-5 .swiper').length) {
			new Swiper('#swiper-introduce-5 .swiper', {
				spaceBetween: 15,
				slidesPerView: 1.1,
				speed:1000,
				autoplay: {
					delay: 7500,
					disableOnInteraction: true,
				},
				navigation: {
					nextEl: "#swiper-introduce-5 .button-next",
					prevEl: "#swiper-introduce-5 .button-prev",
				},
				breakpoints: {
					375: {
						slidesPerView:1.2
					},
					425: {
						slidesPerView:1.5
					},
					768: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 3,
					},

				}
			});
		}
	}

	$(function () {
		handleTabpriceList();
		$(document).ready(function () {
			setInterval(function(){handleAnimationText()}, 3000);
		     handleAnimationProdure()
		});

		handleHeaderSliderBlogs();
		handleSectionHtmlBlogs();
		handleHeaderSliderIntroduce6();
		handleSwiperPriceList();
		handleHeaderSliderIntroduce();
		handleHeaderSliderIntroduce3();
		handleHeaderSliderIntroduce4();
		handleHeaderSliderIntroduce5();
	});

})();

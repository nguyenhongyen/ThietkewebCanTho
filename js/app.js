(() => {
	const initTyping = () => {
		let typed = $('#typed');
		if (typed.length === 0) return false;

		new Typed('#typed', {
			stringsElement: '#type-string ',
			typeSpeed: 50,
			backSpeed: 0,
			backDelay: 600,
			startDelay: 0,
			loop: true,
		});

	}
	const handleSwiperTablePrice = function () {
		if ($('.table-price .swiper').length) {
			let listSliderTable = $('.table-price .swiper');
			listSliderTable.each((index, sliderItem) => {
				let sliderItemID = '#' + $(sliderItem).closest('.tab-pane').attr('id');
				new Swiper(sliderItemID + ' .swiper', {
					slidesPerView: 1,
					centeredSlides: true,
					spaceBetween: 20,
					autoplay: {
						delay: 1500,
					},
					pagination: {
						el: sliderItemID + " .swiper-pagination",
						clickable: true,
					},

					breakpoints: {
						576: {
							slidesPerView: 1
						},
						768: {
							slidesPerView: 1.5
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
	const handleSectionService = function () {
		if ($('#section-service').length) {
			let elmDescription = $('#section-service');

			let scrollHeight = elmDescription.find('.content').get(0).scrollHeight;

			elmDescription.css('--height', scrollHeight + 'px');

			if (scrollHeight <= elmDescription.innerHeight() + 4) {
				$('#expand-button').remove();
			} else {
				$('#expand-button').click(function () {
					if (elmDescription.hasClass('is-show')) {
						elmDescription.removeClass('is-show');
						$(this).html('Xem thêm <i class="fal fa-angle-down"></i>');
					} else {
						elmDescription.addClass('is-show');
						$(this).html('Thu gọn <i class="fal fa-angle-up"></i>');
					}
				});
			}
		}
	}
	const itemCollapseCourse = $('#accordion-question .accordion-button[aria-expanded]');
	itemCollapseCourse.on('click', function () {
		if ($(this).hasClass('show')) return false;
		$('#accordion-question .accordion-collapse.show').each((_, element) => {
			new bootstrap.Collapse(element, {
				show: false,
			});
		});
	});

	const handleHeaderSliderTwo = function () {
		if ($('#swiper-image-two').length) {
			new Swiper('#swiper-image-two .swiper', {
				spaceBetween: 10,
				centeredSlides: true,
				autoplay: {
					delay: 3500,
				},
			});
		}
	}
	const handleSliderProcedure = function () {
		if ($('#section-procedure-2').length) {
			new Swiper('.section-procedure__swiper-thumb .swiper', {
				spaceBetween: 10,
				centeredSlides: true,

			});
		}
	}


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


	$(function () {
		handleTabpriceList();
	});

})();

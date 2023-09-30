console.clear();
// 박스 1 스와이퍼
$(document).ready(function() {
  MySliderBox1__init();
  MySliderBox2__init();
  MySliderBox3__init();
});

function MySliderBox1__init() {
	let swiper = new Swiper('.my-slider-box-1 .swiper', {
		slidesPerView: 3, // 한 페이지당 보여줄 개수
		spaceBetween: 20, // 슬라이더 간의 간격
		loop: true,
		navigation: {
			nextEl: '.my-slider-box-1__btn-right',
			prevEl: '.my-slider-box-1__btn-left',
		},
		autoplay: {
			delay: 2000, // 넘어가는 시간
			//disableOnInteraction: true,
			//클릭했을때 멈춤
			 pauseOnMouseEnter: true,
			//마우스 올렸을때 멈춤
		}
	});	
// 	마우스 올리면 멈추고 마우스 내리면 스탑
	$('.my-slider-box-1 .swiper').on('mouseenter', function() {
    console.log('stop autoplay');
    swiper.autoplay.stop();
  });
	
  $('.my-slider-box-1 .swiper').on('mouseleave', function() {
    console.log('start autoplay');
    swiper.autoplay.start();
  });
}

// 박스 2 스와이퍼
function MySliderBox2__init() {
	let swiper = new Swiper('.my-slider-box-2 .swiper', {
		slidesPerView: 2,
	});	
}

// 박스 3 스와이퍼
function MySliderBox3__init() {
	let swiper = new Swiper('.my-slider-box-3 .swiper');	
}

MySliderBox1__init();
MySliderBox2__init();
MySliderBox3__init();


$('.slider-inner').slick({
  appendArrow: $('.btn-arrow'),
  nextArrow: '<div class="btn-next"><img src="img/customer/arrow_next(dark).png" alt=""></div>',
  prevArrow: '<div class="btn-prev"><img src="img/customer/arrow_prev(dark).png" alt=""></div>',
})

$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.nav-wrap').toggleClass('active')
		$('body').toggleClass('lock')
	})
})

$(function() {

	var A_iS = new IScroll('.Article_info_wrap', {
		scrollbars: false,
		probeType: 3
	})
	
	var A_lS = new IScroll('.Album-list', {})

	var headerh = $('.header').height()+100
	var footerh=$('.footer').height()+100
	var Article_infoh = $('.Article_info').height()+100
	var A_iS_position,num;

	A_iS.on('scroll', function() {
		num=false;
		console.log(A_iS.y)
		$('.footer').css('transition','all 0s')
		$('.section_null').css('transition','all 1.5s')
		$('.Article_info_wrap').css('transition','all 1.5s')
		if(A_iS.y > 0) {
			$('.header').css("transform", "translateY(0px)")
			$('.section_null').height(headerh-100)
			if(A_iS.y > 100) {
				num=true
				setTimeout(function(){
					$('.footer').css("transform", "translateY(" + footerh + "px)")
				},400)
				$('.header').css('top',-headerh)
				$('.Article_info_wrap').css("transform", "translateY(" + Article_infoh + "px)")
				$('.Article_info_wrap').on('touchend', function() {
					if(num){
						$('.section_null').height(headerh)
						num=false;
					}
				})
			}
		}
		if(A_iS.y <= 0) {
			$('.header').css("transform", "translateY(" + A_iS.y + "px)")
		}

	})
	$('.return').on('tap',function(){
		$('.section_null').css('transition','all 0s')
		$('.Article_info_wrap').css('transition','all 1s')
		$('.footer').css('transition','all .5s')
		$('.section_null').height(headerh-100)
		$('.header').css('top',0)
		$('.Article_info_wrap').css("transform", "translateY(0px)")
		$('.footer').css("transform", "translateY(0px)")
		A_iS.refresh()
	})
	$('.openBtn').on('tap',function(){
		$('.section_null').css('transition','all 0s')
		$('.Article_info_wrap').css('transition','all 1s')
		$('.footer').css('transition','all .5s')
		$('.section_null').height(headerh-100)
		$('.header').css('top',0)
		$('.Article_info_wrap').css("transform", "translateY(0px)")
		$('.footer').css("transform", "translateY(0px)")
		A_iS.refresh()
	})

})
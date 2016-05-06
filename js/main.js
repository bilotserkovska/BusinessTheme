$(document).ready(function(){
	$('a.scroll').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });
    $('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: true,
	  auto: true
	});
	$('.service-wrap, .step').on('inview', function(event, isInView) {
		if(isInView && $(this).hasClass('service-wrap')) {
			$('.service-wrap-top-left').animate({
				opacity: 1
				},500, function(){
					$('.service-wrap-top-right').animate({
						opacity:1
					},800, function(){
						$('.service-wrap-middle-left').animate({
							opacity: 1
						},800, function(){
							$('.service-wrap-middle-right').animate({
							opacity: 1
						},800, function(){
							$('.service-wrap-bottom-left').animate({
							opacity: 1
							},800, function(){
								$('.service-wrap-bottom-right').animate({
								opacity: 1
								},800);

							});
						});
					});
				});
			});
		}
		if(isInView && $(this).hasClass('step')) {
			$('.step_1').animate({
				opacity: 1
			},500, function(){
				$('.step_2').animate({
					opacity:1
				},700, function(){
					$('.step_3').animate({
						opacity: 1
					},700, function(){
						$('.step_4').animate({
							opacity: 1
						},700);
					});
				});				
			});						
		};
	});
});

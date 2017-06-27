$(document).ready(function() {
	//导航开始
	$(window).on('scroll', function() {
		if($(window).scrollTop() > 100) {
			$('#mainNav').removeClass('hc-top-up').addClass('hc-top-nd');
			$(".hc-logobox img").src;
			$(".hc-logobox img").attr('src', 'resource/images/logo1.png');

		} else {
			$('#mainNav').removeClass('hc-top-nd').addClass('hc-top-up');
			$(".hc-logobox img").src;
			$(".hc-logobox img").attr('src', 'resource/images/logo.png');
		}
	});
		$('#oiBtn').click(function() {
		//var oiicn = $('#oiBtn em')
		$('#oiBtn').toggleClass("hc-io");
		$('#navBox').toggleClass("hc-navbox01 hc-navbox");
		if($('#navBox').hasClass("hc-navbox01")) {
			$(".hc-logobox img").src;
			$(".hc-logobox img").attr('src', 'resource/images/logo1.png');
		} else {
			$(".hc-logobox img").src;
			$(".hc-logobox img").attr('src', 'resource/images/logo.png');
		}
	}); //菜单按钮
});

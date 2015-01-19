$(function(){
	$(window).on('scroll', function(){
		$(this).scrollTop() > 100 ? $('#page-top').fadeIn() : $('#page-top').fadeOut();
	});
	$('#page-top').on('click', function(){
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;	
	});
});
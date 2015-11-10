$(document).ready(function() {
	$('.image').mouseenter(function() {
		$('.overlay', this).css('opacity','1');
	});
	$('.image').mouseleave(function() {
		$('.overlay', this).css('opacity','0');
	});
	$('a.gallery').featherlightGallery({
    
	});

	$('#header a').click(function(){
		$('#header').next().addClass('slideOutLeft');
	});


});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $('#specs').offset().top + 200) {
       $('.mustang-logo').addClass('animated fadeInRight');
   }
});

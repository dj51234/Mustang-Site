$(document).ready(function() {
	$('.image').mouseenter(function() {
		$('.overlay', this).css('opacity','1');
	});
	$('.image').mouseleave(function() {
		$('.overlay', this).css('opacity','0');
	});
	$('a.gallery').featherlightGallery({
    openSpeed: 300
	});
});








$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:4,
		autoplay:true,
		loop:true,
		nav:true,
		singleItem:true,
		transitionStyle:"fade",
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
	$(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});


$("marquee").hover(function () { 
	this.stop();
	}, function () {
	this.start();
});

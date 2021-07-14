
		$(document).ready(function() {
		$(".fancybox").fancybox();
		$(".thumbnails li:nth-child(2n+2)").addClass("second");
		$(".thumbnails li:nth-child(3n+3)").addClass("third");
		});

		$('.top').click(function(){ 
	        $('html, body').animate({
	            scrollTop: $("html").offset().top
	        }, 700);
	     });

		





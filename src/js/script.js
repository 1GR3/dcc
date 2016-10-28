$( document ).ready(function() {
    console.log("wtf");
    $('.slider').owlCarousel( {
	  autoPlay: true,
	  paginationSpeed : 6000,
	  singleItem: true,
	  transitionStyle : "fadeUp"
	});
    
	$('.pictures').slick({
	    setting-name: setting-value
	});
	
	console.log("olala")
});
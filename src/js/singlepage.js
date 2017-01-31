$().ready(function (e) {
    $('.slickslide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        slide: 'li',
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            },
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true

            }
        }],
        customPaging: function (slider, i) {
            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
        }
        
    });
    sidebarHeight();

	$( window ).resize(function() {
	  sidebarHeight();
	});
	sidebarHeight = function (){
		$("aside .body").css("height", $(".slick-list").height()-$(".slick-dots").height());
		$("div.price").css("height", $(".slick-dots").height());
	}
	$(".tab-nav li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	})
	$(".t1").click(function(){
		$(".tab-content").removeClass("active");
		$(".tc-1").addClass("active");
		
	})
	$(".t2").click(function(){
		$(".tab-content").removeClass("active");
		$(".tc-2").addClass("active");
		
	})
	$(".t3").click(function(){
		$(".tab-content").removeClass("active");
		$(".tc-3").addClass("active");
		
	})
	$(".t4").click(function(){
		$(".tab-content").removeClass("active");
		$(".tc-4").addClass("active");
		
	})

});
	 
    // Carousel Slier
    $(".carousel-active").owlCarousel({
        items:3,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,

        responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
    });
     
	 // counterUp  
    $('.counter').counterUp({
        delay : 10,
        time: 10000,
    });
     // wow
    new WOW().init();
	
		 //one pagenave js
 $('#nav').onePageNav({
    filter: ':not(.external)'
});

 jQuery(window).load(function () {

        /* Sticky Header */
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 20) {
                $('.header-fixed').addClass("sticky");
            } else {
                $('.header-fixed').removeClass("sticky");
            }
        });
        
        /* Preloader */
        $(".preloader").fadeOut()
    });
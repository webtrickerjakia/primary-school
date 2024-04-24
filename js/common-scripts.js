
(function($){
	$(function(){


        $('#phone-nav').on('click', function () {
            $('body').toggleClass('nav-expand')
        })


        function scrollToSection(event) {
            event.preventDefault();
            var $section = $($(this).attr('href')); 
            $('html, body').animate({
              scrollTop: $section.offset().top -100
            }, 1500);
          }
          $('[data-scroll]').on('click', scrollToSection);
    
        
		//  //  venue-carousel function 
    //  if ($('#nav-slider').length) {
    //   $('#nav-slider').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     autoplay: false,
    //     autoplaySpeed: 5000,
    //     infinite: true,
    //     responsive: [
     
    //       {
    //         breakpoint:991,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1
    //         }
    //       },
    //       {
    //         breakpoint: 99999, // Large value to effectively "disable" the slider on desktop
    //         settings: "unslick"
    //       }
    //     ]
    //   });
    // }





	})// End ready function.
   
    
  

	

})(jQuery)


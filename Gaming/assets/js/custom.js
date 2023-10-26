$(document).ready(function () {

  	// offcanvas search form active start
	$(".offcanvas-btn").on('click', function(){
		$("body").addClass('fix');
		$(".offcanvas-search-inner").addClass('show')
	})

	$(".minicart-btn").on('click', function(){
		$("body").addClass('fix');
		$(".minicart-inner").addClass('show')
	})

	$(".offcanvas-close, .minicart-close,.offcanvas-overlay").on('click', function(){
		$("body").removeClass('fix');
		$(".offcanvas-search-inner, .minicart-inner").removeClass('show')
	})

	// nice select active start
	$('select').niceSelect();

	// Off Canvas Open close start
	$(".off-canvas-btn").on('click', function () {
		$("body").addClass('fix');
		$(".off-canvas-wrapper").addClass('open');
	});

	$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".off-canvas-wrapper").removeClass('open');
	});

    jQuery(".product-write-review").on('click',function(e) {
    $(".product-review").toggleClass("open-model");
    $('body').addClass('no-scroll open');
    $('.overlay').addClass('active');
  });
  jQuery(".overlay,.review-close-icon").on('click',function(e) {
    $(".product-review").removeClass("open-model");
    $('body').removeClass('no-scroll open');
    $('.overlay').removeClass('active');
  });
  jQuery('.cart__items-wrapper,.cart__footer-wrapper').wrapAll('<section class="cart-page-section padding-bottom"><div class="container"><div class="row"></div></div></section>');
  jQuery('.cart-page-section .section-title.main').prependTo('.cart-page-section > .container');
  jQuery('main').insertAfter('header');
  countDownIni('.flip-countdown,.js-flip-countdown'); 
    /***** On scroll heder Sticky *****/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("head-sticky");   
        } else {
            $("header").removeClass("head-sticky");         
        }
    });  
    // notify me
  $('body').on('click','.notify-btn', function(e) {
      e.preventDefault();
      $('#notify-me-wrapper').show();
    });
   $('body').on('click','.notify-popup-close', function(e) {
      e.preventDefault();
      $('#notify-me-wrapper').hide();
    });
  // Subscribe popup Js
  $('.close-sub-btn').click(function () {
    $('.subscribe-popup').slideUp(); 
    $(".subscribe-overlay").removeClass("open");
  }); 
    /***** Announcebar hide *****/
    $('#announceclose').click(function () {
        $('.announcebar').slideUp();
    }); 
    //  /********* Wrapper top space ********/
    //  var header_hright = $('header').outerHeight();
    //  $('header').next('.wrapper').css('margin-top', header_hright + 'px');  
    /***** Mobile Menu *****/
    $("#menu").on("click", function () {
        $(".mobile-menu-wrapper, body").toggleClass("active-menu");
    });
    $(".menu-close-icon svg").on("click", function () {
        $(".mobile-menu-wrapper, body").toggleClass("active-menu");
    });
    /********* Cart Popup ********/
    $('.main-cart').on('click', function (e) {
      console.log("sdasda")
      $('body').addClass('no-scroll cartOpen');
    });
    $('body').on('click', '.overlay.cart-overlay, .closecart', function (e) {
      console.log("DAsda")
        $('body').removeClass('no-scroll cartOpen');
    });
    /***** Mobile Filter Popup *****/
    $('.mobile-facets__open').on('click', function (e) {
    $('body').addClass('mobile-open no-scroll');
    $('.overlay').addClass('active');
  });
  $('.overlay,.close-filter,.apply-btn').on('click', function (e) {
    $('body').removeClass('mobile-open no-scroll');
    $('.overlay').removeClass('active');
  });
      /*********  size Popup  ********/ 
      $(".size-btn").click(function() { 
        $(".size-popup").toggleClass("active"); 
        $("body").toggleClass("no-scroll");
    });
    $(".close-search").click(function() { 
        $(".size-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
    $(".close-btn").click(function() { 
        $(".size-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
    /*****  Header Search Popup  *****/
    $(".search-header a").click(function () {
        $(".search-popup").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });
    $(".close-search").click(function () {
        $(".search-popup").removeClass("active");
        $("body").removeClass("no-scroll");
    });
    /***** Cookie Js *****/
    $('.cookie-close').click(function () {
        $('.cookie').slideUp();
    });
    /***** Subscribe popup Js *****/
    $('.close-sub-btn').click(function () {
        $('.subscribe-popup').slideUp();
    });
    /*****  Multi-level accordion nav  *****/
    $('.acnav-label').click(function () {
        var label = $(this);
        var parent = label.parent('.has-children');
        var list = label.siblings('.acnav-list');
        if (parent.hasClass('is-open')) {
            list.slideUp('fast');
            parent.removeClass('is-open');
        } else {
            list.slideDown('fast');
            parent.addClass('is-open');
        }
    });
    // /*****  PRODUCT-CENTER-SLIDER  *****/
    // $('.product-center-slider').slick({
    //     arrows:false,
    //     dots: true,
    //     infinite: true, 
    //     speed: 800,
    //     slidesToShow: 5,
    //     slidesToScroll: 1, 
    //     centerPadding: "0", 
    //     cssEase: 'cubic-bezier(0.5,0,0,1)',
    //     centerMode: true, 
    //     responsive: [
    //         {
    //             breakpoint: 1600,
    //             settings: {
    //                 slidesToShow: 4
    //             }
    //         }, 
    //         {
    //             breakpoint: 1300,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         }, 
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         }, 
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });  
    // /*****  CLIENT-LOGO-SLIDER  *****/ 
    // if($('.client-logo-slider').length > 0 ){
    //     $('.client-logo-slider').slick({
    //         autoplay: true, 
    //         slidesToShow: 5,
    //         centerMode:true,
    //         speed: 1000,
    //         slidesToScroll: 1,  
    //         prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
    //         nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
    //         dots: false,
    //         buttons: false,
    //         responsive: [ 
    //             {
    //                 breakpoint: 1200,
    //                 settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 1   
    //                 }
    //             },  
    //             {
    //             breakpoint: 992,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     slidesToScroll: 1 
    //                 }
    //             },
    //             {
    //             breakpoint: 576,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1 
    //                 }
    //             }
    //         ]
    //     });
    // }
    /*****  TAB Js *****/
    $('ul.tabs li').click(function(){
        var $this = $(this);
        var $theTab = $(this).attr('data-tab');
        console.log($theTab);
        if($this.hasClass('active')){
          // do nothing
        } else{
          $this.closest('.tabs-wrapper').find('ul.tabs li, .tabs-container .tab-content').removeClass('active');
          $('.tabs-container .tab-content[id="'+$theTab+'"], ul.tabs li[data-tab="'+$theTab+']').addClass('active');
        }
        //$('.shop-protab-slider').slick('refresh');
        $('ul.tabs li').removeClass('active');
        $(this).addClass('active');
    });
    // if ($('.shop-protab-slider').length > 0) {
    //     $('.shop-protab-slider').slick({
    //         prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
    //         nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
    //         dots: false, 
    //         loop:true,
    //         infinite: true,
    //         speed: 600, 
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         responsive: [{
    //                 breakpoint: 1200,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                 }
    //             },
    //             {
    //                 breakpoint: 992,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1
    //                 }
    //             },
    //             {
    //                 breakpoint: 576,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1
    //                 }
    //             }
    //         ]
    //     });
    // }
    
    if ($('.product-extra-slider').length > 0) {
        $('.product-extra-slider').slick({
            prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
            dots: false, 
            loop:true,
            infinite: true,
            speed: 600, 
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }  
    if ($('.related-blogs-slider').length > 0) {
        $('.related-blogs-slider').slick({
            prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
            dots: false, 
            loop:true,
            infinite: true,
            speed: 600, 
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    /***** PRODUCT TWO ROW SLIDER *****/
    if($('.blog-two-row-slider').length > 0 ){
        $('.blog-two-row-slider').slick({
            rows: 2,
            autoplay: false, 
            arrows:true,
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll:3,  
            prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
            responsive: [ 
                {
                breakpoint: 991,
                    settings: {
                        slidesToShow: 3, 
                        slidesToScroll: 1, 
                    }
                },
                {
                breakpoint: 767,
                    settings: {
                        slidesToShow: 2, 
                        slidesToScroll: 1, 
                    }
                },
                {
                breakpoint: 575,
                    settings: {
                        slidesToShow: 1, 
                        slidesToScroll: 1, 
                    }
                }
            ]
        });
    }
    /***** TESTIMONIAL SLIDER *****/
    if ($('.testimonial-slider').length > 0) {
        $('.testimonial-slider').slick({
            autoplay: false,
            slidesToShow: 2,
            speed: 1000,
            slidesToScroll: 1,
            prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
            dots: false,
            buttons: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    /***** PRODUCT SLIDER *****/
    $('.product-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        loop: true,
        asNavFor: '.product-thumb-slider',
        autoplay: false,
        responsive: [{
        breakpoint: 576,
            settings: {
                arrows: true,
                prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
                nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
                dots: false,
            }
        }]
    });
    $('.product-thumb-slider').slick({
        slidesToShow: 3,
        arrows: true,
        asNavFor: '.product-main-slider',
        dots: false,
        speed: 1000,
        slidesToScroll: 1,
        touchMove: true,
        focusOnSelect: true,
        loop: true,
        infinite: true,
        vertical: true,
        prevArrow: '<button class="slide-arrow slick-prev"></button>', 
        nextArrow: '<button class="slide-arrow slick-next"></button>',
        responsive: [{
        breakpoint: 576,
        settings: {
            vertical: false,
        }
        }]
    });
    /***** Slick lightbox *****/
    if ($('.lightbox').length > 0) {
        $('.lightbox').slickLightbox({
        itemSelector: 'a.open-lightbox',
        caption: 'caption',
        prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
        nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
        navigateByKeyboard: true,
        layouts: {
            closeButton: '<button class="close"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path d="M27.7618 25.0008L49.4275 3.33503C50.1903 2.57224 50.1903 1.33552 49.4275 0.572826C48.6647 -0.189868 47.428 -0.189965 46.6653 0.572826L24.9995 22.2386L3.33381 0.572826C2.57102 -0.189965 1.3343 -0.189965 0.571605 0.572826C-0.191089 1.33562 -0.191186 2.57233 0.571605 3.33503L22.2373 25.0007L0.571605 46.6665C-0.191186 47.4293 -0.191186 48.666 0.571605 49.4287C0.952952 49.81 1.45285 50.0007 1.95275 50.0007C2.45266 50.0007 2.95246 49.81 3.3339 49.4287L24.9995 27.763L46.6652 49.4287C47.0465 49.81 47.5464 50.0007 48.0463 50.0007C48.5462 50.0007 49.046 49.81 49.4275 49.4287C50.1903 48.6659 50.1903 47.4292 49.4275 46.6665L27.7618 25.0008Z" fill="white"></path></svg></button>'
        }
        });
    };

  // currency
  function currencyFormSubmit(event) {
    event.target.form.submit();
  }

  document.querySelectorAll('.shopify-currency-form select').forEach(function(element) {
    element.addEventListener('change', currencyFormSubmit);
  });
  
   // quickview
  $('body').on('click', '.quickview-close', function(e) {
    e.preventDefault();
    $('body').removeClass('no-scroll quick-open');
    $('.overlay').removeClass('active');
    $('.quickview-popup').hide();
  });
  
  $('body').on('click', '.quickview-btn', function(e) {
    e.preventDefault();
    $('body').addClass('no-scroll quick-open');
    $('.overlay').addClass('active');
    var href= '/products/'+$(this).find('a').data('handle')+'?view=qv';
    $.get(href, function(product) {
      $('.quickview_popup_data').html(product);

      $('.quickview_popup_data .product-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        loop: true,
        asNavFor: '.quickview_popup_data .product-thumb-slider',
        autoplay: false,
        responsive: [{
        breakpoint: 576,
            settings: {
                arrows: true,
                prevArrow: '<button class="slide-arrow slick-prev"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
                nextArrow: '<button class="slide-arrow slick-next"><svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z"></path></svg></button>',
                dots: false,
            }
        }]        
      });
      $('.quickview_popup_data .product-thumb-slider').slick({
          slidesToShow: 3,
          arrows: true,
          asNavFor: '.quickview_popup_data .product-main-slider',
          dots: false,
          speed: 1000,
          slidesToScroll: 1,
          touchMove: true,
          focusOnSelect: true,
          loop: true,
          infinite: true,
          vertical: true,
          prevArrow: '<button class="slide-arrow slick-prev"></button>', 
          nextArrow: '<button class="slide-arrow slick-next"></button>',
          responsive: [{
          breakpoint: 768,
          settings: {
              vertical: false,
              slidesToShow: 3,
          }
          }]
      });
    });
    $('.quickview-popup').show();
  });
  // end quickview
});

if ($(".my-acc-column").length > 0) {
    jQuery(function ($) {
        var topMenuHeight = $("#daccount-nav").outerHeight();
        $("#account-nav").menuScroll(topMenuHeight);
        $(".account-list li:first-child").addClass("active");
    });
    // COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
    jQuery.fn.extend({
        menuScroll: function (offset) {
            // Declare all global variables
            var topMenu = this;
            var topOffset = offset ? offset : 0;
            var menuItems = $(topMenu).find("a");
            var lastId;
            // Save all menu items into scrollItems array
            var scrollItems = $(menuItems).map(function () {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });
            // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
            $(topMenu).on("click", "a", function (e) {
                var href = $(this).attr("href");
                var offsetTop = href === "#" ? 0 : $(href).offset().top - topOffset;
                function checkWidth() {
                    var windowSize = $(window).width();
                    if (windowSize <= 767) {
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 200
                        }, 300);
                    }
                    else {
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 100
                        }, 300);
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
                e.preventDefault();
            });
            // When page is scrolled
            $(window).scroll(function () {
                function checkWidth() {
                    var windowSize = $(window).width();
                    if (windowSize <= 767) {
                        var nm = $("html").scrollTop();
                        var nw = $("body").scrollTop();
                        var fromTop = (nm > nw ? nm : nw) + topOffset;
                        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                        var current = $(scrollItems).map(function () {
                            if ($(this).offset().top - 250 <= fromTop)
                                return this;
                        });
                        // Get the most recent passed section from current array
                        current = current[current.length - 1];
                        var id = current && current.length ? current[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            $(menuItems)
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    }
                    else {
                        var nm = $("html").scrollTop();
                        var nw = $("body").scrollTop();
                        var fromTop = (nm > nw ? nm : nw) + topOffset;
                        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                        var current = $(scrollItems).map(function () {
                            if ($(this).offset().top <= fromTop)
                                return this;
                        });
                        // Get the most recent passed section from current array
                        current = current[current.length - 1];
                        var id = current && current.length ? current[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            $(menuItems)
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
            });
        }
    });
}
$(window).on('load resize orientationchange', function() { 
    /********* Wrapper top space ********/
    var header_hright = $('header').outerHeight();
    $('header').next('.wrapper').css('margin-top', header_hright + 'px');  
}); 
function responsiveMenu(){
  if(jQuery(window).width() < 768) {
    $('.product-filter-column').prependTo('.product-heading-row .container .row');
  }
  else { 
    $('.product-filter-column').prependTo('.product-list-row');
  }
}
jQuery(document).ready(function() {
  responsiveMenu();
});

jQuery(window).resize(function() {
  responsiveMenu();
});
var swiper = new Swiper(".shop-protab-slider", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  autoplay: false,
  speed: 600,
  loop: true,
  // a11y: false,
 observer: true,  
 observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next.protab-arrow",
    prevEl: ".swiper-button-prev.protab-arrow",
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
}); 
var swiper = new Swiper(".product-center-slider", {
  slidesPerView: 5.5,
  slidesPerGroup: 1,
  autoplay: false,
  centeredSlides: true,
  spaceBetween: 20,
  speed: 800,
  loop: true,
  // a11y: false,
 observer: true,  
 observeParents: true,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  breakpoints: {
    1601: {
      slidesPerView: 5.5,
      slidesPerGroup: 1
    },
    1301: {
      slidesPerView: 4.5,
      slidesPerGroup: 1
    },
    992: {
      slidesPerView: 3.5,
      slidesPerGroup: 1
    },
    576: {
      spaceBetween: 0,
      slidesPerView: 2.5,
      slidesPerGroup: 1
    },
    100: {
      spaceBetween: 0,
      slidesPerView: 1.2,
      slidesPerGroup: 1
    }
  },
}); 
var swiper = new Swiper(".client-logo-slider", {
  slidesPerView: 5,
  slidesPerGroup: 1,
  autoplay: false,
  speed: 100,
  loop: true,
  centeredSlides: true,
  // a11y: false,
 observer: true,  
 observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next.brand-arrow",
    prevEl: ".swiper-button-prev.brand-arrow",
  },
  breakpoints: {
    1201: {
      slidesPerView: 5,
      slidesPerGroup: 1
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 1
    },
    576: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
}); 
function countDownIni(countdown) {
  $(countdown).each(function () {
    var countdown = $(this);
    var promoperiod;
    if (countdown.attr('data-promoperiod')) {
      promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 10);
    } else if (countdown.attr('data-countdown')) {
      promoperiod = countdown.attr('data-countdown');
    }
    if (Date.parse(promoperiod) - Date.parse(new Date()) > 0) {
      $(this).addClass('countdown-block');
      countdown.countdown(promoperiod, function (event) {
        // countdown.html(event.strftime('%-w weeks %-d days %Hh %Mm %Ss'));
        countdown.html(event.strftime('<span><span>%D</span><span class="dots"> : </span></span>' + '<span><span>%H</span><span class="dots"> : </span></span>' + '<span><span>%M</span><span class="dots"> : </span></span>' + '<span><span class="second">%S</span></span>'));
      });
    }

  });
}

(function($){
	"use strict";

  	// Off Canvas Open close start
	$("hcart").on('click', function () {
		$("body").addClass('fix');
		$(".off-canvas-wrapper").addClass('open');
	});

	$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".off-canvas-wrapper").removeClass('open');
	});
})
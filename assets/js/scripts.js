(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        // Polyglot Language Switcher
        $('.polyglot-language-switcher').polyglotLanguageSwitcher()
            .on('popupOpening', function(evt) {
                console.log(evt);
            }).on('popupOpened', function(evt) {
                console.log(evt);
            }).on('popupClosing', function(evt) {
                console.log(evt);
            }).on('popupClosed', function(evt) {
                console.log(evt);
            });

        // Main Hero Slider
        $(".hero-slider-area").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
            autoplay: true,
        });
         $(".hero-slider-area").on("translate.owl.carousel", function() {
            $(".slider-text h1, .slider-text h3 ").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-text .boxed-btn,.slider-text .transperent-btn").removeClass("animated zoomIn").css("opacity", "0");
        });

        $(".hero-slider-area").on("translated.owl.carousel", function() {
            $(".slider-text h1, .slider-text h3").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-text .boxed-btn,.slider-text .transperent-btn").addClass("animated zoomIn").css("opacity", "1");
        });

        // Testimonial Slider
        $(".testimonial-list").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
        });

        // Project Slider
        $(".project-slider").owlCarousel({
            margin: 30,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        // partner Slider
        $(".partner-list").owlCarousel({
            margin: 80,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });


        // Accordion
        $(".accordion-box").on('click', '.acc-btn', function() {

            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $('.accordion .acc-btn').removeClass('active');

            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $('.accordion').removeClass('active-block');
                $('.accordion .acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });


        // Funfact Counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });



        // Polyglot Language Switcher
        $(".main-menu").sticky({ topSpacing: 0 });

        // Scroll to Top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1000) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });
        $('.scroll-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });



    });


    jQuery(window).load(function() {
        // Preloader
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({
            'overflow': 'visible'
        });

    });


}(jQuery));
jQuery(window).on("load", function() {
    "use strict";

    /*  ===================================
        Loading Timeout
     ====================================== */
    $(".loader-area").fadeOut(1000);

});


//************************* SCROLL FUNCTIONS***********************//

/* ===================================
       Side Menu
   ====================================== */
if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function() {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function() {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
    }), $(".side-nav .navbar-nav").on("click", function() {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function() {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}


// Navbar Scroll Function
var $window = $(window);
$window.scroll(function() {
    var $scroll = $window.scrollTop();
    var $navbar = $(".navbar");
    if (!$navbar.hasClass("sticky-bottom")) {
        if ($scroll > 250) {
            $navbar.addClass("fixed-menu");
        } else {
            $navbar.removeClass("fixed-menu");
        }
    }
});
// bottom nav
if ($('.bottom-nav').length) {
    var $navheight = $('.bottom-nav').offset().top;
    $window.scroll(function() {
        if ($(this).scrollTop() > $navheight) {
            $('.bottom-nav').addClass("fixed-menu");
        } else {
            $('.bottom-nav').removeClass("fixed-menu");
        }

    });
}
//     //scroll to appear
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 500)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});

//     //Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

//*******************TEAM OWL CAROUSAL*************************
$('#team-carousal').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


//*******************TESTIMONIAL OWL CAROUSAL*************************
$('#testimonial-carousal').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

/* =====================================
                    sponsers  carousel
        ====================================== */

$('.sponser-tags').owlCarousel({

    loop: true,
    margin: 20,
    slideSpeed: 3000,
    slideTransition: 'linear',
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        },
    }

});


//*******************BLOG SECTION CAROUSAL***************
$('#blog-carousal').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    center: false,
    margin: 30,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


//******************PLAY AUDIO AND VIDEO************************//
$('video, audio').mediaelementplayer({
    // Do not forget to put a final slash (/)
    pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
    // this will allow the CDN to use Flash without restrictions
    // (by default, this is set as `sameDomain`)
    shimScriptAccess: 'always'
    // more configuration
});


//******************GALLERY CUBE PORTFOLIO *******************
// Cube Portfolio Initializing
$('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 2,
        }, {
            width: 1100,
            cols: 2,
        }, {
            width: 768,
            cols: 2,
        }, {
            width: 568,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 30
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 35,
        gapVertical: 35,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: "#js-loadMore-lightbox-gallery",
                action: "click",
                loadItems: 5,
            }
        }

    })
    .on('initComplete.cbp', function() {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function(index) {
            $(this).removeClass("even");

            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");

            }
        });
    })
    .on('onAfterLoadMore.cbp', function() {
        // your functionality
        var $this = $(this);
        $("#js-loadMore-lightbox-gallery a").addClass("d-none");
        $("#js-loadMore-lightbox-gallery").addClass("active-outer");
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function(index) {
            $(this).removeClass("even");
            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('filterComplete.cbp', function() {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
            $("#js-loadMore-lightbox-gallery").removeClass("d-none");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
            $("#js-loadMore-lightbox-gallery").addClass("d-none");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function(index) {
            $(this).removeClass("even");
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    });
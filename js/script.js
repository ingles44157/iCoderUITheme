$(document).ready(function() {
    $('.demo').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        touchThreshold: 1000,
    });
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $(".header_overlay").addClass("active_header");
        $(".nav-link").addClass("nav-linkScroll");
        $(".fa-search").addClass("fa-search_scroll");
        $('.Logo').attr('src', 'images/URCblack-logo.png')
        $('.langIcon').attr('src', 'images/langIconV.png')
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header_overlay").removeClass("active_header");
        $(".nav-link").removeClass("nav-linkScroll");
        $(".fa-search").removeClass("fa-search_scroll");
        $('.Logo').attr('src', 'images/URC-logo.png')
        $('.langIcon').attr('src', 'images/langIcon.png')
    }
});

/*jQuery(document).ready(function($) {
    var offset = $("#sticky-header").offset();
    checkOffset();

    $(window).scroll(function() {
        checkOffset();
    });

    function checkOffset() {
        if ($(document).scrollTop() > offset.top) {
            $('#sticky-header').addClass('fixed');
        } else {
            $('#sticky-header').removeClass('fixed');
        }
    }

});
*/
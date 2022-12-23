$(function () {
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on');
    });


    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(window).on('scroll', function () {
        console.log('스크롤 : ', $(window).scrollTop());
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }


    });



    $('.main_pro_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
    });


    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    })

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    })


    $('.lookbook_slide').slick({
        arrows: false,
        slidesToShow: 2,
    });

    $('.lookbook .arrows .prev').on('click', function () {
        $('.lookbook_slide').slick('slickPrev')
    });

    $('.lookbook .arrows .next').on('click', function () {
        $('.lookbook_slide').slick('slickNext')
    });


    $(Window).on('scroll', function () {
        var scr = $(window).scrollTop();
        if (scr > 300) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }

    });


    $('#toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 2000)
    })

});
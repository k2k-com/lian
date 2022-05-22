$(function () {

    $('.header-grand__slider-inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/icon/prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow"><img class="left" src="../images/icon/next.svg" alt=""></button>',
    });



    var mixer = mixitup('.products__inner-box');

});

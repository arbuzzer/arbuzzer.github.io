$(function(){
    $('a[href*="#"]').click(function(event) {
        event.preventDefault(); //отмена стандартной прокрутки
        var id = $(this).attr('href'), //берем айди блока с атрибутами href
            top = $(id).offset().top; //расчет высоты от начала страницы до блока
        $('.menu').removeClass('menu-state-open');  //убрать меню при клике на элемент меню
        $('body,html').animate({scrollTop: top}, 1500); //анимация перехода со скоростью ****мс
    });
});
$('.menu-icon').on('click', function() {
    $(this).closest('.menu').toggleClass('menu-state-open');
});
$('.slider').slick( {
    arrows: false,  //убрать стрелки
    dots: true,  //добавить точки
    autoplay: true,  //включить автовоспроизведение
    customPaging: function(slider, i) {
        return '<a href="javascript:void(0);"><img src="img/dot.png" /><img src="img/active-dot.png" /></a>';  //поменять точки на свои
    },
    autoplaySpeed: 4000  //скорость автовоспроизведение
});
$(".video-play").click(function(){
    $(".video-overlay").remove(); //убрать оверлей для видео
});
$('.quotes-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    touchMove: false,
    asNavFor: '.quotes-slider-nav'
});
$('.quotes-slider-nav').slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.quotes-slider-for',
    centerMode: true,
    touchMove: false,
    focusOnSelect: true
});
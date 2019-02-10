$(document).ready(function() {
    //открытие меню
    $('.menu-icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu-state-open');
    });

    //изменение скокрости прокрутки и закрытие меню по клику на один из пунктов
    $('.menu-item').on('click', function() {
        event.preventDefault();
        var id = $(this).attr('href'),
            top =$(id).offset().top;
        $('html,body').animate({scrollTop: top}, 1500);
        $(this).closest('.menu')
        .removeClass('menu-state-open');
    });

    //выбор размера
    $('.size').on('click', 'p', function(){
        $(this).toggleClass('active');
    });

    //открытие поиска
    $('.head-icon').on('click', 'img', function() {
        $('.head-icon input').toggleClass('search');
        if(document.documentElement.clientWidth <= 360) {
            $('.head-icon').toggleClass('margined');
        }    
    });

    //добавление и отнимание кол-ва товара
    var numerators = $('.numerator');
    $('.plus').click(function(){
        var numerator = $(this).next();
        var newValue = +numerator.text() + 1;
        numerator.text(newValue);
    });
    $('.minus').click(function(){
        var numerator = $(this).prev();
        if (parseFloat(numerator.text()) === 0) return false;
        var newValue = +numerator.text() - 1;
        numerator.text(newValue);
    });
});
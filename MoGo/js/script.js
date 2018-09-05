$(document).ready(function(){
    $("#top__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('.top__nav').removeClass('menu_state_open');
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
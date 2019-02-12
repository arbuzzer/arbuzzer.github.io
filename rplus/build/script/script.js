$(document).ready(function(){
    $('.carousel').slick({
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 510,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.menu-icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu-state-open');
    });
});

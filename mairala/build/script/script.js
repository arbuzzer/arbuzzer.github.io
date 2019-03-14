//show active nav-menu item
function scrollSpy() {
    var sections = ['home', 'about', 'portfolios', 'team', 'blog', 'contact'];
    var current;
    for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top - 106 <= $(window).scrollTop() ) {
          current = sections[i];
        }
      }
    $("a[href='#"+current+"']").addClass('active-nav');
    $(".menu-item").not("a[href='#"+current+"']").removeClass('active-nav');
}
$(document).ready( function() {
    scrollSpy();
});
$(window).scroll( function() {
    scrollSpy();
});

//scroll animation to element
$(function(){
    $('a[href*="#"]').click(function(event) {
        event.preventDefault(); //cancel standart scrolling
        var id = $(this).attr('href'), //take block id with the 'href' attributes
            top = $(id).offset().top - 106; //calculating the height from the top of the page to the block
        $('body,html').animate({scrollTop: top}, 1500); //transition animation with speed ****ms
        $('.menu').removeClass('menu-state-open');  //remove the menu when clicking on the menu item
    });
});
$('.menu-icon').on('click', function() {
    $(this).closest('.menu').toggleClass('menu-state-open');  //click to check 'menu-state-open' class
});

//animation circle when scrolling to circle-block                  
$(window).scroll(function(){
    $('.chart').each(function(){
        if($(window).scrollTop() >= $(this).offset().top - 600) {
            $('.chart').easyPieChart({
                size: 152,
                lineWidth: 4,
                scaleColor: false,
                barColor: '#fff',
                trackColor: 'transparent',
                lineCap: 'circle',
                animate: {
                    duration: 2000,
                    enabled: true
                }
            }),
            $(this).removeClass('hide');
        }
    });
});

//slick-slider
$('.slider').slick( {
    arrows: false,  //add arrows
    dots: true,  //add dots
    autoplay: true,  //enable autoplay
    customPaging: function(slider, i) {
        return '<a href="javascript:void(0);"><img src="img/dot.png" /><img src="img/active-dot.png" /></a>';  //change dots
    },
    autoplaySpeed: 4000  //autoplay speed
});
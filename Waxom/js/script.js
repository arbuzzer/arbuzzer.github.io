$(function(){
	$("a.proj_category_inact").click(function(){
		$("a.proj_category_act").removeClass("proj_category_act").addClass("proj_category_inact");
		$(this).removeClass("proj_category_inact").addClass("proj_category_act");
	});
	$("span.dot").click(function(){
		$("span.dot-curry").removeClass("dot-curry").addClass("dot");
		$(this).removeClass("dot").addClass("dot-curry");
	});
	$(".play_video").click(function(){
	    $(".video_overlay").remove();
	});
	$("i.arrow").click(function(){
		$("i.left_arrow").removeClass("left_arrow").addClass("right_arrow");
		$(this).removeClass("right_arrow").addClass("left_arrow");
	});
});
$(document).ready(function () {
    var show = true;
    var countbox = ".number_item_row";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.count').css('opacity', '1');
            $('.count').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
            show = false;
        }
    });
});

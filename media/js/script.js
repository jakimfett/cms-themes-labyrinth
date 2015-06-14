jQuery("document").ready(function ($) {
    var nav = $('#navigation-container');
    $(window).scroll(function () {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() > 369) {
            nav.addClass("floating-nav");
        } else {
            nav.removeClass("floating-nav");
        }
    });
});
jQuery("document").ready(function ($) {
    var nav = $('#navigation');
    var purchase = $('#purchase-float');
    $(window).scroll(function () {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() > 183) {
            nav.addClass("hidden");
            purchase.removeClass("hidden");
        } else {
            nav.removeClass("hidden");
            purchase.addClass("hidden");
        }
    });
});
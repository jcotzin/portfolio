$(document).ready(function() {
    $(".pclass").fadeIn(2000);
    $('.hover').bind('touchstart touchend', function(e) {
        // e.preventDefault();
        $(this).toggleClass('hover_effect');
    });



});

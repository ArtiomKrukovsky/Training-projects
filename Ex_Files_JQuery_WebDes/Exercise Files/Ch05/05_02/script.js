$(function() {
    "use strict";

    var $cart = $('#cart-water');

    $cart
        .find('.tt')
        .hide();
    
    $cart.find('.item').on('mouseenter mouseleave', function(){
        $(this).find('.tt').fadeToggle(300);
    });

    $('#filter-berry').click(function(e){
        e.preventDefault();
        
        //$cart.find('.berry').slideToggle(750);
        $cart.find('.berry').animate({
            'margin-left' : '+=50',
            'height' : '+=70',
            'opacity' : 0.5,
            'font-size' : '200%'
        }, 3000, '');
    });
});
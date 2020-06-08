$(function() {
    "use strict";
    
    var $cart = $('#cart-water');
    
    $('#filter-berry').click(function(e) {
    	e.preventDefault();
    	
    	$cart.find('.berry')
    		 .animate({
    		 	'margin-left' : '+=50',
    		 	'height' : '+=70',
    		 	'opacity' : 0.5,
    		 	'font-size' : '200%'
    		 }, 5000);
    });
});
$(function() {
    "use strict";
    
    var $cart = $('#cart-water');
    
    $('#filter-berry').click(function(e) {
    	e.preventDefault();
    	
    	$cart.find('.berry').slideToggle();
    		    });
});
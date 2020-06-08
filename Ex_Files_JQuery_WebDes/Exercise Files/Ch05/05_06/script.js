$(function() {
    "use strict";
    
    $('#cart-water')
    	.find('a')
    	.on('click', function(e){
    		e.preventDefault();
    		
    		var $link = $(this),
    			$img = $link.find('img');
    			
    		var $ghost = $img.clone()
    						 .appendTo($link)
    						 .addClass('ghost');
    		
    		var imgCoords = $img.offset(),
    			$target = $('#cart-target'),
    			targetCoords = $target.offset();
    		
    		$ghost.animate({
    			'left' : targetCoords.left - imgCoords.left,
    			'top' : targetCoords.top - imgCoords.top
    		}, 1500, 'easeInBack', function() {
    			$(this).remove();
    		});
    });
});
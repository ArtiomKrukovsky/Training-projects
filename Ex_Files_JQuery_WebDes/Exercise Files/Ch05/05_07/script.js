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
    			targetCoords = $target.find('p:first').offset();
    		
    		$ghost.animate({
    			'left' : targetCoords.left - imgCoords.left,
    			'top' : targetCoords.top - imgCoords.top,
    			'opacity' : 0,
    			'width' : '30px'
    		}, 1500, 'easeInBack', function() {
    			$(this).remove();
    			$target.append('Added 1 ' + $link.find('h3').text() + ' water<br>');
    		});
    });
});
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
            
            var imageCoords = $img.offset(),
                $target = $('#cart-target'),
                $targetItemHere = $target.find('p:first'),
                targetCoords = $targetItemHere.offset();
            
            $ghost.animate({
                'left' : targetCoords.left - imageCoords.left,
                'top' : targetCoords.top - imageCoords.top,
                'height' : '-=200',
                'width' : '-=100',
            },1000, 'easeInBack', function(){
                $(this).remove();

                var $productName = $link.find('h3').text();
                $target.append('<p>Added 1 ' + $productName + '</p>').css('font-size', '2');
            });

    });
});
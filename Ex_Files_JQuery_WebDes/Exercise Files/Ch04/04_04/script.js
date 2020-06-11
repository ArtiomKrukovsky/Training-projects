$(function() {
"use strict";

	var $flowers = $('#flower-items');
	
	$flowers
    	.find('a')
    	.colorbox({
    		'rel' : 'gallery',
			'maxWidth' : '80%',
			'slideshow' : true,
			'slideshowSpeed' : 3000,
			'transition' : 'fade',
			'current' : 'arrangement {current} of {total}',
			'opacity' : '45%'
    	});
});
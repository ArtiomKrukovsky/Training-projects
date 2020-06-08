$(function() {
"use strict";

	var $flowers = $('#flower-items');
	
	$flowers
    	.find('a')
    	.colorbox({
    		'rel' : 'gallery',
    		'maxWidth' : '80%'
    	});
});
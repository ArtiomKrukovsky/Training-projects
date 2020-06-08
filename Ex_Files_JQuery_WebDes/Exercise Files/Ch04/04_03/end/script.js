$(function() {
"use strict";
	// https://www.youtube.com/watch?v=Bn7vZJ0AIbE
	
	var $flowers = $('#flower-items');
	
	$flowers
    	.find('a')
    	.colorbox({
    		'rel' : 'gallery',
    		'maxWidth' : '80%'
    	});
    
    $flowers
    	.find('li:nth-child(2)')
    	.colorbox({
    		'html' : '<h1>Colorbox</h1><p>Congratulations on opening a Colorbox.</p>'
    	});
    
    $flowers
    	.find('li:nth-child(3)')
    	.colorbox({
    		'href' : 'https://www.youtube.com/embed/Bn7vZJ0AIbE',
    		'iframe' : true,
    		'width' : 640,
    		'height' : 400
    	});
});
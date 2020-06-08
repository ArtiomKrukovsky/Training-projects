$(function(){
'use strict';

	var $form = $('#my-form');
	
	$form.find('.group:nth-child(1)')
		.addClass('error');
	
	$form.find('.group:nth-child(2)')
		.addClass('msg')
		.append('<p>Good choice!</p>');
});
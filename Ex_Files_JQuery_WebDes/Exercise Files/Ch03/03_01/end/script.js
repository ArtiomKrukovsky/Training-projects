$(function() {
'use strict';
	
	$('#name2').on('change', nameClick);
	
	function nameClick() {
		console.log('You changed the value of the name field!');
		
		// $(this).css('background-color', '#ee9');
	}
	
	$('#frmContact').on('click', function(event) {
		event.preventDefault();
	});
	
});
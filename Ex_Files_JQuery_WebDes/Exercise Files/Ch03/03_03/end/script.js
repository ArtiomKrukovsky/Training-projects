$(function() {
'use strict';

	$('#frmContact').submit(function(evt){
		evt.preventDefault();
		
		console.log('First link', $('a:first').attr('href'));
		
		$('#backpack').prop({
			'checked' : false,
			'disabled' : true
		});
	});
});
$(function() {
'use strict';

	var $checkboxes = $('.checkbox-group').find('input[type=checkbox]');
	$checkboxes.prop('disabled', true);

	$('#bike_check').click(function() {
		var $toggle = $(this);
		
		if ($toggle.prop('checked') === true) {
			$checkboxes.prop('disabled', false);
		} else {
			$checkboxes.prop('disabled', true);
		}
		
		// slightly clever way:
		// $checkboxes.prop('disabled', !$toggle.prop('checked'));
	});
	
	$('#newsletterNo').click(function() {
		$('#frmContact').attr('action', 'contact-submitted-nosub.htm');
	});
	
	$('#newsletterYes').click(function() {
		$('#frmContact').attr('action', 'contact-submitted.htm');
	});
});
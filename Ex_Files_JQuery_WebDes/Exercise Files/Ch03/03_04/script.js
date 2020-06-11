$(function() {
'use strict';
    var $checkboxGroup = $('.checkbox-group input')
        .prop('disabled', true);
    
    $('#bike_check').on('change', function(){

        if($(this).prop('checked')){
            $checkboxGroup.prop('disabled', false);
        }
        else{
            $checkboxGroup.prop('disabled', true);
        }
    });

    $('[name=newsletter]').on('change', function(){
        
        if($(this).val() == "Yes"){
            $('#frmContact').attr('action', 'contact-submitted.htm')
        }
        else{
            $('#frmContact').attr('action', 'contact-submitted-nosub.htm')
        }
    });
});
$(function(){
'use strict';
    var $form = $('#my-form');
    
    var $name = $form.find('div:eq(0)')
        .addClass('error');

    var $color = $form.find('div:eq(1)')
        .addClass('message')
        .append('<p>Good Choice!</p>');
});
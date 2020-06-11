$(function() {
'use strict';

    $('#name2').on('change', function nameClick(){
        console.log('You clicked the name field');

        $(this).css('background-color', '#ee9')
    });

    $('#frmContact').on('submit', function(event){
        event.preventDefault();

        console.log('First link' + $('a:first').attr('href'));

        $('#backpack').prop('checked', false)
    });

    
});
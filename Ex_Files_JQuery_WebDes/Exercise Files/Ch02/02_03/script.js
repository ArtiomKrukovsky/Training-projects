$(function(){
    "use strict";
    console.log('f');

    var $grid = $('#bab_grid'),
        $lists = $grid.find('li');
    
    $lists.css('background', '#600')
        .animate({width: '-=100'}, 2000)
        .fadeOut()
        .fadeIn('slow');
});
$(function(){
    "use strict"
    var $items = $('#flower-items');

    $items
        .find('a')
        .colorbox({
            'rel' : 'gallery',
            'maxWidth' : '80%'
        });

    $items
        .find('li:nth-child(2)')
        .colorbox({
            'html' :"<h1>Colorbox</h1><p>Congratulations on opening a Colorbox</p>"
        });

    $items
        .find('li:nth-child(3)')
        .colorbox({
            'href' : 'https://www.youtube.com/embed/NH_oB8E07Xw',
            'iframe' : true,
            'width' : 640,
            'height' : 400
        });
});
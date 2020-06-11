$(function(){
'use strict';
    var $group = $('#group-friends');
    
    var $clone = $group
        .find('input:last')
        .clone();
    
    $group.append($clone);
});
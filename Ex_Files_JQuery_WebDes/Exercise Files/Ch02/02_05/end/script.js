$(function(){
'use strict';
    var $group = $('#group-friends');
    
    var $copy = $group
    	.find('input:last')
    	.clone();
    
    $copy.appendTo($group);
});
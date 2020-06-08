(function(){
'use strict';
document.addEventListener('DOMContentLoaded', setDateTimeToClock);

})();

function setDateTimeToClock(){
    setInterval(updateTime, 1000);
    setInterval(updateDate, 1000);
}

function updateTime(){
    var clock = document.getElementById('current-time');
    var date = new Date();

    var sepClass = '';
    if(date.getSeconds() % 2 === 1){
        sepClass = 'trans';
    }

    var sep = '<span class = "'+ sepClass +'">:</span>';

    var hours = date.getHours(),
        minutes = date.getMinutes(),
        timeZone = "AM";

    if(hours > 12){
        hours -= 12;
        timeZone = "PM";
    }
    else if(hours === 0){
        hours = 12;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    var currentTime = hours + sep + minutes + ' ' + timeZone;
    clock.innerHTML = currentTime;
}

function updateDate(){
    var currentDate = document.getElementById('current-date');
    var date = new Date();

    var mounth = formatMonth(date.getMonth()),
        currentDay = date.getDate();

    var result = mounth + ' ' + currentDay;
    currentDate.textContent = result;
}

function formatMonth(mounthId){
    mounthId = parseInt(mounthId, 10);

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[mounthId];
}
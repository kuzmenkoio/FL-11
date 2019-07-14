'use strict';

function formatTime(minutes) {
    let days;
    let hours;

    if (minutes < 60) {
        days = 0;
        hours = 0;
    } else if (minutes >= 60) {
        hours = parseInt(minutes / 60, 10);
        minutes = minutes - (hours * 60);

        if (hours >= 24) {
            days = parseInt(hours / 24);
            hours = hours - (days * 24);
        } else if (hours < 24) {
            days = 0;
            hours = hours - (days * 24);
        }
    }

    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).'

}

formatTime(1440);
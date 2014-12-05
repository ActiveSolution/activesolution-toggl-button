/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#title-wrapper:not(.toggl)', { observe: true }, function (elem) {
    
    var link = togglbutton.createTimerLink({
        className: 'lernia-helpdesk',
        description: document.title,
        projectName: 'Lernia Applikationsförvaltning'
    });
    
    if ($('h1 span', elem)) {
        $('h1 span').appendChild(link);
    } else {
        $('h1', elem).appendChild(link);        
    }
});

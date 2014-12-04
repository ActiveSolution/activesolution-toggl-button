/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#title-wrapper:not(.toggl)', { observe: true }, function (elem) {
    
    var link, description,
      titleElem = $('#title-wrapper h1', elem);    

    description = titleElem.innerText;

    link = togglbutton.createTimerLink({
        className: 'lernia-helpdesk',
        description: description        
    });

    $('#title-wrapper h1').appendChild(link);
});

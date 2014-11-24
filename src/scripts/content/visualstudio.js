/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
/*jslint browser: true, devel: true */
(function () {
  'use strict';

  togglbutton.render('[id^=tile-]:not(.toggl)', {observe: true}, function (elem) {
    // Added a timeout due to the title being loaded async and not ready yet
    setTimeout(function () {
      var link,
        description = elem.querySelector('.witTitle').textContent,
        project = $('.project-name').textContent,
        addTo = elem.querySelector('.witExtra').firstChild;

      link = togglbutton.createTimerLink({
        className: 'visualstudio-micro',
        buttonType: 'minimal',
        description: description,
        projectName: project
      });

      addTo.insertBefore(link, addTo.firstChild);
    }, 2000);
  });

  togglbutton.render('.workitem-info-bar:not(.toggl)', {observe: true}, function (elem) {
    // Added a timeout due to the title being loaded async and not ready yet
    setTimeout(function () {
      var link,
        description = elem.title,
        project = $('#' + $('[accesskey=A]').getAttribute('for')).title,
        div = elem.firstChild;

      link = togglbutton.createTimerLink({
        className: 'visualstudio',
        buttonType: 'minimal',
        description: description,
        projectName: project
      });

      div.insertBefore(link, div.firstChild);
    }, 2000);
  });
}());
/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('[id$=lblIssueHeading]:not(.toggl)', {observe: true}, function (elem) {
  var link,
      description = $('[id$=lblIssueHeading]').textContent,
      project = $('[id$=companyTextBox]').value;

  link = togglbutton.createTimerLink({
    className: 'activeworkflow',
    buttonType: 'minimal',
    description: description,
    projectName: project
  });

  elem.insertBefore(link,elem.firstChild);
});
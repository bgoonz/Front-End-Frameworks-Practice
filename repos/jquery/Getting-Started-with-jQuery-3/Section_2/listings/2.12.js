$(()=>{

  $('td:contains(Henry)').parent().find('td:eq(1)').addClass('highlight').end().find('td:eq(2)').addClass('highlight');

  $('td:contains(Henry)')
    .parent()
    .find('td:eq(1)')
    .addClass('highlight')
    .end()
    .find('td:eq(2)')
    .addClass('highlight');
});

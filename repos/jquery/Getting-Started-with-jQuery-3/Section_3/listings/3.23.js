$(() => {

  const toggleHover = (e) => {
    $(e.currentTarget)
      .toggleClass('hover');
  };

  $('#switcher')
    .hover(toggleHover, toggleHover);


  const toggleSwitcher = (e) => {
    if (!$(e.target).is('button')) {
      $(e.currentTarget)
        .children('button')
        .toggleClass('hidden');
    }
  };

  $('#switcher')
    .on('click', toggleSwitcher)
    .click();

  const setBodyClass = (className) => {
    $('body')
      .removeClass()
      .addClass(className);

    $('#switcher button')
      .removeClass('selected');
    $(`#switcher-${className}`)
      .addClass('selected');
    $('#switcher')
      .off('click', toggleSwitcher);

    if (className == 'default') {
      $('#switcher')
        .on('click', toggleSwitcher);
    }
  };

  $('#switcher-default')
    .addClass('selected');

  const triggers = {
    D: 'default',
    N: 'narrow',
    L: 'large'
  };

  $('#switcher')
    .click((e) => {
      if ($(e.target).is('button')) {
        setBodyClass(e.target.id.split('-')[1]);
      }
    });

  $(document)
    .keyup((e) => {
      const key = String.fromCharCode(e.which);

      if (key in triggers) {
        setBodyClass(triggers[key]);
      }
    });
});

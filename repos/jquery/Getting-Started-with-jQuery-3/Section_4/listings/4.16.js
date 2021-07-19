$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch (this.id) {
      case 'switcher-large':
        num *= 1.4;
        break;
      case 'switcher-small':
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);
    }
    $speech.animate({fontSize: num + 'px'}, 'slow');
  });

  var $firstPara = $('p').eq(1);
  $firstPara.hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    $firstPara.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
    var $link = $(this);
    if ($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
  });

  $('div.label').click(function() {
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher.css({
      position: 'relative'
    }).animate({
      borderWidth: '5px',
      left: paraWidth - switcherWidth,
      height: '+=20px'
    }, 'slow');
  });
});

$(() => {
  const sizeMap = {
    'switcher-small': n => n / 1.4,
    'switcher-large': n => n * 1.4,
    'switcher-default': () => defaultSize
  };

  const $speech = $('div.speech');
  const $firstPara = $('p')
    .eq(1)
    .hide();

  const defaultSize = parseFloat($speech.css('fontSize'));

  $('#switcher button')
    .click((e) => {
      const num = parseFloat($speech.css('fontSize'));
      $speech.animate({
        fontSize: `${sizeMap[e.target.id](num)}px`
      });
    });

  $('a.more')
    .click((e) => {
      e.preventDefault();

      $firstPara
        .animate({
          opacity: 'toggle',
          height: 'toggle'
        }, 'slow');
      $(e.target)
        .text(
          $(e.target).text() === 'read more' ?
            'read less' : 'read more'
        );
    });

  $('div.label')
    .click((e) => {
      const $switcher = $(e.target)
        .parent();
      const paraWidth = $('div.speech p')
        .outerWidth();
      const switcherWidth = $switcher
        .outerWidth();

      $switcher
        .css('position', 'relative')
        .animate({
          borderWidth: '5px',
          left: paraWidth - switcherWidth,
          height: '+=20px'
        }, 'slow');
    });
});

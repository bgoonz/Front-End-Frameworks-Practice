(($) => {
  $.sum = (array) =>
    array.reduce((result, item) => parseFloat($.trim(item)) + result, 0);
})(jQuery);

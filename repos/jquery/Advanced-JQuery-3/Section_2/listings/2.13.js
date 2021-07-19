/******************************************************************************
  $.sum()
  Return the total of the numeric values in an array/object.
******************************************************************************/
(function ($) {
  $.mathUtils = {
    sum: (array) =>
      array.reduce((result, item) => parseFloat($.trim(item)) + result, 0),
    average: (array) =>
      Array.isArray(array) ? $.mathUtils.sum(array) / array.length : "",
  };
})(jQuery);

/******************************************************************************
  .swapClass()
  Exchange one class for another on the selected elements.
******************************************************************************/
(($) => {
  $.fn.swapClass = function (class1, class2) {
    return this.each((i, element) => {
      const $element = $(element);

      if ($element.hasClass(class1)) {
        $element.removeClass(class1).addClass(class2);
      } else if ($element.hasClass(class2)) {
        $element.removeClass(class2).addClass(class1);
      }
    });
  };
})(jQuery);
/******************************************************************************
  .shadow()
  Create a shadow effect on any element by brute-force copying.
******************************************************************************/
(($) => {
  $.fn.shadow = function (opts) {
    const defaults = {
      copies: 5,
      opacity: 0.1,
      copyOffset: (index) => ({
        x: index,
        y: index,
      }),
    };
    const options = $.extend({}, defaults, opts);

    return this.each((i, element) => {
      const $originalElement = $(element);

      for (let i = 0; i < options.copies; i++) {
        const offset = options.copyOffset(i);

        $originalElement
          .clone()
          .css({
            position: "absolute",
            left: $originalElement.offset().left + offset.x,
            top: $originalElement.offset().top + offset.y,
            margin: 0,
            zIndex: -1,
            opacity: options.opacity,
          })
          .appendTo("body");
      }
    });
  };
})(jQuery);
/******************************************************************************
  End plugin code; begin custom script code.
******************************************************************************/
$(() => {
  const $inventory = $("#inventory tbody");
  const quantities = $inventory
    .find("td:nth-child(2)")
    .map((index, qty) => $(qty).text())
    .get();
  const prices = $inventory
    .find("td:nth-child(3)")
    .map((index, qty) => $(qty).text())
    .get();
  const sum = $.mathUtils.sum(quantities);
  const average = $.mathUtils.average(prices);

  $("#sum").find("td:nth-child(2)").text(sum);
  $("#average").find("td:nth-child(3)").text(average.toFixed(2));
  $("table").click(() => {
    $("tr").swapClass("one", "two");
  });
  $("h1").shadow({
    copyOffset: (index) => ({
      x: -index,
      y: -2 * index,
    }),
  });
});

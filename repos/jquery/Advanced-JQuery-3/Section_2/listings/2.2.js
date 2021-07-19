(($) => {
  $.sum = (array) =>
    array.reduce((result, item) => parseFloat($.trim(item)) + result, 0);
})(jQuery);
/******************************************************************************
  End plugin code; begin custom script code.
******************************************************************************/
$(() => {
  const quantities = $("#inventory tbody")
    .find("td:nth-child(2)")
    .map((index, qty) => $(qty).text())
    .get();
  const sum = $.sum(quantities);

  $("#sum").find("td:nth-child(2)").text(sum);
});

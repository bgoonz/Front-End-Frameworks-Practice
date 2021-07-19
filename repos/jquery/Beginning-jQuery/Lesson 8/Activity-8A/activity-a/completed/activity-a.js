$(() => {
  // Code goes here
  $("input[name=search]").click((e) => {
    $("table tr").show();
    const maxPrice = Number.parseFloat($("input[name=price]").val());
    if (Number.isNaN(maxPrice)) {
      return;
    }
    $("table")
      .find("tr:has(td)")
      .not((i, element) => {
        const rowPrice = Number.parseFloat(
          $(element).children(":nth-child(5 )").text()
        );
        return rowPrice <= maxPrice;
      })
      .hide();
  });
});

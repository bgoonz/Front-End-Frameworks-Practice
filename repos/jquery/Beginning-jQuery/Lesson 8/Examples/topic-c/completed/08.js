$(() => {
  // Write code here
  const comparator = (a, b, direction = 1) =>
    a < b ? -direction : a > b ? direction : 0;

  $("#t-2")
    .find("thead th")
    .slice(1)
    .wrapInner($("<a/>").attr("href", "#"))
    .addClass("sort")
    .on("click", (e) => {
      e.preventDefault();

      const $target = $(e.currentTarget);
      const column = $target.index();
      const sortKey = $target.data("sort").key;
      const sortDirection = $target.hasClass("sorted-asc") ? -1 : 1;

      $("#t-2")
        .find("tbody > tr")
        .get()
        .sort((a, b) =>
          comparator(
            $(a).data("book")[sortKey],
            $(b).data("book")[sortKey],
            sortDirection
          )
        )
        .forEach((element) => {
          $(element).parent().append(element);
        });

      $target
        .siblings()
        .addBack()
        .removeClass("sorted-asc sorted-desc")
        .end()
        .end()
        .addClass(sortDirection == 1 ? "sorted-asc" : "sorted-desc");
    });
});

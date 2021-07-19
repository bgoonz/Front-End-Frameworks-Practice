$(() => {
  function stripe() {
    $("#news")
      .find("tr.alt")
      .removeClass("alt")
      .end()
      .find("tbody")
      .each((i, element) => {
        $(element)
          .children(":visible")
          .has("td")
          .filter((i) => i % 4 < 2)
          .addClass("alt");
      });
  }

  stripe();

  $("#topics a").click((e) => {
    e.preventDefault();
    const topic = $(e.target).text();

    $(e.target)
      .addClass("selected")
      .siblings(".selected")
      .removeClass("selected");

    $("#news tr").show();
    if (topic != "All") {
      $("#news")
        .find("tr:has(td)")
        .not(
          (i, element) => $(element).children(":nth-child(4)").text() == topic
        )
        .hide();
    }

    stripe();
  });
});

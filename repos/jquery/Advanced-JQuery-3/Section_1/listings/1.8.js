$(() => {
  const $books = $("#books").cycle({
    timeout: 2000,
    speed: 200,
    pause: true,
  });

  if ($.cookie("cyclePaused")) {
    $books.cycle("pause");
  }

  const $controls = $("<div/>")
    .attr("id", "books-controls")
    .insertAfter($books);

  $("<button/>")
    .text("Pause")
    .click(() => {
      $books.cycle("pause");
      $.cookie("cyclePaused", "y");
    })
    .appendTo($controls);
  $("<button/>")
    .text("Resume")
    .click(() => {
      $("ul:paused").cycle("resume");
      $.cookie("cyclePaused", null);
    })
    .appendTo($controls);

  $books.hover(
    (e) => {
      $(e.target).find(".title").animate(
        {
          backgroundColor: "#eee",
          color: "#000",
        },
        1000
      );
    },
    (e) => {
      $(e.target).find(".title").animate(
        {
          backgroundColor: "#000",
          color: "#fff",
        },
        1000
      );
    }
  );
});

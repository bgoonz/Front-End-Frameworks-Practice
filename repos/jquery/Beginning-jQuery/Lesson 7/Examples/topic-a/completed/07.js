$(() => {
  // Code goes here
  $.fn.cycle.defaults.timeout = 10000;
  $.fn.cycle.defaults.random = true;

  const $books = $("#books").cycle({
    slides: "> li",
    timeout: 2000,
    speed: 200,
    pauseOnHover: true,
  });

  const $controls = $("<div/>")
    .attr("id", "books-controls")
    .insertAfter($books);

  $("<button/>")
    .text("Pause")
    .click(() => {
      $books.cycle("pause");
    })
    .appendTo($controls);

  $("<button/>")
    .text("Resume")
    .click(() => {
      $books.cycle("resume");
    })
    .appendTo($controls);
});

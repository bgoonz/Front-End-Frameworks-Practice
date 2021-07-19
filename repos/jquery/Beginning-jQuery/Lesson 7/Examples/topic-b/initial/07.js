$(() => {
  const $books = $("#books").cycle({
    slides: "> li",
    timeout: 2000,
    speed: 200,
    pauseOnHover: true,
  });

  const $controls = $("<div/>")
    .attr("id", "books-controls")
    .insertAfter($books);

  const $pauseButton = $("<button/>")
    .text("Pause")
    .click(() => {
      $books.cycle("pause");
    })
    .appendTo($controls);

  const $resumeButton = $("<button/>")
    .text("Resume")
    .click(() => {
      $books.cycle("resume");
    })
    .appendTo($controls);

  // Code goes here
});

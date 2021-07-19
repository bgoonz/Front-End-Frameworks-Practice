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

  $books.hover(
    (e) => {
      $(e.currentTarget).find(".title").animate(
        {
          backgroundColor: "#eee",
          color: "#000",
        },
        1000
      );
    },
    (e) => {
      $(e.currentTarget).find(".title").animate(
        {
          backgroundColor: "#000",
          color: "#fff",
        },
        1000
      );
    }
  );

  $("h1").click((e) => {
    $(e.target).toggleClass("highlighted", "slow", "easeInExpo");
  });

  $("<button/>")
    .text("Resume or shake")
    .click((e) => {
      const paused = $books.is(".cycle-paused");
      if (paused) {
        $books.cycle("resume");
      } else {
        $(e.target).effect("shake", {
          distance: 10,
        });
      }
    })
    .appendTo($controls);

  $books.find(".title").resizable({ handles: "s" });

  $("button").button();

  $pauseButton.button({
    icons: { primary: "ui-icon-pause" },
  });

  $resumeButton.button({
    icons: { primary: "ui-icon-play" },
  });

  $("<div/>")
    .attr("id", "slider")
    .slider({
      min: 0,
      max: $books.find("li").length - 1,
      slide: (e, ui) => {
        $books.cycle(ui.value);
      },
    })
    .appendTo($controls);

  $books.on("cycle-before", (event, options) => {
    const slideIndex = options.nextSlide;
    $("#slider").slider("value", slideIndex);
  });
});

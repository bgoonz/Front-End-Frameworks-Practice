$(() => {
  // Write code here
  let pageNum = 1;
  let timer = 0;

  $(document).on("nextPage", (e) => {
    const $link = $("#more-photos");
    const url = $link.attr("href");

    if (pageNum > 19) {
      $("#more-photos").remove();
      return;
    }

    $link.attr("href", `pages/${++pageNum}.html`);

    $.get(url).then((data) => {
      $("#gallery").append(data);
    });
  });

  $("#more-photos").click((e) => {
    e.preventDefault();
    $(e.target).trigger("nextPage");
  });

  $(window)
    .scroll(() => {
      if (!timer) {
        timer = setTimeout(() => {
          const distance = $(window).scrollTop() + $(window).height();

          if ($("#container").height() <= distance) {
            $(document).trigger("nextPage");
          }
          timer = 0;
        }, 250);
      }
    })
    .trigger("scroll");

  $("#gallery").on("mouseenter mouseleave", "div.photo", (e) => {
    const $details = $(e.currentTarget).find(".details");

    if (e.type == "mouseenter") {
      $details.fadeTo("fast", 0.7);
    } else {
      $details.fadeOut("fast");
    }
  });
});

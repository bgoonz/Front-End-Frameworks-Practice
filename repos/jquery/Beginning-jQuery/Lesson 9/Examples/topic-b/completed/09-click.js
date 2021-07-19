$(() => {
  // Write code here
  let pageNum = 1;

  $("#more-photos").click((e) => {
    e.preventDefault();
    $(e.target).trigger("nextPage", [true]);
  });

  $(document).on("nextPage", (e, scrollToVisible) => {
    const $link = $(e.target);
    const url = $link.attr("href");

    if (pageNum > 19) {
      $("#more-photos").remove();
      return;
    }

    $link.attr("href", `pages/${++pageNum}.html`);

    $.get(url).then((data) => {
      $("#gallery").append(data);

      if (scrollToVisible) {
        $(window).scrollTop($(document).height());
      }
    });
  });

  $("#gallery").on("mouseenter mouseleave", "div.photo", (e) => {
    const $details = $(e.currentTarget).find(".details");

    if (e.type == "mouseenter") {
      $details.fadeTo("fast", 0.7);
    } else {
      $details.fadeOut("fast");
    }
  });
});

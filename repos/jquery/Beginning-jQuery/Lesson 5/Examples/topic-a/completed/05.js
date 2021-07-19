$(() => {
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: "external",
    title: function () {
      return "Learn more about " + $(this).text() + " at Wikipedia.";
    },
    id: (index) => "wikilink-" + index,
  });

  $("#hide-read").change((event) => {
    if ($(event.target).is(":checked")) {
      $(".chapter p")
        .filter((i, p) => $(p).data("read"))
        .hide();
    } else {
      $(".chapter p").show();
    }
  });

  $(".chapter p").click((event) => {
    const $p = $(event.target);

    $p.css("textDecoration", $p.data("read") ? "none" : "line-through").data(
      "read",
      !$p.data("read")
    );
  });
});

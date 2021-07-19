$(() => {
  // Write code here
  $("#fx-toggle")
    .show()
    .on("click", () => {
      $.fx.off = !$.fx.off;
    });

  $.fx.speeds._default = 250;

  const showDetails = (e) => {
    $(e.currentTarget)
      .siblings(".active")
      .removeClass("active")
      .children("div")
      .fadeOut()
      .end()
      .end()
      .addClass("active")
      .find("div")
      .css({
        display: "block",
        left: "-300px",
        top: 0,
      })
      .each((i, element) => {
        $(element).animate({
          left: 0,
          top: 25 * i,
        });
      });
  };
  $("div.member").click(showDetails);

  $("div.member").on("mouseenter mouseleave", (e) => {
    const type = e.type;
    const width = type == "mouseenter" ? 85 : 75;
    const height = width;
    const paddingTop = type == "mouseenter" ? 0 : 5;
    const paddingLeft = paddingTop;

    $(e.currentTarget).find("img").stop().animate({
      width,
      height,
      paddingTop,
      paddingLeft,
    });
  });
});

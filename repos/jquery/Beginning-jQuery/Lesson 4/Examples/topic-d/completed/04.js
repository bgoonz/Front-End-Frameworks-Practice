$(() => {
  // Code from the lesson goes here
  const sizeMap = {
    "switcher-small": (n) => n / 1.4,
    "switcher-large": (n) => n * 1.4,
    "switcher-default": () => defaultSize,
  };

  const $speech = $("div.speech");
  const defaultSize = parseFloat($speech.css("fontSize"));

  $("#switcher button").click((e) => {
    const num = parseFloat($speech.css("fontSize"));
    $speech.animate({
      fontSize: `${sizeMap[e.target.id](num)}px`,
    });
  });

  const $firstPara = $("p").eq(1).hide();

  $("a.more").click((e) => {
    e.preventDefault();

    $firstPara.slideToggle("slow");
    $(e.target).text(
      $(e.target).text() === "read more" ? "read less" : "read more"
    );
  });

  $("div.label").click((e) => {
    const $switcher = $(e.target).parent();
    const paraWidth = $("div.speech p").outerWidth();
    const switcherWidth = $switcher.outerWidth();

    $switcher
      .css("position", "relative")
      .fadeTo("fast", 0.5)
      .animate(
        { left: paraWidth - switcherWidth },
        { duration: "slow", queue: false }
      )
      .fadeTo("slow", 1.0)
      .slideUp("slow", () => {
        $switcher.css("backgroundColor", "#f00");
      })
      .slideDown("slow");
  });

  $("p")
    .eq(2)
    .css("border", "1px solid #333")
    .click((e) => {
      $(e.target)
        .next()
        .slideDown("slow", () => {
          $(e.target).slideUp("slow");
        });
    });

  $("p").eq(3).css("backgroundColor", "#ccc").hide();
});

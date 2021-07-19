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

    $switcher.css("position", "relative").animate(
      {
        borderWidth: "5px",
        left: paraWidth - switcherWidth,
        height: "+=20px",
      },
      "slow"
    );
  });
});

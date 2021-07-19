$(() => {
  // Write code here
  $("#fx-toggle")
    .show()
    .on("click", () => {
      $.fx.off = !$.fx.off;
    });

  $.fx.speeds._default = 250;

  const $movable = $("<div/>").attr("id", "movable").appendTo("body");

  const bioBaseStyles = {
    display: "none",
    height: "5px",
    width: "25px",
  };

  const bioEffects = {
    duration: 800,
    easing: "easeOutQuart",
    specialEasing: {
      opacity: "linear",
    },
  };

  const showBio = (target) => {
    const $member = $(target).parent();
    const memberOffset = $member.offset();
    const $bio = $member.find("p.bio");
    const startStyles = $.extend({}, bioBaseStyles, memberOffset);
    const endStyles = {
      width: $bio.width(),
      top: memberOffset.top + 5,
      left: $member.width() + memberOffset.left - 5,
      opacity: "show",
    };

    $movable
      .html($bio.clone())
      .css(startStyles)
      .animate(endStyles, bioEffects)
      .animate({ height: $bio.height() }, { easing: "easeOutQuart" });
  };

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
        $(element).animate(
          {
            left: 0,
            top: 25 * i,
          },
          {
            duration: "slow",
            specialEasing: {
              top: "easeInQuart",
            },
          }
        );
      })
      .promise()
      .then(showBio);
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

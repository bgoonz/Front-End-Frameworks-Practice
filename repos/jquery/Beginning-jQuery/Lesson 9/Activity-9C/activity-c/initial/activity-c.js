$(() => {
  const pathWidth = $("#path").width() - 20;
  const pathHeight = $("#path").height() - 20;

  $("#go").on("click", () => {
    $(".box")
      .clearQueue()
      .stop()
      .css({
        left: 10,
        top: 10,
      })
      .animate(
        {
          top: pathHeight,
        },
        3000
      )
      .animate(
        {
          left: pathWidth,
        },
        3000
      )
      .animate(
        {
          top: 10,
        },
        3000
      );
  });

  // Write code here
});

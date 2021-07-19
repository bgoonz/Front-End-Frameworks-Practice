$(() => {
  // Write your code here
  $("#clicker").click(() => {
    $("#square")
      .animate({
        opacity: 0.1,
        width: "100px",
        height: "100px",
      })
      .animate({
        opacity: 1,
        width: "50px",
        height: "50px",
      })
      .animate({
        opacity: 0.1,
        width: "100px",
        height: "100px",
      })
      .animate({
        opacity: 1,
        width: "50px",
        height: "50px",
      })
      .animate({
        opacity: 0.1,
        width: "100px",
        height: "100px",
      })
      .animate({
        opacity: 1,
        width: "50px",
        height: "50px",
      });
  });
});

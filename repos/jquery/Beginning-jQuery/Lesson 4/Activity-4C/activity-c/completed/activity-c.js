$(() => {
  // Write your code here
  $("#clicker").click(() => {
    $("#square").animate({
      width: "300px",
      height: "300px",
      opacity: 0.2,
      bottom: 0,
    });
  });
});

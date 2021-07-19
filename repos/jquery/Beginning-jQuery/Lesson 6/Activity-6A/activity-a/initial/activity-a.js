$(() => {
  $(".reset").click((event) => {
    $(".forecast .image img").attr("src", "/img/unknown.png");
    $(".forecast .temp-celsius span").text("Unknown");
    $(".forecast .temp-fahrenheit span").text("Unknown");
  });

  // Write code here
});

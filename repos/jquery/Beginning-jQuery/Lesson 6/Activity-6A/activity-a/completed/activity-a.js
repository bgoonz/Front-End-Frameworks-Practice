$(() => {
  $(".reset").click((event) => {
    $(".forecast .image img").attr("src", "/img/unknown.png");
    $(".forecast .temp-celsius span").text("Unknown");
    $(".forecast .temp-fahrenheit span").text("Unknown");
  });

  // Write code here
  $(".weather a").click((event) => {
    const city = event.target.id.split("-")[1];
    $.getJSON("/api/" + city + ".json", (data) => {
      const imgPath = "/img/" + data.status + ".png";
      $(".forecast .image img").attr("src", imgPath);
      $(".forecast .temp-celsius span").text(data.tempC);
      $(".forecast .temp-fahrenheit span").text(data.tempF);
    });
  });
});

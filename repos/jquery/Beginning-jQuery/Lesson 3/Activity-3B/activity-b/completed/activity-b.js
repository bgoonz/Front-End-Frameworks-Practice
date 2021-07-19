$(() => {
  $("#cars").change(() => {
    const favouriteCar = $("#cars option:selected").text();
    $("#car-choice").text(favouriteCar);
  });
});

$(() => {
  // Write your code here
  const $square = $("#square");

  $("#clicker").click(() => {
    const width = parseFloat($square.css("width"));
    $square.css("width", `${width * 1.2}px`);
    $square.css("height", `${width * 1.2}px`);
  });
});

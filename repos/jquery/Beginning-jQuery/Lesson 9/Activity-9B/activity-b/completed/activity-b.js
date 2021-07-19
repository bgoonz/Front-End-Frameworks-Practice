$(() => {
  $("input[name=colorPicker").spectrum({
    color: "#f00",
    flat: true,
    showInput: false,
    showButtons: false,
  });

  $("button[name=update]").on("click", (e) => {
    e.preventDefault();
    const color = $("input[name=colorPicker").spectrum("get").toHexString();
    const size = $("input[name=size").val();
    console.log("updateStyle", color, size);
    // Write code here
    $(e.currentTarget).trigger("updateStyle", [color, size]);
  });

  // Write code here
  $("#container").on("updateStyle", (e, color, size) => {
    $("h3").css({
      color: color,
      "font-size": size + "px",
    });
  });
});

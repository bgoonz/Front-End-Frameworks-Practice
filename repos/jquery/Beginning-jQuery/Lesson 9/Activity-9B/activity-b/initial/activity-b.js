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
  });

  // Write code here
});

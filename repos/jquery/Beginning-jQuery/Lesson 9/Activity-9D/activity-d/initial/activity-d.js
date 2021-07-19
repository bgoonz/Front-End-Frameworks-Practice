$(() => {
  $("button").on("click", () => {
    $("p").text("Started...");

    $(".block.green").fadeIn().fadeOut(1000);

    $(".block.amber").fadeIn().fadeOut(4000);

    $(".block.red").fadeIn().fadeOut(8000);

    // Write code here
  });
});

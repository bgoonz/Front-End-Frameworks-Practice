$(() => {
  $("#topics a").click((e) => {
    e.preventDefault();
    $(e.target)
      .addClass("selected")
      .siblings(".selected")
      .removeClass("selected");
  });
});

$(() => {
  $("#topics a").click((e) => {
    e.preventDefault();
    const topic = $(e.target).text();

    $(e.target)
      .addClass("selected")
      .siblings(".selected")
      .removeClass("selected");

    $("#news tr").show();
    if (topic != "All") {
      $(`#news tr:has(td):not(:contains("${topic}"))`).hide();
    }
  });
});

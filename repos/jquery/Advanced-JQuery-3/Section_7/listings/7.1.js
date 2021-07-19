$(() => {
  $("#ajax-form").on("submit", (e) => {
    e.preventDefault();

    $.ajax({
      url: "https://api.github.com/search/repositories",
      dataType: "jsonp",
      data: {
        q: $("#title").val(),
      },
      success: function (data) {
        console.log(data);
      },
    });
  });
});

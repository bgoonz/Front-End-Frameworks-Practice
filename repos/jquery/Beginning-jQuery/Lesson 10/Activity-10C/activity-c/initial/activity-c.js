$(() => {
  // Write code here

  $("#slow").click((e) => {
    $.ajax({
      method: "GET",
      url: "/api/slow",
    }).then((data) => {
      alert("Slow response");
    });
  });
});

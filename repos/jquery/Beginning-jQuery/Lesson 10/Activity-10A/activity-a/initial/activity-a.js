$(() => {
  // Write code here
  $("#jsonp").click((e) => {
    $.ajax({
      method: "GET",
      url: "http://localhost:8081/api/jsonp",
    }).then((data) => {
      alert(JSON.stringify(data));
    });
  });
});

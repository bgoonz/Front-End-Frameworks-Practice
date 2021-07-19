$(() => {
  // Write code here
  $("#jsonp").click((e) => {
    $.ajax({
      method: "GET",
      dataType: "jsonp", // or dataType: 'json' with callback parameter
      url: "http://localhost:8081/api/jsonp", // or 'http://localhost:8081/api/jsonp?callback=?'
    }).then((data) => {
      alert(JSON.stringify(data));
    });
  });
});

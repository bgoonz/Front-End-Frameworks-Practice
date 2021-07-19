$(() => {
  $("#calc").click((e) => {
    const x = $.ajax({
      method: "GET",
      url: "http://localhost:8080/api/x",
    }).then((data) => {
      console.log(data);
      $("#x").text(data.x);
      return data;
    });

    const y = $.ajax({
      method: "GET",
      url: "http://localhost:8080/api/y",
    }).then((data) => {
      console.log(data);
      $("#y").text(data.y);
      return data;
    });

    // Write code here
    Promise.all([x, y]).then((results) => {
      const x = results[0];
      const y = results[1];
      const z = x.x - y.y;
      $("#z").text(z);
    });
  });
});

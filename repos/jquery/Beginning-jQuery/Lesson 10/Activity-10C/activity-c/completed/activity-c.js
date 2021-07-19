$(() => {
  // Write code here
  const currentRequests = {};
  $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    const url = options.url;
    if (url === "/api/slow") {
      if (currentRequests[url]) {
        currentRequests[url].abort();
      }
      currentRequests[url] = jqXHR;
    }
  });

  $("#slow").click((e) => {
    $.ajax({
      method: "GET",
      url: "/api/slow",
    }).then((data) => {
      alert("Slow response");
    });
  });
});

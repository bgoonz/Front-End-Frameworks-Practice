$(() => {
  var requestOne, requestTwo, requestThree;

  $("#click").click((event) => {
    $("#result").text("Unknown");

    requestOne = $.getJSON("/api/one").then((result) => {
      console.log("one done");
      console.log(JSON.stringify(result));
      $("#one").text("done");
      return result;
    });
    $("#one").text("busy");

    requestTwo = $.getJSON("/api/two").then((result) => {
      console.log("two done");
      console.log(JSON.stringify(result));
      $("#two").text("done");
      return result;
    });
    $("#two").text("busy");

    requestThree = $.getJSON("/api/three").then((result) => {
      console.log("three done");
      console.log(JSON.stringify(result));
      $("#three").text("done");
      return result;
    });
    $("#three").text("busy");

    // Write code here
  });
});

$(() => {
  $("button").click((event) => {
    console.log("Button receives event first");
    alert("Button receives event first");
    // Add your code below
  });

  $("div").click((event) => {
    console.log("Div receives event after button");
    alert("Div receives event after button");
  });

  $("body").click((event) => {
    console.log("Body receives event after button");
    alert("Body receives event after button");
  });
});

$(() => {
  $("input[name=get]").click((e) => {
    $("#the-div").data("myvariable");
    alert("Value of myvariable: " + $("#the-div").data("myvariable"));
  });

  $("input[name=set]").click((e) => {
    $("#the-div").data("myvariable", "new value");
    alert("Set myvariable to: new-value");
  });

  $("input[name=reset]").click((e) => {
    $("#the-div").removeData("myvariable");
    alert("Reset myvariable");
  });
});

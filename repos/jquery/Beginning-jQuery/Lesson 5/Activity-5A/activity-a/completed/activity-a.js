$(() => {
  const inspectCheckbox = () => {
    // Write your code here
    $("#mycheckbox-prop").text($("#mycheckbox").prop("checked"));
    $("#mycheckbox-attr").text($("#mycheckbox").attr("checked"));
    $("#mycheckbox-val").text($("#mycheckbox").val());
    $("#mycheckbox-checked").text($("#mycheckbox").is(":checked"));
  };

  const inspectTextbox = () => {
    // Write your code here
    $("#mytextbox-prop").text($("#mytextbox").prop("value"));
    $("#mytextbox-attr").text($("#mytextbox").attr("value"));
    $("#mytextbox-val").text($("#mytextbox").val());
  };

  const inspectSelect = () => {
    // Write your code here
    $("#myselect-val").text($("#myselect").val());
  };

  $("#mycheckbox").on("change", inspectCheckbox);
  $("#mytextbox").on("keyup", inspectTextbox);
  $("#myselect").on("change", inspectSelect);

  inspectCheckbox();
  inspectTextbox();
  inspectSelect();
});

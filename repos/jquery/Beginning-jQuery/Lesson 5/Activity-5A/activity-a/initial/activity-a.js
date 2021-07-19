$(() => {
  const inspectCheckbox = () => {
    // Write your code here
  };

  const inspectTextbox = () => {
    // Write your code here
  };

  const inspectSelect = () => {
    // Write your code here
  };

  $("#mycheckbox").on("change", inspectCheckbox);
  $("#mytextbox").on("keyup", inspectTextbox);
  $("#myselect").on("change", inspectSelect);

  inspectCheckbox();
  inspectTextbox();
  inspectSelect();
});

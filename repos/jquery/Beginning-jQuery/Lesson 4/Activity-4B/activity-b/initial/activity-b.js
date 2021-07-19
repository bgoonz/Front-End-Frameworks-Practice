$(() => {
  // Write your code here
  $("li").click((event) => {
    $(event.target).slideUp();
  });
});

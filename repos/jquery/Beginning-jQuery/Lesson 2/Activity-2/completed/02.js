$(() => {
  $("#selected-plays > li").addClass("horizontal");
});

$(() => {
  $("#selected-plays > li").addClass("big-letter");
});

$(() => {
  // Add your code below
  $("#selected-plays > li:first")
    .addClass("col-first")
    .next()
    .addClass("col-second")
    .next()
    .addClass("col-third");
});

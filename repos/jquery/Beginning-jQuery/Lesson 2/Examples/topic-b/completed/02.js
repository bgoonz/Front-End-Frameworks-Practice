// Write code here
$(() => {
  $("#selected-plays > li").addClass("horizontal");
  $("#selected-plays li:not(.horizontal)").addClass("sub-level");

  $("#selected-plays > li").addClass("big-letter");

  $("#selected-plays li.horizontal").addClass("big-letter");

  $("#selected-plays li:not(.sub-level)").addClass("big-letter");

  $('a[href^="mailto:"]').addClass("mailto");
  $('a[href$=".pdf"]').addClass("pdflink");
  $('a[href^="http"][href*="henry"]').addClass("henrylink");

  $("tr:nth-child(odd)").addClass("alt");
  $("td:contains(Henry)").addClass("highlight");
});

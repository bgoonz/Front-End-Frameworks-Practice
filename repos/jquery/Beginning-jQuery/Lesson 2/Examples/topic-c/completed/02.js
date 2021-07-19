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

  $("a")
    .filter((i, a) => a.hostname && a.hostname !== location.hostname)
    .addClass("external");

  $("td:contains(Henry)").parent().children().addClass("highlight");

  const eachText = [];

  $("td").each((i, td) => {
    if (td.textContent.startsWith("H")) {
      eachText.push(td.textContent);
    }
  });

  console.log("each", eachText);

  const forText = [];

  for (let td of $("td")) {
    if (td.textContent.startsWith("H")) {
      forText.push(td.textContent);
    }
  }

  console.log("for", forText);
});

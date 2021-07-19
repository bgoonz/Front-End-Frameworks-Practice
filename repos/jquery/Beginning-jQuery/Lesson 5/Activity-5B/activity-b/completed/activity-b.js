$(() => {
  // Write your code here
  const $toc = $("<ul id='toc'></ul>");

  $("h1").each((i, h1) => {
    const $tocHeadingItem = $(
      '<li><a href="#' + i + '">' + $(h1).text() + "</a></li>"
    );
    $tocHeadingItem.appendTo($toc);

    $(h1).attr("id", i);
  });

  $toc.prependTo($("body"));
});

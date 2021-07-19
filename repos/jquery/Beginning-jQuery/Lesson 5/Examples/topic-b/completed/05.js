$(() => {
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: "external",
    title: function () {
      return "Learn more about " + $(this).text() + " at Wikipedia.";
    },
    id: (index) => "wikilink-" + index,
  });

  $('<a href="#top">back to top</a>').insertAfter("div.chapter p");
  $('<a id="top"></a>').prependTo("body");

  // Code goes here
  const $notes = $('<ol id="notes"></ol>').insertBefore("#footer");

  $("span.footnote").each((i, span) => {
    $(span)
      .before(
        [
          '<a href="#footnote-',
          i + 1,
          '" id="context-',
          i + 1,
          '" class="context">',
          "<sup>",
          i + 1,
          "</sup></a>",
        ].join("")
      )
      .appendTo($notes)
      .append(
        [
          '&nbsp;(<a href="#context-',
          i + 1,
          '" id="footnote-',
          i + 1,
          '">context</a>)',
        ].join("")
      )
      .wrap("<li></li>");
  });

  $("span.pull-quote").each((i, span) => {
    $(span)
      .clone()
      .addClass("pulled")
      .find("span.drop")
      .html("&hellip;")
      .end()
      .text((i, text) => text)
      .prependTo($(span).parent().css("position", "relative"));
  });
});

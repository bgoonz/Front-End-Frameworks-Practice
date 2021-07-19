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
});

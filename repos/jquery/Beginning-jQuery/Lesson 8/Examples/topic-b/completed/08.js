$(() => {
  // Write code here
  $.expr[":"].group = (element, index, matches) => {
    const num = parseInt(matches[3], 10);
    const elementIndex = $(element).index() - 1;
    return Number.isInteger(num) && elementIndex % (num * 2) < num;
  };

  const stripe = () => {
    $("#news")
      .find("tr.alt")
      .removeClass("alt")
      .end()
      .find("tbody")
      .each((i, element) => {
        $(element)
          .children(":visible")
          .has("td")
          .filter(":group(3)")
          .addClass("alt");
      });
  };

  stripe();
});

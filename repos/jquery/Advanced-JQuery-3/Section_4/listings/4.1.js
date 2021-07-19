$(() => {
  var pageNum = 1;

  $("#more-photos").click((e) => {
    e.preventDefault();
    const $link = $(e.target);
    const url = $link.attr("href");

    if (pageNum > 19) {
      $link.remove();
      return;
    }

    $link.attr("href", `pages/${++pageNum}.html`);

    $.get(url)
      .then((data) => {
        $("#gallery").append(data);
      })
      .catch(({ statusText }) => {
        $("#gallery").append(`<strong>${statusText}</strong>`);
      });
  });
});

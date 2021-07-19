$(() => {
  // Write code here
  const buildItem = (item) =>
    `
      <li>
        <h3><a href="${item.html_url}">${item.name}</a></h3>
        <div>★ ${item.stargazers_count}</div>
        <div>${item.description}</div>
      </li>
    `;

  const cache = new Map();

  $("#ajax-form").on("submit", (e) => {
    e.preventDefault();

    const search = $("#title").val();

    if (search == "") {
      return;
    }

    $("#response").addClass("loading").empty();

    let searchResults;
    if (cache.has(search)) {
      searchResults = cache.get(search);
    } else {
      searchResults = $.ajax({
        url: "https://api.github.com/search/repositories",
        data: {
          q: search,
        },
      });
      cache.set(search, searchResults);
    }

    searchResults
      .then((json) => {
        const itemHTML = [];
        for (let item of json.items) {
          itemHTML.push(buildItem(item));
        }
        const results =
          itemHTML.length > 0
            ? "<ol>" + itemHTML.join("") + "</ol>"
            : "No results found";
        $("#response").html(results);
      })
      .catch((jqXHR) => {
        $("#response").html("Oops. Something went wrong...");
      })
      .then(() => {
        $("#response").removeClass("loading");
      });
  });
});

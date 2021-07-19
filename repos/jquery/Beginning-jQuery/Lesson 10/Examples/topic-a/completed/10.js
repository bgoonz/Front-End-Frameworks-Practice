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

  $("#ajax-form").on("submit", (e) => {
    e.preventDefault();

    $.ajax({
      url: "https://api.github.com/search/repositories",
      data: {
        q: $("#title").val(),
      },
      success: (json) => {
        const itemHTML = [];
        for (let item of json.items) {
          itemHTML.push(buildItem(item));
        }
        const results =
          itemHTML.length > 0
            ? "<ol>" + itemHTML.join("") + "</ol>"
            : "No results found";
        $("#response").html(results);
      },
      error: (jqXHR) => {
        $("#response").html("Oops. Something went wrong...");
      },
    });
  });
});

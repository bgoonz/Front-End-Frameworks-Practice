$(() => {
  // Write code here
  $.ajaxSetup({
    accepts: {
      yaml: "application/x-yaml, text/yaml",
    },
    contents: {
      yaml: /yaml/,
    },
    converters: {
      "text yaml": (textValue) => {
        return YAML.eval(textValue);
      },
    },
  });

  $.ajaxPrefilter((options, originalOptions, jqXHR) => {
    if (options.url === "categories.yml") {
      options.headers = { "X-My-Custom-Header": "some value" };
    }
  });

  $.ajax({
    url: "categories.yml",
  }).then((data) => {
    const searchFilters = [];
    for (let category of Object.keys(data)) {
      searchFilters.push(`<li><strong>${category}</strong></li>`);
      for (let filter of data[category]) {
        searchFilters.push(
          `<li><a href="#" data-filter='${filter.filter}'>${filter.label}</a></li>`
        );
      }
    }

    const outputHTML = searchFilters.join("");

    $("#categories").removeClass("hide").html(`<ul>${outputHTML}</ul>`);
  });

  $(document).on("click", "#categories a", (e) => {
    e.preventDefault();

    $(e.target)
      .parent()
      .toggleClass("active")
      .siblings(".active")
      .removeClass("active");
    $("#ajax-form").triggerHandler("submit");
  });

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

    const filter = $("#categories").find("li.active a").data("filter");
    const search = $("#title").val() + (filter ? " " + filter : "");
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

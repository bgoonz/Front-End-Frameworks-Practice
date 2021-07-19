Promise.all([$.get("a.html"), $.ready]).then(([content, jquery]) => {
  $("#dictionary").hide().html(content).fadeIn();
});

$(() => {
  const formatAuthor = (entry) =>
    entry.author ? `<div class="quote-author">${entry.author}</div>` : "";

  const formatQuoteLine = (line) => `<div class="quote-line">${line}</div>`;

  const formatQuoteLines = (quote) => {
    var result = "";
    for (let line of quote) {
      result += formatQuoteLine(line);
    }
    return result;
  };

  const formatQuote = (entry) =>
    entry.quote
      ? `
      <div class="quote">
        ${formatQuoteLines(entry.quote)}
        ${formatAuthor(entry)}
      </div>
      `
      : "";

  const entryTemplate = (entry) => {
    const template = `<div class="entry">
      <h3 class="term">${entry.term}</h3>
      <div class="part">${entry.part}</div>
      <div class="definition">
        ${entry.definition}
        ${formatQuote(entry)}
      </div>
    </div>`;
    return template;
  };

  $("#letter-a a").click((e) => {
    e.preventDefault();
    $("#dictionary").load("a.html");
  });

  $("#letter-b a").click((e) => {
    e.preventDefault();

    $.getJSON("b.json", (data) => {
      var html = "";
      for (let entry of data) {
        html += entryTemplate(entry);
      }
      $("#dictionary").html(html);
    });
  });

  $("#letter-d a").click((e) => {
    const formatAuthor = (entry) =>
      $(entry).attr("author")
        ? `
   	   <div class="quote-author">
            ${$(entry).attr("author")}
      	</div>
      	`
        : "";

    const formatQuoteLines = (quote) => {
      var result = "";
      for (let line of $(quote).find("line")) {
        result += formatQuoteLine(line);
      }
      return result;
    };

    const formatQuoteLine = (line) =>
      `<div class="quote-line">
          ${$(line).text()}
        </div>`;

    const formatQuote = (entry) => {
      return $(entry).find("quote").length
        ? `
        <div class="quote">
          ${formatQuoteLines($(entry).find("quote").get(0))}
          ${formatAuthor($(entry).find("quote").get(0))}
        </div>
        `
        : "";
    };

    const entryTemplate = (entry) => {
      const template = `
        <div class="entry">
          <h3 class="term">${$(entry).attr("term")}</h3>
          <div class="part">${$(entry).attr("part")}</div>
          <div class="definition">
            ${$(entry).find("definition").text()}
            ${formatQuote(entry)}
          </div>
        </div>
        `;
      return template;
    };

    $.get("d.xml", (data) => {
      var html = "";
      for (let entry of $(data).find("entry")) {
        html += entryTemplate(entry);
      }
      $("#dictionary").html(html);
    });
  });

  $("#letter-g a").click((e) => {
    e.preventDefault();

    $.getJSON("/api/g", (data) => {
      var html = "Definitions for G would go here.";
      $("#dictionary").html(html);
    });
  });

  // Code goes here
});

$(() => {
  // Write code here
  $("table").each((i, table) => {
    const tableId = "table-title-" + i;
    const tableText = "Table " + (i + 1);
    $("<h3/>", {
      class: "table-title",
      id: tableId,
      text: tableText,
      data: { index: i },
      click: (e) => {
        e.preventDefault();
        $(table).fadeToggle();
      },
      css: { color: "blue", cursor: "pointer" },
    }).insertBefore(table);
  });
});

const eachText = [];

$('td')
  .each((i, td) => {
    if (td.textContent.startsWith('H')) {
      eachText.push(td.textContent);
    }
});

  console.log('each', eachText);
  // ["Hamlet", "Henry IV, Part I", "History", "Henry V", "History"]

  const forText = [];

  for (let td of $('td')) {
    if (td.textContent.startsWith('H')) {
      forText.push(td.textContent);
    }
  }

  console.log('for', forText);
  // ["Hamlet", "Henry IV, Part I", "History", "Henry V", "History"]

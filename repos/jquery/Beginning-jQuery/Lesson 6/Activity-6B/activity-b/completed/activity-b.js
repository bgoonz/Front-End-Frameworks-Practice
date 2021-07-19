$(() => {
  $("#contact button").click((event) => {
    // Prevent default form submission
    event.preventDefault();

    // Write code here
    const formData = $("#contact").serialize();
    console.log(formData);
    $.post("/api/contact", formData).then(() => {
      alert("Thanks for your message!");
    });
  });
});

$(() => {
  // Write code here
  $("#products").on("click", "li", (e) => {
    const productSku = $(e.currentTarget).data("product").sku;
    alert("Product SKU: " + productSku + " added to cart.");
  });
});

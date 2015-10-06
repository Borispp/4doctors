var ProductModel;

ProductModel = (function() {
  function ProductModel(product) {
    this.id = product.id, this.name = product.name, this.articol = product.articol, this.mainImageSrc = product.mainImageSrc, this.price = product.price, this.category = product.category, this.rusCategory = product.rusCategory, this.allImages = product.allImages, this.description = product.description, this.composition = product.composition, this.colors = product.colors, this.sizes = product.sizes;
  }

  return ProductModel;

})();

angular.module('app.products.models').factory('ProductModel', function() {
  return ProductModel;
});

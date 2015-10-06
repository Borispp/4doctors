var ProductsController;

ProductsController = (function() {
  ProductsController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function ProductsController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.productModel = $injector.get('ProductModel');
    this.productsService = $injector.get('productsService');
    this.likesService = $injector.get('likesService');
    this.init();
  }

  ProductsController.prototype.init = function() {
    this.$rootScope.title = false;
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = true;
    this.$rootScope.cartIcon = true;
    this.$scope.categoryName = this.$stateParams.categoryName;
    if (this.$scope.categoryName) {
      this.$rootScope.title = this.$scope.categoryName;
    }
    this.getProducts();
    this.$scope.likes = this.likesService.getLikes();
    return this.likesLength();
  };

  ProductsController.prototype.getProducts = function() {
    return this.productsService.getProducts().then((function(_this) {
      return function(products) {
        return _this.products = products;
      };
    })(this));
  };

  ProductsController.prototype.like = function(id) {
    var likes;
    likes = this.$scope.likes;
    this.$scope.likes = this.likesService.setLikes(id, likes);
    return this.likesLength();
  };

  ProductsController.prototype.likesLength = function() {
    return this.$scope.likesCount = this.likesService.likesLength();
  };

  ProductsController.prototype.saveProducts = function() {
    return this.productsService.sendProducts(this.products);
  };

  return ProductsController;

})();

angular.module('app.products.controllers').controller('productsController', ProductsController);

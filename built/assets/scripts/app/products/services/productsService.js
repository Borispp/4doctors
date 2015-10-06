var ProductsService;

ProductsService = (function() {
  ProductsService.$inject = ['$http', '$q', '$injector'];

  function ProductsService($http, $q, $injector) {
    this.$http = $http;
    this.$q = $q;
    this.ProductModel = $injector.get('ProductModel');
  }

  ProductsService.prototype.getProducts = function() {
    var deferred;
    deferred = this.$q.defer();
    this.$http({
      url: '/built/products.json',
      method: 'GET'
    }).success((function(_this) {
      return function(response) {
        var products;
        products = response.map(function(product) {
          return new _this.ProductModel(product);
        });
        return deferred.resolve(products);
      };
    })(this)).error(function(reason) {
      console.log(reason);
      return deferred.reject(reason);
    });
    return deferred.promise;
  };

  ProductsService.prototype.sendProducts = function(products) {
    return console.log(products);
  };

  return ProductsService;

})();

angular.module('app.products.services').service('productsService', ProductsService);

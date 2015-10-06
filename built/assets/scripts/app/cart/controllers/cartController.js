var CartController;

CartController = (function() {
  CartController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function CartController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.cartService = $injector.get('cartService');
    this.init();
  }

  CartController.prototype.init = function() {
    this.$rootScope.title = 'Корзина';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.$scope.cartProducts = this.cartService.getCarts();
    return this.$scope.count = 1;
  };

  CartController.prototype.decrease = function(id) {
    if (this.$scope.cartProducts[id].count > 1) {
      return this.$scope.cartProducts[id].count--;
    } else {
      return delete this.$scope.cartProducts[id];
    }
  };

  CartController.prototype.increase = function(id) {
    return this.$scope.cartProducts[id].count++;
  };

  CartController.prototype.makeOrder = function() {
    return this.cartService.updateCart(this.$scope.cartProducts);
  };

  return CartController;

})();

angular.module('app.cart.controllers').controller('cartController', CartController);

var CartDirectives;

CartDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/cart/templates/cart.html',
    controller: CartController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.cart.directives').controller('cartController', CartController).directive('cart', CartDirectives);

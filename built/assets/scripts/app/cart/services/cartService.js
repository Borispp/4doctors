var CartService;

CartService = (function() {
  CartService.$inject = ['$http', '$q', '$injector', 'localStorageService'];

  function CartService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  CartService.prototype.getCarts = function() {
    return this.localStorageService.get('cart');
  };

  CartService.prototype.addCart = function(id, color, size, img, name, articol, price) {
    var current, ref;
    current = (ref = this.getCarts()) != null ? ref : {};
    current[id] = {
      'id': id,
      'color': color,
      'size': size,
      'img': img,
      'name': name,
      'articol': articol,
      'price': price,
      'count': 1
    };
    console.log(current);
    return this.localStorageService.set('cart', current);
  };

  CartService.prototype.updateCart = function(cartProducts) {
    return this.localStorageService.set('cart', cartProducts);
  };

  CartService.prototype.cartLength = function() {
    var cart, cartCount, cartKeys, i, j, len;
    cart = this.getCarts();
    if (cart != null) {
      cartKeys = Object.keys(cart);
      cartCount = 0;
      for (j = 0, len = cartKeys.length; j < len; j++) {
        i = cartKeys[j];
        cartCount++;
      }
      return cartCount;
    } else {
      return 0;
    }
  };

  return CartService;

})();

angular.module('app.cart.services').service('cartService', CartService);

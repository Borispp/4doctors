var ProductItemController;

ProductItemController = (function() {
  ProductItemController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function ProductItemController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.productItemService = $injector.get('productItemService');
    this.likesService = $injector.get('likesService');
    this.cartService = $injector.get('cartService');
    this.$rootScope.likeIcon = true;
    this.$rootScope.cartIcon = true;
    this.init();
  }

  ProductItemController.prototype.init = function() {
    var ref;
    this.getProduct();
    this.$scope.id = Number(this.$stateParams.id);
    this.$scope.likes = (ref = this.likesService.getLikes()) != null ? ref : {};
    return this.$rootScope.filter = false;
  };

  ProductItemController.prototype.getProduct = function() {
    return this.productItemService.getProducts().then((function(_this) {
      return function(products) {
        var i, id, len, name, ref;
        _this.products = products;
        id = _this.$scope.id;
        ref = _this.products;
        for (i = 0, len = ref.length; i < len; i++) {
          name = ref[i];
          if (name.id === id) {
            _this.$scope.product = name;
            break;
          }
        }
        _this.$scope.sliderWidth = _this.$scope.product.allImages.length * 200;
        _this.$scope.productLike = _this.$scope.likes[id];
        return _this.$rootScope.title = _this.$scope.product.articol;
      };
    })(this));
  };

  ProductItemController.prototype.like = function(id) {
    var likes;
    likes = this.$scope.likes;
    this.$scope.likes = this.likesService.setLikes(id, likes);
    return this.likesLength();
  };

  ProductItemController.prototype.likesLength = function() {
    return this.$scope.likesCount = this.likesService.likesLength();
  };

  ProductItemController.prototype.addCart = function() {
    if (!this.$scope.ctrl.color || !this.$scope.ctrl.size) {
      angular.element('.error').removeClass('m-hide-top');
      setTimeout((function() {
        return angular.element('.error').addClass('m-hide-top');
      }), 1500);
    }
    if (!this.$scope.ctrl.color) {
      angular.element('.selectColor').removeClass('m-hide');
    } else {
      angular.element('.selectColor').addClass('m-hide');
    }
    if (!this.$scope.ctrl.size) {
      angular.element('.selectSize').removeClass('m-hide');
    } else {
      angular.element('.selectSize').addClass('m-hide');
    }
    if (this.$scope.ctrl.color && this.$scope.ctrl.size) {
      return this.cartService.addCart(this.$scope.id, this.$scope.ctrl.color, this.$scope.ctrl.size, this.$scope.product.mainImageSrc, this.$scope.product.name, this.$scope.product.articol, this.$scope.product.price);
    }
  };

  return ProductItemController;

})();

angular.module('app.productItem.controllers').controller('productItemController', ProductItemController);

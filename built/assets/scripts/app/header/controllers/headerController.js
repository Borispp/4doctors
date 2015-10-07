var HeaderController;

HeaderController = (function() {
  HeaderController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams', '$window', '$state'];

  function HeaderController($injector, $scope, $rootScope, $stateParams, $window, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.$window = $window;
    this.$state = $state;
    this.likesService = $injector.get('likesService');
    this.filterService = $injector.get('filterService');
    this.cartService = $injector.get('cartService');
    this.init();
  }

  HeaderController.prototype.init = function() {
    if (this.$state.is('home')) {
      angular.element('body').addClass('nav_active');
      angular.element('.main_menu').removeClass('m-hide-left');
      angular.element('.main_menu').removeClass('left_nav');
    } else {
      angular.element('body').removeClass('nav_active');
      angular.element('.main_menu').addClass('m-hide-left');
      angular.element('.main_menu').addClass('left_nav');
    }
    this.$scope.likesCount = (function(_this) {
      return function() {
        return _this.likesService.likesLength();
      };
    })(this);
    return this.$scope.cartCount = (function(_this) {
      return function() {
        return _this.cartService.cartLength();
      };
    })(this);
  };

  HeaderController.prototype.back = function() {
    if (this.$rootScope.previousState != null) {
      return this.$window.history.go(-1);
    } else {
      return this.$window.location.href = '#/';
    }
  };

  HeaderController.prototype.filterSet = function() {
    return this.$scope.$parent.$broadcast('filterAccept');
  };

  HeaderController.prototype.filterUnset = function() {};

  return HeaderController;

})();

angular.module('app.header.controllers').controller('headerController', HeaderController);

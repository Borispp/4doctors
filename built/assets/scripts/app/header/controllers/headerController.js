var HeaderController;

HeaderController = (function() {
  HeaderController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams', '$window'];

  function HeaderController($injector, $scope, $rootScope, $stateParams, $window) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.$window = $window;
    this.likesService = $injector.get('likesService');
    this.filterService = $injector.get('filterService');
    this.cartService = $injector.get('cartService');
    this.init();
  }

  HeaderController.prototype.init = function() {
    this.$scope.likesCount = (function(_this) {
      return function() {
        return _this.likesService.likesLength();
      };
    })(this);
    this.$scope.cartCount = (function(_this) {
      return function() {
        return _this.cartService.cartLength();
      };
    })(this);
    return this.$rootScope.$on('$stateChangeSuccess', (function(_this) {
      return function(ev, to, toParams, from, fromParams) {
        _this.$rootScope.previousState = from.name;
        return _this.$rootScope.currentState = to.name;
      };
    })(this));
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

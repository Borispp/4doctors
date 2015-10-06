var FilterController;

FilterController = (function() {
  FilterController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function FilterController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.filterService = $injector.get('filterService');
    this.filterLocal = this.filterService.filterGet();
    this.init();
  }

  FilterController.prototype.init = function() {
    this.$rootScope.title = 'Фильтр';
    this.$rootScope.filter = true;
    this.$scope.filterSettings = this.filterLocal;
    return this.$scope.$on('filterAccept', (function(_this) {
      return function() {
        return _this.filterAccept();
      };
    })(this));
  };

  FilterController.prototype.filterGet = function() {
    return this.filterService.filterGet();
  };

  FilterController.prototype.filterAccept = function() {
    return this.filterService.filterSet(this.$scope.filterSettings);
  };

  FilterController.prototype.filterUnset = function() {
    return this.filterService.filterUnset();
  };

  return FilterController;

})();

angular.module('app.filter.controllers').controller('filterController', FilterController);

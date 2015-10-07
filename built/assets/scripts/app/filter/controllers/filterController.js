var FilterController;

FilterController = (function() {
  FilterController.$inject = ['$injector', '$scope', '$rootScope', '$state'];

  function FilterController($injector, $scope, $rootScope, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.filterService = $injector.get('filterService');
    this.filterLocal = this.filterService.filterGet();
    this.init();
  }

  FilterController.prototype.init = function() {
    if (this.$state.is('filter')) {
      this.$rootScope.title = 'Фильтр';
      this.$rootScope.filter = true;
    }
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

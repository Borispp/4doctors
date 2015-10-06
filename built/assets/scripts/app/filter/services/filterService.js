var FilterService;

FilterService = (function() {
  FilterService.$inject = ['$http', '$q', '$injector', 'localStorageService'];

  function FilterService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  FilterService.prototype.filterUnset = function() {
    this.localStorageService.set('filter', null);
    return console.log(this.filterGet());
  };

  FilterService.prototype.filterSet = function(data) {
    this.localStorageService.set('filter', data);
    return console.log(this.filterGet());
  };

  FilterService.prototype.filterGet = function() {
    return this.localStorageService.get('filter');
  };

  return FilterService;

})();

angular.module('app.filter.services').service('filterService', FilterService);

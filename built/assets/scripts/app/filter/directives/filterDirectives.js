var FilterCountDirectives, FilterDirectives;

FilterDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/filter/templates/filter.html',
    controller: FilterController,
    controllerAs: 'ctrl'
  };
};

FilterCountDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/filter/templates/filterCount.html',
    controller: FilterController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.filter.directives').controller('filterController', FilterController).directive('filter', FilterDirectives).directive('filterCount', FilterCountDirectives);

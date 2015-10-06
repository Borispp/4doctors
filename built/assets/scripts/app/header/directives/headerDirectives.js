var HeaderDirectives;

HeaderDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/header/templates/header.html',
    controller: HeaderController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.header.directives').controller('headerController', HeaderController).directive('mainHeader', HeaderDirectives);

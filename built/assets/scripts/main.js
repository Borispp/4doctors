var CustomersController,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

angular.module('app', ['app.customers']);

angular.module('app.customers', []);

CustomersController = (function() {
  function CustomersController($scope) {
    this.$scope = $scope;
    this.isCurrent = bind(this.isCurrent, this);
    this.setCurrentCategory = bind(this.setCurrentCategory, this);
    this.$scope.categories = [
      {
        'id': 0,
        name: 'Main'
      }, {
        'id': 1,
        name: 'Boris'
      }, {
        'id': 2,
        name: 'Alex'
      }
    ];
    this.$scope.marks = [
      {
        'id': 0,
        'title': 'Main bookmark',
        'category': 'Main'
      }, {
        'id': 1,
        'title': 'Boris bookmark',
        'category': 'Boris'
      }, {
        'id': 2,
        'title': 'Alex bookmark',
        'category': 'Alex'
      }
    ];
    this.$scope.currentCategory = null;
    this.$scope.setCurrentCategory = this.setCurrentCategory;
    this.$scope.isCurrent = this.isCurrent;
  }

  CustomersController.prototype.setCurrentCategory = function(category) {
    this.$scope.currentCategory = category;
    return console.log(this.$scope.currentCategory.name);
  };

  CustomersController.prototype.isCurrent = function(category) {
    return this.$scope.currentCategory !== null && category.name === this.$scope.currentCategory.name;
  };

  return CustomersController;

})();

angular.module('app.customers').controller('MainCtrl', CustomersController);

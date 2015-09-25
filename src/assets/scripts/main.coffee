angular.module('app', [
  'app.customers'
  ])


angular.module('app.customers', [])


class CustomersController
  constructor: (@$scope) ->
    @$scope.categories = [
      {'id': 0, name: 'Main'},
      {'id': 1, name: 'Boris'},
      {'id': 2, name: 'Alex'}
    ]
    @$scope.marks = [
      {'id': 0, 'title': 'Main bookmark', 'category': 'Main'}
      {'id': 1, 'title': 'Boris bookmark', 'category': 'Boris'}
      {'id': 2, 'title': 'Alex bookmark', 'category': 'Alex'}
    ]
    @$scope.currentCategory = null
    @$scope.setCurrentCategory = @setCurrentCategory
    @$scope.isCurrent = @isCurrent


  setCurrentCategory: (category) =>
    @$scope.currentCategory = category
    console.log @$scope.currentCategory.name

  isCurrent: (category) =>
    return @$scope.currentCategory != null && category.name == @$scope.currentCategory.name

angular.module('app.customers')
  .controller 'MainCtrl', CustomersController

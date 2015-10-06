ProductsDirectives = ->
	{
		templateUrl: 'assets/scripts/app/products/templates/products_list.html',
		controller: ProductsController,
		controllerAs: 'ctrl'
	}
angular.module('app.products.directives')
	.controller 'productsController', ProductsController
	.directive 'productsList', ProductsDirectives

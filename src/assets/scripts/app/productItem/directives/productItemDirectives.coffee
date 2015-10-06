ProductItemDirectives = ->
	{
		templateUrl: 'assets/scripts/app/productItem/templates/product_item.html',
		controller: ProductItemController,
		controllerAs: 'ctrl'
	}

angular.module('app.productItem.directives')
	.controller 'productItemController', ProductItemController
	.directive 'productItem', ProductItemDirectives

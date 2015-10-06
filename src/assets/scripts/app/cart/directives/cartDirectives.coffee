CartDirectives = ->
	{
		templateUrl: 'assets/scripts/app/cart/templates/cart.html',
		controller: CartController,
		controllerAs: 'ctrl'
	}

angular.module('app.cart.directives')
	.controller 'cartController', CartController
	.directive 'cart', CartDirectives

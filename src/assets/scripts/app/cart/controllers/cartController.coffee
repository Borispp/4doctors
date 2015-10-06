class CartController
	@$inject = ['$injector', '$scope', '$rootScope', '$stateParams']

	constructor: ($injector, @$scope, @$rootScope, @$stateParams) ->
		@cartService = $injector.get 'cartService'
		@init()

	init: ->
		@$rootScope.title = 'Корзина'
		@$rootScope.filter = false
		@$rootScope.likeIcon = false
		@$rootScope.cartIcon = false

		@$scope.cartProducts = @cartService.getCarts()
		@$scope.count = 1

	decrease: (id) ->
		if @$scope.cartProducts[id].count > 1
			@$scope.cartProducts[id].count--
		else
			delete @$scope.cartProducts[id]

	increase: (id) ->
		@$scope.cartProducts[id].count++

	makeOrder: ->
		@cartService.updateCart(@$scope.cartProducts)

angular.module('app.cart.controllers')
	.controller('cartController', CartController)

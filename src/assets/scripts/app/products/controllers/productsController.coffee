class ProductsController
	@$inject = ['$injector', '$scope', '$rootScope', '$stateParams']

	constructor: ($injector, @$scope, @$rootScope, @$stateParams) ->
		@productModel = $injector.get('ProductModel')
		@productsService = $injector.get('productsService')
		@likesService = $injector.get('likesService')
		@init()

	init: ->
		@$rootScope.title = false
		@$rootScope.filter = false
		@$rootScope.likeIcon = true
		@$rootScope.cartIcon = true

		# If isset categoryName => Filter products by categoryName
		@$scope.categoryName = @$stateParams.categoryName
		if @$scope.categoryName
		  @$rootScope.title = @$scope.categoryName

		@getProducts()

		# If URL is /product/:id => Get single product ID
		# @$scope.id = Number(@$stateParams.id)

		# Get Likes taxonomy (to product ID)
		@$scope.likes = @likesService.getLikes()

		# Set Likes count in scope
		@likesLength()

	getProducts: ->
		@productsService.getProducts()
			.then (products) =>
				@products = products

	like: (id) ->
		likes = @$scope.likes
		@$scope.likes = @likesService.setLikes id, likes
		@likesLength()

	likesLength: ->
		@$scope.likesCount = @likesService.likesLength()

	saveProducts: ->
		@productsService.sendProducts(@products)

angular.module('app.products.controllers')
	.controller('productsController', ProductsController)

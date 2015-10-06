class ProductItemController
	@$inject = ['$injector', '$scope', '$rootScope', '$stateParams']

	constructor: ($injector, @$scope, @$rootScope, @$stateParams) ->
		@productItemService = $injector.get 'productItemService'
		@likesService = $injector.get 'likesService'
		@cartService = $injector.get 'cartService'
		
		@$rootScope.likeIcon = true
		@$rootScope.cartIcon = true

		@init()

	init: ->
		@getProduct()

		# If URL is /product/:id => Get single product ID
		@$scope.id = Number @$stateParams.id

		# Get Likes taxonomy (to product ID)
		@$scope.likes = @likesService.getLikes() ? {}

		@$rootScope.filter = false

	getProduct: ->
		# With REST here will be request with product ID, not all product list.
		@productItemService.getProducts()
			.then (products) =>
				@products = products
				id = @$scope.id
				for name in @products
					if name.id == id
						@$scope.product = name
						break;
				@$scope.sliderWidth = @$scope.product.allImages.length * 200
				@$scope.productLike = @$scope.likes[id]
				@$rootScope.title = @$scope.product.articol


	like: (id) ->
		likes = @$scope.likes
		@$scope.likes = @likesService.setLikes id, likes
		@likesLength()

	likesLength: ->
		@$scope.likesCount = @likesService.likesLength()

	addCart: ->

		# @$scope.id
		if !@$scope.ctrl.color or !@$scope.ctrl.size
			angular.element('.error').removeClass('m-hide-top')

			setTimeout (->
				angular.element('.error').addClass('m-hide-top')
			), 1500

		if !@$scope.ctrl.color
			angular.element('.selectColor').removeClass('m-hide')
		else
			angular.element('.selectColor').addClass('m-hide')
		if !@$scope.ctrl.size
			angular.element('.selectSize').removeClass('m-hide')
		else
			angular.element('.selectSize').addClass('m-hide')

		if @$scope.ctrl.color and @$scope.ctrl.size
			@cartService.addCart @$scope.id, @$scope.ctrl.color, @$scope.ctrl.size, @$scope.product.mainImageSrc, @$scope.product.name, @$scope.product.articol, @$scope.product.price

angular.module('app.productItem.controllers')
	.controller('productItemController', ProductItemController)

class CartService
	@$inject = ['$http', '$q', '$injector', 'localStorageService']

	constructor: (@$http, @$q, $injector, @localStorageService) ->
		# init
		# @localStorageService.set 'cart'
	getCarts: ->
		@localStorageService.get 'cart'

	addCart: (id, color, size, img, name, articol, price) ->
		current = @getCarts() ? {}
		current[id] = {'id': id, 'color': color, 'size':size, 'img': img, 'name': name, 'articol': articol, 'price': price, 'count': 1}
		console.log current

		@localStorageService.set 'cart', current

	updateCart: (cartProducts)->
		@localStorageService.set 'cart', cartProducts

	cartLength: ->
		cart = @getCarts()
		if cart?
			cartKeys = Object.keys(cart)
			cartCount = 0
			for i in cartKeys
				cartCount++
			return cartCount
		else
			return 0

angular.module 'app.cart.services'
	.service 'cartService', CartService

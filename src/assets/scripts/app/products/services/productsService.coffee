class ProductsService
	@$inject = ['$http', '$q', '$injector']

	constructor: (@$http, @$q, $injector) ->
		@ProductModel = $injector.get('ProductModel')

	getProducts: ->
		deferred = @$q.defer()

		@$http
			url: '/built/products.json',
			method: 'GET'
		.success (response) =>
			products = response.map (product) =>
				new @ProductModel(product)

			deferred.resolve products
		.error (reason) ->
			console.log reason
			deferred.reject reason

		return deferred.promise

	sendProducts: (products) ->
		console.log products

angular.module 'app.products.services'
	.service 'productsService', ProductsService

class CustomerService
	@$inject = ['$http', '$q', 'localStorageService']

	constructor: (@$http, @$q, @localStorageService) ->
		# init
		# @localStorageService.set 'cart'

	getCustomer: ->
		@localStorageService.get 'customer'

	saveCustomer: (customer) ->
		@localStorageService.set 'customer', customer

angular.module 'app.order.services'
	.service 'customerService', CustomerService

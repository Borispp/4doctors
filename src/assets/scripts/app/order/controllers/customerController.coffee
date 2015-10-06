# TODO: make Single Module

#################### Customer Controller ####################
class CustomerController
	@$inject = ['$injector', '$scope', '$rootScope', '$state']

	constructor: ($injector, @$scope, @$rootScope, @$state) ->
		@customerService = $injector.get 'customerService'
		@$rootScope.title = 'Покупатель'
		@$rootScope.filter = false
		@$rootScope.likeIcon = false
		@$rootScope.cartIcon = false
		@init()

	init: ->
		# console.log 'CustomerController'

	saveCustomer: (options) ->
		if !@$scope.customer or !@$scope.customer.name or !@$scope.customer.phone or !@$scope.customer.email
			angular.element('.error').removeClass('m-hide-top')
			setTimeout (->
				angular.element('.error').addClass('m-hide-top')
			), 1500

		else
			@customerService.saveCustomer @$scope.customer
			@$state.go options.nextPage


#################### Location Controller ####################
class LocationController
	@$inject = ['$injector', '$scope', '$rootScope', '$state']
	constructor: ($injector, @$scope, @$rootScope, @$state) ->
		@customerService = $injector.get 'customerService'
		@$rootScope.title = 'Ваш адрес'
		@$rootScope.filter = false
		@$rootScope.likeIcon = false
		@$rootScope.cartIcon = false
		@init()

	init: ->
		@$scope.customer = @customerService.getCustomer()

	saveCustomer: (options) ->
		if !@$scope.customer.city or !@$scope.customer.country
			angular.element('.error').removeClass('m-hide-top')
			setTimeout (->
				angular.element('.error').addClass('m-hide-top')
			), 1500

		else
			@customerService.saveCustomer @$scope.customer
			@$state.go options.nextPage

#################### Delivery Controller ####################
class DeliveryController
	@$inject = ['$injector', '$scope', '$rootScope', '$state']

	constructor: ($injector, @$scope, @$rootScope, @$state) ->
		@customerService = $injector.get 'customerService'
		@$rootScope.title = 'Метод доставки'
		@$rootScope.filter = false
		@$rootScope.likeIcon = false
		@$rootScope.cartIcon = false
		@init()

	init: ->
		@$scope.customer = @customerService.getCustomer()

	saveCustomer: (options) ->
		if !@$scope.customer.delivery
			angular.element('.error').removeClass('m-hide-top')
			setTimeout (->
				angular.element('.error').addClass('m-hide-top')
			), 1500
		else
			@customerService.saveCustomer @$scope.customer
			@$state.go options.nextPage

#################### Address Controller ####################
class AddressController
	@$inject = ['$injector', '$scope', '$rootScope', '$state']

	constructor: ($injector, @$scope, @$rootScope, @$state) ->
		@customerService = $injector.get 'customerService'
		@$rootScope.title = 'Адрес доставки'
		@$rootScope.filter = false
		@$rootScope.likeIcon = false
		@$rootScope.cartIcon = false
		@init()

	init: ->
		@$scope.customer = @customerService.getCustomer()

	saveCustomer: (options) ->
		if !@$scope.customer.address
			angular.element('.error').removeClass('m-hide-top')
			setTimeout (->
				angular.element('.error').addClass('m-hide-top')
			), 1500
		else
			@customerService.saveCustomer @$scope.customer
			@$state.go options.nextPage

#################### Payment Controller ####################
class PaymentController
	@$inject = ['$injector', '$scope', '$rootScope', '$state']

	constructor: ($injector, @$scope, @$rootScope, @$state) ->
		@customerService = $injector.get 'customerService'
		@$rootScope.title = 'Метод оплаты'
		@$rootScope.filter = false
		@$rootScope.likeIcon = false
		@$rootScope.cartIcon = false
		@init()

	init: ->
		@$scope.customer = @customerService.getCustomer()

	saveCustomer: (options) ->
		if !@$scope.customer.paymentMethod
			angular.element('.error').removeClass('m-hide-top')
			setTimeout (->
				angular.element('.error').addClass('m-hide-top')
			), 1500
		else
			@customerService.saveCustomer @$scope.customer
			@$state.go options.nextPage


#################### Submit Controller ####################
class SubmitController
	@$inject = ['$injector', '$scope', '$rootScope', '$state']

	constructor: ($injector, @$scope, @$rootScope, @$state) ->
		@customerService = $injector.get 'customerService'
		@cartService = $injector.get 'cartService'
		@$rootScope.title = 'Подтверждение заказа'
		@$rootScope.filter = false
		@$rootScope.likeIcon = false
		@$rootScope.cartIcon = false
		@init()

	init: ->
		@$scope.customer = @customerService.getCustomer()
		@$scope.cartProducts = @cartService.getCarts()

	payOrder: (options) ->
		@$state.go options.nextPage

#################### PayOrder Controller ####################
class PayOrderController
	@$inject = ['$injector', '$scope', '$rootScope', '$state']

	constructor: ($injector, @$scope, @$rootScope, @$state) ->
		@customerService = $injector.get 'customerService'
		@cartService = $injector.get 'cartService'
		@$rootScope.title = 'Оплата картой'
		@$rootScope.filter = false
		@$rootScope.likeIcon = false
		@$rootScope.cartIcon = false
		@init()

	init: ->
		@$scope.customer = @customerService.getCustomer()
		@$scope.cartProducts = @cartService.getCarts()

	payOrder: (options) ->
		@$state.go options.nextPage

angular.module('app.order.controllers')
	.controller('customerController', CustomerController)
	.controller('locationController', LocationController)
	.controller('deliveryController', DeliveryController)
	.controller('addressController', AddressController)
	.controller('paymentController', PaymentController)
	.controller('submitController', SubmitController)
	.controller('payOrderController', PayOrderController)

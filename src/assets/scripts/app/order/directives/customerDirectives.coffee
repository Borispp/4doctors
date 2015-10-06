CustomerDirectives = ->
	{
		templateUrl: 'assets/scripts/app/order/templates/customer.html',
		controller: CustomerController,
		controllerAs: 'ctrl'
	}
LocationDirectives = ->
	{
		templateUrl: 'assets/scripts/app/order/templates/location.html',
		controller: LocationController,
		controllerAs: 'ctrl'
	}
DeliveryDirectives = ->
	{
		templateUrl: 'assets/scripts/app/order/templates/delivery.html',
		controller: DeliveryController,
		controllerAs: 'ctrl'
	}
AddressDirectives = ->
	{
		templateUrl: 'assets/scripts/app/order/templates/address.html',
		controller: AddressController,
		controllerAs: 'ctrl'
	}
PaymentDirectives = ->
	{
		templateUrl: 'assets/scripts/app/order/templates/payment_method.html',
		controller: PaymentController,
		controllerAs: 'ctrl'
	}
SubmitDirectives = ->
	{
		templateUrl: 'assets/scripts/app/order/templates/submit.html',
		controller: SubmitController,
		controllerAs: 'ctrl'
	}

PayOrderDirectives = ->
	{
		templateUrl: 'assets/scripts/app/order/templates/pay_order.html',
		controller: PayOrderController,
		controllerAs: 'ctrl'
	}

angular.module('app.order.directives')
	.directive 'customer', CustomerDirectives
	.directive 'location', LocationDirectives
	.directive 'delivery', DeliveryDirectives
	.directive 'address', AddressDirectives
	.directive 'payment', PaymentDirectives
	.directive 'submit', SubmitDirectives
	.directive 'payOrder', PayOrderDirectives

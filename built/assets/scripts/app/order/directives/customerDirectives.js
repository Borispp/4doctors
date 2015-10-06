var AddressDirectives, CustomerDirectives, DeliveryDirectives, LocationDirectives, PayOrderDirectives, PaymentDirectives, SubmitDirectives;

CustomerDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/order/templates/customer.html',
    controller: CustomerController,
    controllerAs: 'ctrl'
  };
};

LocationDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/order/templates/location.html',
    controller: LocationController,
    controllerAs: 'ctrl'
  };
};

DeliveryDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/order/templates/delivery.html',
    controller: DeliveryController,
    controllerAs: 'ctrl'
  };
};

AddressDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/order/templates/address.html',
    controller: AddressController,
    controllerAs: 'ctrl'
  };
};

PaymentDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/order/templates/payment_method.html',
    controller: PaymentController,
    controllerAs: 'ctrl'
  };
};

SubmitDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/order/templates/submit.html',
    controller: SubmitController,
    controllerAs: 'ctrl'
  };
};

PayOrderDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/order/templates/pay_order.html',
    controller: PayOrderController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.order.directives').directive('customer', CustomerDirectives).directive('location', LocationDirectives).directive('delivery', DeliveryDirectives).directive('address', AddressDirectives).directive('payment', PaymentDirectives).directive('submit', SubmitDirectives).directive('payOrder', PayOrderDirectives);

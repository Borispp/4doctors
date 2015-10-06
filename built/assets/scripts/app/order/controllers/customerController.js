var AddressController, CustomerController, DeliveryController, LocationController, PayOrderController, PaymentController, SubmitController;

CustomerController = (function() {
  CustomerController.$inject = ['$injector', '$scope', '$rootScope', '$state'];

  function CustomerController($injector, $scope, $rootScope, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.customerService = $injector.get('customerService');
    this.$rootScope.title = 'Покупатель';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.init();
  }

  CustomerController.prototype.init = function() {};

  CustomerController.prototype.saveCustomer = function(options) {
    if (!this.$scope.customer || !this.$scope.customer.name || !this.$scope.customer.phone || !this.$scope.customer.email) {
      angular.element('.error').removeClass('m-hide-top');
      return setTimeout((function() {
        return angular.element('.error').addClass('m-hide-top');
      }), 1500);
    } else {
      this.customerService.saveCustomer(this.$scope.customer);
      return this.$state.go(options.nextPage);
    }
  };

  return CustomerController;

})();

LocationController = (function() {
  LocationController.$inject = ['$injector', '$scope', '$rootScope', '$state'];

  function LocationController($injector, $scope, $rootScope, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.customerService = $injector.get('customerService');
    this.$rootScope.title = 'Ваш адрес';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.init();
  }

  LocationController.prototype.init = function() {
    return this.$scope.customer = this.customerService.getCustomer();
  };

  LocationController.prototype.saveCustomer = function(options) {
    if (!this.$scope.customer.city || !this.$scope.customer.country) {
      angular.element('.error').removeClass('m-hide-top');
      return setTimeout((function() {
        return angular.element('.error').addClass('m-hide-top');
      }), 1500);
    } else {
      this.customerService.saveCustomer(this.$scope.customer);
      return this.$state.go(options.nextPage);
    }
  };

  return LocationController;

})();

DeliveryController = (function() {
  DeliveryController.$inject = ['$injector', '$scope', '$rootScope', '$state'];

  function DeliveryController($injector, $scope, $rootScope, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.customerService = $injector.get('customerService');
    this.$rootScope.title = 'Метод доставки';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.init();
  }

  DeliveryController.prototype.init = function() {
    return this.$scope.customer = this.customerService.getCustomer();
  };

  DeliveryController.prototype.saveCustomer = function(options) {
    if (!this.$scope.customer.delivery) {
      angular.element('.error').removeClass('m-hide-top');
      return setTimeout((function() {
        return angular.element('.error').addClass('m-hide-top');
      }), 1500);
    } else {
      this.customerService.saveCustomer(this.$scope.customer);
      return this.$state.go(options.nextPage);
    }
  };

  return DeliveryController;

})();

AddressController = (function() {
  AddressController.$inject = ['$injector', '$scope', '$rootScope', '$state'];

  function AddressController($injector, $scope, $rootScope, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.customerService = $injector.get('customerService');
    this.$rootScope.title = 'Адрес доставки';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.init();
  }

  AddressController.prototype.init = function() {
    return this.$scope.customer = this.customerService.getCustomer();
  };

  AddressController.prototype.saveCustomer = function(options) {
    if (!this.$scope.customer.address) {
      angular.element('.error').removeClass('m-hide-top');
      return setTimeout((function() {
        return angular.element('.error').addClass('m-hide-top');
      }), 1500);
    } else {
      this.customerService.saveCustomer(this.$scope.customer);
      return this.$state.go(options.nextPage);
    }
  };

  return AddressController;

})();

PaymentController = (function() {
  PaymentController.$inject = ['$injector', '$scope', '$rootScope', '$state'];

  function PaymentController($injector, $scope, $rootScope, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.customerService = $injector.get('customerService');
    this.$rootScope.title = 'Метод оплаты';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.init();
  }

  PaymentController.prototype.init = function() {
    return this.$scope.customer = this.customerService.getCustomer();
  };

  PaymentController.prototype.saveCustomer = function(options) {
    if (!this.$scope.customer.paymentMethod) {
      angular.element('.error').removeClass('m-hide-top');
      return setTimeout((function() {
        return angular.element('.error').addClass('m-hide-top');
      }), 1500);
    } else {
      this.customerService.saveCustomer(this.$scope.customer);
      return this.$state.go(options.nextPage);
    }
  };

  return PaymentController;

})();

SubmitController = (function() {
  SubmitController.$inject = ['$injector', '$scope', '$rootScope', '$state'];

  function SubmitController($injector, $scope, $rootScope, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.customerService = $injector.get('customerService');
    this.cartService = $injector.get('cartService');
    this.$rootScope.title = 'Подтверждение заказа';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.init();
  }

  SubmitController.prototype.init = function() {
    this.$scope.customer = this.customerService.getCustomer();
    return this.$scope.cartProducts = this.cartService.getCarts();
  };

  SubmitController.prototype.payOrder = function(options) {
    return this.$state.go(options.nextPage);
  };

  return SubmitController;

})();

PayOrderController = (function() {
  PayOrderController.$inject = ['$injector', '$scope', '$rootScope', '$state'];

  function PayOrderController($injector, $scope, $rootScope, $state) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.customerService = $injector.get('customerService');
    this.cartService = $injector.get('cartService');
    this.$rootScope.title = 'Оплата картой';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.init();
  }

  PayOrderController.prototype.init = function() {
    this.$scope.customer = this.customerService.getCustomer();
    return this.$scope.cartProducts = this.cartService.getCarts();
  };

  PayOrderController.prototype.payOrder = function(options) {
    return this.$state.go(options.nextPage);
  };

  return PayOrderController;

})();

angular.module('app.order.controllers').controller('customerController', CustomerController).controller('locationController', LocationController).controller('deliveryController', DeliveryController).controller('addressController', AddressController).controller('paymentController', PaymentController).controller('submitController', SubmitController).controller('payOrderController', PayOrderController);

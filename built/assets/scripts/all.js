angular.module('app', ['ui.router', 'ngSanitize', 'LocalStorageModule', 'app.commons', 'app.header', 'app.products', 'app.productItem', 'app.filter', 'app.cart', 'app.order']);

$('.fake_placeholder input, .fake_placeholder textarea').on('blur', function() {
  var val;
  val = $(this).val();
  if (val) {
    $(this).parents('p').addClass('nonempty');
  } else {
    $(this).parents('p').removeClass('nonempty');
  }
});

$('.fake_select').on('blur', function() {
  var select, selected;
  select = $(this);
  selected = select.find('option:selected').text();
  select.find('+ .select_label').addClass('active');
  return select.find('+ .select_label .select_label--result').html(selected);
});

var $bigdislike, $biglike, $body, $main, $openImage, $overlay, $popupClose, $popupImage, $popupImageContainer, $popupLikes, $popups;

$body = $('body');

$main = $('#main');

$popups = $('.popup');

$popupImage = $('.popup_image');

$openImage = $('.open_image');

$popupImageContainer = $('.popup_image--container');

$overlay = $('#overlay');

$popupClose = $('.popup_close');

$biglike = $('.biglike');

$bigdislike = $('.bigdislike');

$popupLikes = $('.popup_like');

var OpenLike, OpenNav, OpenPopup, OpenSliderImage;

OpenPopup = (function() {
  function OpenPopup($el1, $data1) {
    this.$el = $el1;
    this.$data = $data1;
    this.init();
  }

  OpenPopup.prototype.init = function() {
    return this.$el.on('click', (function(_this) {
      return function() {
        if (_this.$data.hasClass('m-hide')) {
          return _this.open(_this.$data);
        } else {
          return _this.close(_this.$data);
        }
      };
    })(this));
  };

  OpenPopup.prototype.open = function($data) {
    $data.removeClass('m-hide');
    return $body.addClass('popup_active');
  };

  OpenPopup.prototype.close = function($data) {
    $data.addClass('m-hide');
    return $body.removeClass('popup_active');
  };

  return OpenPopup;

})();

OpenNav = (function() {
  function OpenNav($el1, $data1, $closeEl) {
    this.$el = $el1;
    this.$data = $data1;
    this.$closeEl = $closeEl;
    this.init();
  }

  OpenNav.prototype.init = function() {
    $body.on('click', '.nav_open', (function(_this) {
      return function(e) {
        var $data, $el;
        $el = $(e.target);
        $data = $($el.data('open'));
        if ($data.hasClass('m-hide-left')) {
          return _this.open($data);
        } else {
          return _this.close();
        }
      };
    })(this));
    return $body.on('click', '#main, .main_menu--links a', (function(_this) {
      return function() {
        return _this.close();
      };
    })(this));
  };

  OpenNav.prototype.open = function($data) {
    $data.removeClass('m-hide-left');
    return setTimeout((function() {
      $body.addClass('nav_active');
    }), 200);
  };

  OpenNav.prototype.close = function() {
    $('.left_nav').addClass('m-hide-left');
    return $body.removeClass('nav_active');
  };

  return OpenNav;

})();

OpenSliderImage = (function() {
  function OpenSliderImage() {
    this.$increase = $('.increase');
    this.init();
  }

  OpenSliderImage.prototype.init = function() {
    $body.on('click', '.increase', (function(_this) {
      return function() {
        var $img, fullView, i, img, len, partialView, ref;
        _this.$images = $('.slide--content img');
        partialView = [];
        ref = _this.$images;
        for (i = 0, len = ref.length; i < len; i++) {
          img = ref[i];
          $img = $(img);
          if ($img.visible()) {
            fullView = $img;
            break;
          } else if ($img.visible(true)) {
            partialView.push($img);
          }
        }
        if (fullView) {
          return _this.open(fullView);
        } else {
          return _this.open(partialView[1]);
        }
      };
    })(this));
    return $body.on('click', '.open_image', (function(_this) {
      return function(e) {
        return _this.open($(e.target));
      };
    })(this));
  };

  OpenSliderImage.prototype.open = function($img) {
    $popupImage.removeClass('m-hide');
    $popupImageContainer.html($img.clone());
    return $body.addClass('popup_active');
  };

  return OpenSliderImage;

})();

OpenLike = (function() {
  function OpenLike() {
    this.init();
  }

  OpenLike.prototype.init = function() {
    $('#main_content').on('click', '.like_active', function(e) {
      e.preventDefault();
      $overlay.fadeIn(300);
      $biglike.removeClass('m-hide-left');
      return $body.addClass('popup_overlay');
    });
    $('#main_content').on('click', '.like_empty', function(e) {
      e.preventDefault();
      $overlay.fadeIn(300);
      $bigdislike.removeClass('m-hide-left');
      return $body.addClass('popup_overlay');
    });
    return $overlay.on('click', function() {
      $popupLikes.addClass('m-hide-left');
      $body.removeClass('popup_overlay');
      return $overlay.fadeOut(300);
    });
  };

  return OpenLike;

})();

$('a.popup, a.popup_image').on('click', function(e) {
  return e.preventDefault();
});

$popupClose.on('click', function() {
  $popups.addClass('m-hide');
  return $body.removeClass('popup_active');
});

$('.popup_open').each(function() {
  var $data, $el;
  $el = $(this);
  $data = $($el.data('open'));
  return new OpenPopup($el, $data);
});

$("#overlay, .popup_like").on("touchmove", false);

new OpenNav;

new OpenSliderImage;

new OpenLike;

angular.module('app.cart', ['app.cart.controllers', 'app.cart.services', 'app.cart.directives']);

angular.module('app.cart.controllers', []);

angular.module('app.cart.services', []);

angular.module('app.cart.directives', []);

angular.module('app.commons', ['app.commons.config']);

angular.module('app.commons.config', []);

angular.module('app.filter', ['app.filter.controllers', 'app.filter.services', 'app.filter.directives']);

angular.module('app.filter.controllers', []);

angular.module('app.filter.services', []);

angular.module('app.filter.directives', []);

angular.module('app.header', ['app.header.controllers', 'app.header.directives']);

angular.module('app.header.controllers', []);

angular.module('app.header.directives', []);

angular.module('app.order', ['app.order.controllers', 'app.order.services', 'app.order.directives']);

angular.module('app.order.controllers', []);

angular.module('app.order.services', []);

angular.module('app.order.directives', []);

angular.module('app.productItem', ['app.productItem.services', 'app.productItem.controllers', 'app.productItem.directives', 'app.likes.services']);

angular.module('app.productItem.services', []);

angular.module('app.productItem.controllers', []);

angular.module('app.productItem.directives', []);

angular.module('app.products', ['app.products.models', 'app.products.services', 'app.products.controllers', 'app.products.directives', 'app.favorites.directives', 'app.likes.services']);

angular.module('app.products.models', []);

angular.module('app.products.services', []);

angular.module('app.products.controllers', []);

angular.module('app.products.directives', []);

angular.module('app.favorites.directives', []);

angular.module('app.likes.services', []);

var CartController;

CartController = (function() {
  CartController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function CartController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.cartService = $injector.get('cartService');
    this.init();
  }

  CartController.prototype.init = function() {
    this.$rootScope.title = 'Корзина';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.$scope.cartProducts = this.cartService.getCarts();
    return this.$scope.count = 1;
  };

  CartController.prototype.decrease = function(id) {
    if (this.$scope.cartProducts[id].count > 1) {
      return this.$scope.cartProducts[id].count--;
    } else {
      return delete this.$scope.cartProducts[id];
    }
  };

  CartController.prototype.increase = function(id) {
    return this.$scope.cartProducts[id].count++;
  };

  CartController.prototype.makeOrder = function() {
    return this.cartService.updateCart(this.$scope.cartProducts);
  };

  return CartController;

})();

angular.module('app.cart.controllers').controller('cartController', CartController);

var CartDirectives;

CartDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/cart/templates/cart.html',
    controller: CartController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.cart.directives').controller('cartController', CartController).directive('cart', CartDirectives);

var CartService;

CartService = (function() {
  CartService.$inject = ['$http', '$q', '$injector', 'localStorageService'];

  function CartService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  CartService.prototype.getCarts = function() {
    return this.localStorageService.get('cart');
  };

  CartService.prototype.addCart = function(id, color, size, img, name, articol, price) {
    var current, ref;
    current = (ref = this.getCarts()) != null ? ref : {};
    current[id] = {
      'id': id,
      'color': color,
      'size': size,
      'img': img,
      'name': name,
      'articol': articol,
      'price': price,
      'count': 1
    };
    console.log(current);
    return this.localStorageService.set('cart', current);
  };

  CartService.prototype.updateCart = function(cartProducts) {
    return this.localStorageService.set('cart', cartProducts);
  };

  CartService.prototype.cartLength = function() {
    var cart, cartCount, cartKeys, i, j, len;
    cart = this.getCarts();
    if (cart != null) {
      cartKeys = Object.keys(cart);
      cartCount = 0;
      for (j = 0, len = cartKeys.length; j < len; j++) {
        i = cartKeys[j];
        cartCount++;
      }
      return cartCount;
    } else {
      return 0;
    }
  };

  return CartService;

})();

angular.module('app.cart.services').service('cartService', CartService);

var Routes;

Routes = (function() {
  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/badlink');
    $stateProvider.state('home', {
      url: '/',
      views: {
        "header": {
          template: "<main-header>"
        },
        "productsList": {
          template: "<products-list>"
        },
        "filterCount": {
          template: "<filter-count>"
        }
      }
    }).state('category', {
      url: '/category/:categoryName',
      views: {
        "header": {
          template: "<main-header>"
        },
        "productsList": {
          template: "<products-list>"
        }
      }
    }).state('product', {
      url: '/product/:id',
      views: {
        "header": {
          template: "<main-header>"
        },
        "productItem": {
          template: "<product-item>"
        }
      }
    }).state('favorites', {
      url: '/favorites',
      views: {
        "header": {
          template: "<main-header>"
        },
        "favoritesList": {
          template: "<favorites-list>"
        }
      }
    }).state('filter', {
      url: '/filter',
      views: {
        "header": {
          template: "<main-header>"
        },
        "filter": {
          template: "<filter>"
        }
      }
    }).state('cart', {
      url: '/cart',
      views: {
        "header": {
          template: "<main-header>"
        },
        "cart": {
          template: "<cart>"
        }
      }
    }).state('customer', {
      url: '/customer',
      views: {
        "header": {
          template: "<main-header>"
        },
        "customer": {
          template: "<customer>"
        }
      }
    }).state('location', {
      url: '/location',
      views: {
        "header": {
          template: "<main-header>"
        },
        "location": {
          template: "<location>"
        }
      }
    }).state('delivery', {
      url: '/delivery',
      views: {
        "header": {
          template: "<main-header>"
        },
        "delivery": {
          template: "<delivery>"
        }
      }
    }).state('address', {
      url: '/address',
      views: {
        "header": {
          template: "<main-header>"
        },
        "address": {
          template: "<address>"
        }
      }
    }).state('payment_method', {
      url: '/payment_method',
      views: {
        "header": {
          template: "<main-header>"
        },
        "payment": {
          template: "<payment>"
        }
      }
    }).state('submit', {
      url: '/submit',
      views: {
        "header": {
          template: "<main-header>"
        },
        "submit": {
          template: "<submit>"
        }
      }
    }).state('pay_order', {
      url: '/pay_order',
      views: {
        "header": {
          template: "<main-header>"
        },
        "payOrder": {
          template: "<pay-order>"
        }
      }
    });
  }

  return Routes;

})();

angular.module('app.commons.config').config(Routes);

var FilterController;

FilterController = (function() {
  FilterController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function FilterController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.filterService = $injector.get('filterService');
    this.filterLocal = this.filterService.filterGet();
    this.init();
  }

  FilterController.prototype.init = function() {
    this.$rootScope.title = 'Фильтр';
    this.$rootScope.filter = true;
    this.$scope.filterSettings = this.filterLocal;
    return this.$scope.$on('filterAccept', (function(_this) {
      return function() {
        return _this.filterAccept();
      };
    })(this));
  };

  FilterController.prototype.filterGet = function() {
    return this.filterService.filterGet();
  };

  FilterController.prototype.filterAccept = function() {
    return this.filterService.filterSet(this.$scope.filterSettings);
  };

  FilterController.prototype.filterUnset = function() {
    return this.filterService.filterUnset();
  };

  return FilterController;

})();

angular.module('app.filter.controllers').controller('filterController', FilterController);

var FilterCountDirectives, FilterDirectives;

FilterDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/filter/templates/filter.html',
    controller: FilterController,
    controllerAs: 'ctrl'
  };
};

FilterCountDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/filter/templates/filterCount.html',
    controller: FilterController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.filter.directives').controller('filterController', FilterController).directive('filter', FilterDirectives).directive('filterCount', FilterCountDirectives);

var FilterService;

FilterService = (function() {
  FilterService.$inject = ['$http', '$q', '$injector', 'localStorageService'];

  function FilterService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  FilterService.prototype.filterUnset = function() {
    this.localStorageService.set('filter', null);
    return console.log(this.filterGet());
  };

  FilterService.prototype.filterSet = function(data) {
    this.localStorageService.set('filter', data);
    return console.log(this.filterGet());
  };

  FilterService.prototype.filterGet = function() {
    return this.localStorageService.get('filter');
  };

  return FilterService;

})();

angular.module('app.filter.services').service('filterService', FilterService);

var HeaderController;

HeaderController = (function() {
  HeaderController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams', '$window'];

  function HeaderController($injector, $scope, $rootScope, $stateParams, $window) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.$window = $window;
    this.likesService = $injector.get('likesService');
    this.filterService = $injector.get('filterService');
    this.cartService = $injector.get('cartService');
    this.init();
  }

  HeaderController.prototype.init = function() {
    this.$scope.likesCount = (function(_this) {
      return function() {
        return _this.likesService.likesLength();
      };
    })(this);
    this.$scope.cartCount = (function(_this) {
      return function() {
        return _this.cartService.cartLength();
      };
    })(this);
    return this.$rootScope.$on('$stateChangeSuccess', (function(_this) {
      return function(ev, to, toParams, from, fromParams) {
        _this.$rootScope.previousState = from.name;
        return _this.$rootScope.currentState = to.name;
      };
    })(this));
  };

  HeaderController.prototype.back = function() {
    if (this.$rootScope.previousState != null) {
      return this.$window.history.go(-1);
    } else {
      return this.$window.location.href = '#/';
    }
  };

  HeaderController.prototype.filterSet = function() {
    return this.$scope.$parent.$broadcast('filterAccept');
  };

  HeaderController.prototype.filterUnset = function() {};

  return HeaderController;

})();

angular.module('app.header.controllers').controller('headerController', HeaderController);

var HeaderDirectives;

HeaderDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/header/templates/header.html',
    controller: HeaderController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.header.directives').controller('headerController', HeaderController).directive('mainHeader', HeaderDirectives);

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

var CustomerService;

CustomerService = (function() {
  CustomerService.$inject = ['$http', '$q', 'localStorageService'];

  function CustomerService($http, $q, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  CustomerService.prototype.getCustomer = function() {
    return this.localStorageService.get('customer');
  };

  CustomerService.prototype.saveCustomer = function(customer) {
    return this.localStorageService.set('customer', customer);
  };

  return CustomerService;

})();

angular.module('app.order.services').service('customerService', CustomerService);

var ProductItemDirectives;

ProductItemDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/productItem/templates/product_item.html',
    controller: ProductItemController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.productItem.directives').controller('productItemController', ProductItemController).directive('productItem', ProductItemDirectives);

var ProductItemController;

ProductItemController = (function() {
  ProductItemController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function ProductItemController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.productItemService = $injector.get('productItemService');
    this.likesService = $injector.get('likesService');
    this.cartService = $injector.get('cartService');
    this.$rootScope.likeIcon = true;
    this.$rootScope.cartIcon = true;
    this.init();
  }

  ProductItemController.prototype.init = function() {
    var ref;
    this.getProduct();
    this.$scope.id = Number(this.$stateParams.id);
    this.$scope.likes = (ref = this.likesService.getLikes()) != null ? ref : {};
    return this.$rootScope.filter = false;
  };

  ProductItemController.prototype.getProduct = function() {
    return this.productItemService.getProducts().then((function(_this) {
      return function(products) {
        var i, id, len, name, ref;
        _this.products = products;
        id = _this.$scope.id;
        ref = _this.products;
        for (i = 0, len = ref.length; i < len; i++) {
          name = ref[i];
          if (name.id === id) {
            _this.$scope.product = name;
            break;
          }
        }
        _this.$scope.sliderWidth = _this.$scope.product.allImages.length * 200;
        _this.$scope.productLike = _this.$scope.likes[id];
        return _this.$rootScope.title = _this.$scope.product.articol;
      };
    })(this));
  };

  ProductItemController.prototype.like = function(id) {
    var likes;
    likes = this.$scope.likes;
    this.$scope.likes = this.likesService.setLikes(id, likes);
    return this.likesLength();
  };

  ProductItemController.prototype.likesLength = function() {
    return this.$scope.likesCount = this.likesService.likesLength();
  };

  ProductItemController.prototype.addCart = function() {
    if (!this.$scope.ctrl.color || !this.$scope.ctrl.size) {
      angular.element('.error').removeClass('m-hide-top');
      setTimeout((function() {
        return angular.element('.error').addClass('m-hide-top');
      }), 1500);
    }
    if (!this.$scope.ctrl.color) {
      angular.element('.selectColor').removeClass('m-hide');
    } else {
      angular.element('.selectColor').addClass('m-hide');
    }
    if (!this.$scope.ctrl.size) {
      angular.element('.selectSize').removeClass('m-hide');
    } else {
      angular.element('.selectSize').addClass('m-hide');
    }
    if (this.$scope.ctrl.color && this.$scope.ctrl.size) {
      return this.cartService.addCart(this.$scope.id, this.$scope.ctrl.color, this.$scope.ctrl.size, this.$scope.product.mainImageSrc, this.$scope.product.name, this.$scope.product.articol, this.$scope.product.price);
    }
  };

  return ProductItemController;

})();

angular.module('app.productItem.controllers').controller('productItemController', ProductItemController);

var ProductItemService;

ProductItemService = (function() {
  ProductItemService.$inject = ['$http', '$q', '$injector'];

  function ProductItemService($http, $q, $injector) {
    this.$http = $http;
    this.$q = $q;
    this.ProductModel = $injector.get('ProductModel');
  }

  ProductItemService.prototype.getProducts = function() {
    var deferred;
    deferred = this.$q.defer();
    this.$http({
      url: '/4doctors/built/products.json',
      method: 'GET'
    }).success((function(_this) {
      return function(response) {
        var products;
        products = response.map(function(product) {
          return new _this.ProductModel(product);
        });
        return deferred.resolve(products);
      };
    })(this)).error(function(reason) {
      console.log(reason);
      return deferred.reject(reason);
    });
    return deferred.promise;
  };

  ProductItemService.prototype.sendProducts = function(products) {
    return console.log(products);
  };

  return ProductItemService;

})();

angular.module('app.productItem.services').service('productItemService', ProductItemService);

var ProductsController;

ProductsController = (function() {
  ProductsController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function ProductsController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.productModel = $injector.get('ProductModel');
    this.productsService = $injector.get('productsService');
    this.likesService = $injector.get('likesService');
    this.init();
  }

  ProductsController.prototype.init = function() {
    this.$rootScope.title = false;
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = true;
    this.$rootScope.cartIcon = true;
    this.$scope.categoryName = this.$stateParams.categoryName;
    if (this.$scope.categoryName) {
      this.$rootScope.title = this.$scope.categoryName;
    }
    this.getProducts();
    this.$scope.likes = this.likesService.getLikes();
    return this.likesLength();
  };

  ProductsController.prototype.getProducts = function() {
    return this.productsService.getProducts().then((function(_this) {
      return function(products) {
        return _this.products = products;
      };
    })(this));
  };

  ProductsController.prototype.like = function(id) {
    var likes;
    likes = this.$scope.likes;
    this.$scope.likes = this.likesService.setLikes(id, likes);
    return this.likesLength();
  };

  ProductsController.prototype.likesLength = function() {
    return this.$scope.likesCount = this.likesService.likesLength();
  };

  ProductsController.prototype.saveProducts = function() {
    return this.productsService.sendProducts(this.products);
  };

  return ProductsController;

})();

angular.module('app.products.controllers').controller('productsController', ProductsController);

var FavoritesDirectives;

FavoritesDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/products/templates/favorites_list.html',
    controller: ProductsController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.favorites.directives').controller('productsController', ProductsController).directive('favoritesList', FavoritesDirectives);

var ProductsDirectives;

ProductsDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/products/templates/products_list.html',
    controller: ProductsController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.products.directives').controller('productsController', ProductsController).directive('productsList', ProductsDirectives);

var ProductModel;

ProductModel = (function() {
  function ProductModel(product) {
    this.id = product.id, this.name = product.name, this.articol = product.articol, this.mainImageSrc = product.mainImageSrc, this.price = product.price, this.category = product.category, this.rusCategory = product.rusCategory, this.allImages = product.allImages, this.description = product.description, this.composition = product.composition, this.colors = product.colors, this.sizes = product.sizes;
  }

  return ProductModel;

})();

angular.module('app.products.models').factory('ProductModel', function() {
  return ProductModel;
});

var LikesService;

LikesService = (function() {
  LikesService.$injector = ['$http', '$q', '$injector', 'localStorageService'];

  function LikesService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  LikesService.prototype.getLikes = function() {
    return this.localStorageService.get('likes');
  };

  LikesService.prototype.setLikes = function(id, likes) {
    likes = likes != null ? likes : {};
    if (likes[id] === 'like_active') {
      likes[id] = 'like_empty';
    } else {
      likes[id] = 'like_active';
    }
    this.localStorageService.set('likes', likes);
    return likes;
  };

  LikesService.prototype.likesLength = function() {
    var i, j, len, likeKeys, likes, likesCount;
    likes = this.getLikes();
    if (likes) {
      likeKeys = Object.keys(likes);
      likesCount = 0;
      for (j = 0, len = likeKeys.length; j < len; j++) {
        i = likeKeys[j];
        if (likes[i] === 'like_active') {
          likesCount++;
        }
      }
    }
    return likesCount;
  };

  return LikesService;

})();

angular.module('app.likes.services').service('likesService', LikesService);

var ProductsService;

ProductsService = (function() {
  ProductsService.$inject = ['$http', '$q', '$injector'];

  function ProductsService($http, $q, $injector) {
    this.$http = $http;
    this.$q = $q;
    this.ProductModel = $injector.get('ProductModel');
  }

  ProductsService.prototype.getProducts = function() {
    var deferred;
    deferred = this.$q.defer();
    this.$http({
      url: '/4doctors/built/products.json',
      method: 'GET'
    }).success((function(_this) {
      return function(response) {
        var products;
        products = response.map(function(product) {
          return new _this.ProductModel(product);
        });
        return deferred.resolve(products);
      };
    })(this)).error(function(reason) {
      console.log(reason);
      return deferred.reject(reason);
    });
    return deferred.promise;
  };

  ProductsService.prototype.sendProducts = function(products) {
    return console.log(products);
  };

  return ProductsService;

})();

angular.module('app.products.services').service('productsService', ProductsService);

angular.module('app', ['ui.router', 'ngSanitize', 'LocalStorageModule', 'app.commons', 'app.header', 'app.products', 'app.productItem', 'app.filter', 'app.cart', 'app.order']);

$('.fake_placeholder input, .fake_placeholder textarea').on('blur', function() {
  var val;
  val = $(this).val();
  if (val) {
    $(this).parents('p').addClass('nonempty');
  } else {
    $(this).parents('p').removeClass('nonempty');
  }
});

var $bigdislike, $biglike, $body, $main, $openImage, $overlay, $popupClose, $popupImage, $popupImageContainer, $popupLikes, $popups;

$body = $('body');

$main = $('#main');

$popups = $('.popup');

$popupImage = $('.popup_image');

$openImage = $('.open_image');

$popupImageContainer = $('.popup_image--container');

$overlay = $('#overlay');

$popupClose = $('.popup_close');

$biglike = $('.biglike');

$bigdislike = $('.bigdislike');

$popupLikes = $('.popup_like');

var OpenLike, OpenNav, OpenPopup, OpenSliderImage;

OpenPopup = (function() {
  function OpenPopup($el1, $data1) {
    this.$el = $el1;
    this.$data = $data1;
    this.init();
  }

  OpenPopup.prototype.init = function() {
    return this.$el.on('click', (function(_this) {
      return function() {
        if (_this.$data.hasClass('m-hide')) {
          return _this.open(_this.$data);
        } else {
          return _this.close(_this.$data);
        }
      };
    })(this));
  };

  OpenPopup.prototype.open = function($data) {
    $data.removeClass('m-hide');
    return $body.addClass('popup_active');
  };

  OpenPopup.prototype.close = function($data) {
    $data.addClass('m-hide');
    return $body.removeClass('popup_active');
  };

  return OpenPopup;

})();

OpenNav = (function() {
  function OpenNav($el1, $data1, $closeEl) {
    this.$el = $el1;
    this.$data = $data1;
    this.$closeEl = $closeEl;
    this.init();
  }

  OpenNav.prototype.init = function() {
    $body.on('click', '.nav_open', (function(_this) {
      return function(e) {
        var $data, $el;
        $el = $(e.target);
        $data = $($el.data('open'));
        if ($data.hasClass('m-hide-left')) {
          return _this.open($data);
        } else {
          return _this.close();
        }
      };
    })(this));
    return $body.on('click', '#main, .main_menu--links a', (function(_this) {
      return function() {
        return _this.close();
      };
    })(this));
  };

  OpenNav.prototype.open = function($data) {
    $data.removeClass('m-hide-left');
    return setTimeout((function() {
      $body.addClass('nav_active');
    }), 200);
  };

  OpenNav.prototype.close = function() {
    $('.left_nav').addClass('m-hide-left');
    return $body.removeClass('nav_active');
  };

  return OpenNav;

})();

OpenSliderImage = (function() {
  function OpenSliderImage() {
    this.$increase = $('.increase');
    this.init();
  }

  OpenSliderImage.prototype.init = function() {
    $body.on('click', '.increase', (function(_this) {
      return function() {
        var $img, fullView, i, img, len, partialView, ref;
        _this.$images = $('.slide--content img');
        partialView = [];
        ref = _this.$images;
        for (i = 0, len = ref.length; i < len; i++) {
          img = ref[i];
          $img = $(img);
          if ($img.visible()) {
            fullView = $img;
            break;
          } else if ($img.visible(true)) {
            partialView.push($img);
          }
        }
        if (fullView) {
          return _this.open(fullView);
        } else {
          return _this.open(partialView[1]);
        }
      };
    })(this));
    return $body.on('click', '.open_image', (function(_this) {
      return function(e) {
        return _this.open($(e.target));
      };
    })(this));
  };

  OpenSliderImage.prototype.open = function($img) {
    $popupImage.removeClass('m-hide');
    $popupImageContainer.html($img.clone());
    return $body.addClass('popup_active');
  };

  return OpenSliderImage;

})();

OpenLike = (function() {
  function OpenLike() {
    this.init();
  }

  OpenLike.prototype.init = function() {
    $('#main_content').on('click', '.like_active', function(e) {
      e.preventDefault();
      $overlay.fadeIn(300);
      $biglike.removeClass('m-hide-left');
      return $body.addClass('popup_overlay');
    });
    $('#main_content').on('click', '.like_empty', function(e) {
      e.preventDefault();
      $overlay.fadeIn(300);
      $bigdislike.removeClass('m-hide-left');
      return $body.addClass('popup_overlay');
    });
    return $overlay.on('click', function() {
      $popupLikes.addClass('m-hide-left');
      $body.removeClass('popup_overlay');
      return $overlay.fadeOut(300);
    });
  };

  return OpenLike;

})();

$('a.popup, a.popup_image').on('click', function(e) {
  return e.preventDefault();
});

$popupClose.on('click', function() {
  $popups.addClass('m-hide');
  return $body.removeClass('popup_active');
});

$('.popup_open').each(function() {
  var $data, $el;
  $el = $(this);
  $data = $($el.data('open'));
  return new OpenPopup($el, $data);
});

$("#overlay, .popup_like").on("touchmove", false);

new OpenNav;

new OpenSliderImage;

new OpenLike;

angular.module('app.cart', ['app.cart.controllers', 'app.cart.services', 'app.cart.directives']);

angular.module('app.cart.controllers', []);

angular.module('app.cart.services', []);

angular.module('app.cart.directives', []);

angular.module('app.header', ['app.header.controllers', 'app.header.directives']);

angular.module('app.header.controllers', []);

angular.module('app.header.directives', []);

angular.module('app.order', ['app.order.controllers', 'app.order.services', 'app.order.directives']);

angular.module('app.order.controllers', []);

angular.module('app.order.services', []);

angular.module('app.order.directives', []);

angular.module('app.commons', ['app.commons.config']);

angular.module('app.commons.config', []);

angular.module('app.filter', ['app.filter.controllers', 'app.filter.services', 'app.filter.directives']);

angular.module('app.filter.controllers', []);

angular.module('app.filter.services', []);

angular.module('app.filter.directives', []);

angular.module('app.productItem', ['app.productItem.services', 'app.productItem.controllers', 'app.productItem.directives', 'app.likes.services']);

angular.module('app.productItem.services', []);

angular.module('app.productItem.controllers', []);

angular.module('app.productItem.directives', []);

angular.module('app.products', ['app.products.models', 'app.products.services', 'app.products.controllers', 'app.products.directives', 'app.favorites.directives', 'app.likes.services']);

angular.module('app.products.models', []);

angular.module('app.products.services', []);

angular.module('app.products.controllers', []);

angular.module('app.products.directives', []);

angular.module('app.favorites.directives', []);

angular.module('app.likes.services', []);

var CartController;

CartController = (function() {
  CartController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function CartController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.cartService = $injector.get('cartService');
    this.init();
  }

  CartController.prototype.init = function() {
    this.$rootScope.title = 'Корзина';
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = false;
    this.$rootScope.cartIcon = false;
    this.$scope.cartProducts = this.cartService.getCarts();
    return this.$scope.count = 1;
  };

  CartController.prototype.decrease = function(id) {
    if (this.$scope.cartProducts[id].count > 1) {
      return this.$scope.cartProducts[id].count--;
    } else {
      return delete this.$scope.cartProducts[id];
    }
  };

  CartController.prototype.increase = function(id) {
    return this.$scope.cartProducts[id].count++;
  };

  CartController.prototype.makeOrder = function() {
    return this.cartService.updateCart(this.$scope.cartProducts);
  };

  return CartController;

})();

angular.module('app.cart.controllers').controller('cartController', CartController);

var CartDirectives;

CartDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/cart/templates/cart.html',
    controller: CartController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.cart.directives').controller('cartController', CartController).directive('cart', CartDirectives);

var CartService;

CartService = (function() {
  CartService.$inject = ['$http', '$q', '$injector', 'localStorageService'];

  function CartService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  CartService.prototype.getCarts = function() {
    return this.localStorageService.get('cart');
  };

  CartService.prototype.addCart = function(id, color, size, img, name, articol, price) {
    var current, ref;
    current = (ref = this.getCarts()) != null ? ref : {};
    current[id] = {
      'id': id,
      'color': color,
      'size': size,
      'img': img,
      'name': name,
      'articol': articol,
      'price': price,
      'count': 1
    };
    console.log(current);
    return this.localStorageService.set('cart', current);
  };

  CartService.prototype.updateCart = function(cartProducts) {
    return this.localStorageService.set('cart', cartProducts);
  };

  CartService.prototype.cartLength = function() {
    var cart, cartCount, cartKeys, i, j, len;
    cart = this.getCarts();
    if (cart != null) {
      cartKeys = Object.keys(cart);
      cartCount = 0;
      for (j = 0, len = cartKeys.length; j < len; j++) {
        i = cartKeys[j];
        cartCount++;
      }
      return cartCount;
    } else {
      return 0;
    }
  };

  return CartService;

})();

angular.module('app.cart.services').service('cartService', CartService);

var HeaderController;

HeaderController = (function() {
  HeaderController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams', '$window'];

  function HeaderController($injector, $scope, $rootScope, $stateParams, $window) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.$window = $window;
    this.likesService = $injector.get('likesService');
    this.filterService = $injector.get('filterService');
    this.cartService = $injector.get('cartService');
    this.init();
  }

  HeaderController.prototype.init = function() {
    this.$scope.likesCount = (function(_this) {
      return function() {
        return _this.likesService.likesLength();
      };
    })(this);
    this.$scope.cartCount = (function(_this) {
      return function() {
        return _this.cartService.cartLength();
      };
    })(this);
    return this.$rootScope.$on('$stateChangeSuccess', (function(_this) {
      return function(ev, to, toParams, from, fromParams) {
        _this.$rootScope.previousState = from.name;
        return _this.$rootScope.currentState = to.name;
      };
    })(this));
  };

  HeaderController.prototype.back = function() {
    if (this.$rootScope.previousState != null) {
      return this.$window.history.go(-1);
    } else {
      return this.$window.location.href = '#/';
    }
  };

  HeaderController.prototype.filterSet = function() {
    return this.$scope.$parent.$broadcast('filterAccept');
  };

  HeaderController.prototype.filterUnset = function() {};

  return HeaderController;

})();

angular.module('app.header.controllers').controller('headerController', HeaderController);

var HeaderDirectives;

HeaderDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/header/templates/header.html',
    controller: HeaderController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.header.directives').controller('headerController', HeaderController).directive('mainHeader', HeaderDirectives);

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
    this.$scope.customer = this.customerService.getCustomer();
    return angular.element('.fake_select').on('change', function() {
      var select, selected;
      select = angular.element(this);
      selected = select.find('option:selected').text();
      select.find('+ .select_label').addClass('active');
      return select.find('+ .select_label .select_label--result').html(selected);
    });
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

var CustomerService;

CustomerService = (function() {
  CustomerService.$inject = ['$http', '$q', 'localStorageService'];

  function CustomerService($http, $q, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  CustomerService.prototype.getCustomer = function() {
    return this.localStorageService.get('customer');
  };

  CustomerService.prototype.saveCustomer = function(customer) {
    return this.localStorageService.set('customer', customer);
  };

  return CustomerService;

})();

angular.module('app.order.services').service('customerService', CustomerService);

var Routes;

Routes = (function() {
  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/badlink');
    $stateProvider.state('home', {
      url: '/',
      views: {
        "header": {
          template: "<main-header>"
        },
        "productsList": {
          template: "<products-list>"
        },
        "filterCount": {
          template: "<filter-count>"
        }
      }
    }).state('category', {
      url: '/category/:categoryName',
      views: {
        "header": {
          template: "<main-header>"
        },
        "productsList": {
          template: "<products-list>"
        }
      }
    }).state('product', {
      url: '/product/:id',
      views: {
        "header": {
          template: "<main-header>"
        },
        "productItem": {
          template: "<product-item>"
        }
      }
    }).state('favorites', {
      url: '/favorites',
      views: {
        "header": {
          template: "<main-header>"
        },
        "favoritesList": {
          template: "<favorites-list>"
        }
      }
    }).state('filter', {
      url: '/filter',
      views: {
        "header": {
          template: "<main-header>"
        },
        "filter": {
          template: "<filter>"
        }
      }
    }).state('cart', {
      url: '/cart',
      views: {
        "header": {
          template: "<main-header>"
        },
        "cart": {
          template: "<cart>"
        }
      }
    }).state('customer', {
      url: '/customer',
      views: {
        "header": {
          template: "<main-header>"
        },
        "customer": {
          template: "<customer>"
        }
      }
    }).state('location', {
      url: '/location',
      views: {
        "header": {
          template: "<main-header>"
        },
        "location": {
          template: "<location>"
        }
      }
    }).state('delivery', {
      url: '/delivery',
      views: {
        "header": {
          template: "<main-header>"
        },
        "delivery": {
          template: "<delivery>"
        }
      }
    }).state('address', {
      url: '/address',
      views: {
        "header": {
          template: "<main-header>"
        },
        "address": {
          template: "<address>"
        }
      }
    }).state('payment_method', {
      url: '/payment_method',
      views: {
        "header": {
          template: "<main-header>"
        },
        "payment": {
          template: "<payment>"
        }
      }
    }).state('submit', {
      url: '/submit',
      views: {
        "header": {
          template: "<main-header>"
        },
        "submit": {
          template: "<submit>"
        }
      }
    }).state('pay_order', {
      url: '/pay_order',
      views: {
        "header": {
          template: "<main-header>"
        },
        "payOrder": {
          template: "<pay-order>"
        }
      }
    });
  }

  return Routes;

})();

angular.module('app.commons.config').config(Routes);

var FilterController;

FilterController = (function() {
  FilterController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function FilterController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.filterService = $injector.get('filterService');
    this.filterLocal = this.filterService.filterGet();
    this.init();
  }

  FilterController.prototype.init = function() {
    this.$rootScope.title = 'Фильтр';
    this.$rootScope.filter = true;
    this.$scope.filterSettings = this.filterLocal;
    return this.$scope.$on('filterAccept', (function(_this) {
      return function() {
        return _this.filterAccept();
      };
    })(this));
  };

  FilterController.prototype.filterGet = function() {
    return this.filterService.filterGet();
  };

  FilterController.prototype.filterAccept = function() {
    return this.filterService.filterSet(this.$scope.filterSettings);
  };

  FilterController.prototype.filterUnset = function() {
    return this.filterService.filterUnset();
  };

  return FilterController;

})();

angular.module('app.filter.controllers').controller('filterController', FilterController);

var FilterCountDirectives, FilterDirectives;

FilterDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/filter/templates/filter.html',
    controller: FilterController,
    controllerAs: 'ctrl'
  };
};

FilterCountDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/filter/templates/filterCount.html',
    controller: FilterController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.filter.directives').controller('filterController', FilterController).directive('filter', FilterDirectives).directive('filterCount', FilterCountDirectives);

var FilterService;

FilterService = (function() {
  FilterService.$inject = ['$http', '$q', '$injector', 'localStorageService'];

  function FilterService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  FilterService.prototype.filterUnset = function() {
    this.localStorageService.set('filter', null);
    return console.log(this.filterGet());
  };

  FilterService.prototype.filterSet = function(data) {
    this.localStorageService.set('filter', data);
    return console.log(this.filterGet());
  };

  FilterService.prototype.filterGet = function() {
    return this.localStorageService.get('filter');
  };

  return FilterService;

})();

angular.module('app.filter.services').service('filterService', FilterService);

var ProductItemController;

ProductItemController = (function() {
  ProductItemController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function ProductItemController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.productItemService = $injector.get('productItemService');
    this.likesService = $injector.get('likesService');
    this.cartService = $injector.get('cartService');
    this.$rootScope.likeIcon = true;
    this.$rootScope.cartIcon = true;
    this.init();
  }

  ProductItemController.prototype.init = function() {
    var ref;
    this.getProduct();
    this.$scope.id = Number(this.$stateParams.id);
    this.$scope.likes = (ref = this.likesService.getLikes()) != null ? ref : {};
    return this.$rootScope.filter = false;
  };

  ProductItemController.prototype.getProduct = function() {
    return this.productItemService.getProducts().then((function(_this) {
      return function(products) {
        var i, id, len, name, ref;
        _this.products = products;
        id = _this.$scope.id;
        ref = _this.products;
        for (i = 0, len = ref.length; i < len; i++) {
          name = ref[i];
          if (name.id === id) {
            _this.$scope.product = name;
            break;
          }
        }
        _this.$scope.sliderWidth = _this.$scope.product.allImages.length * 200;
        _this.$scope.productLike = _this.$scope.likes[id];
        return _this.$rootScope.title = _this.$scope.product.articol;
      };
    })(this));
  };

  ProductItemController.prototype.like = function(id) {
    var likes;
    likes = this.$scope.likes;
    this.$scope.likes = this.likesService.setLikes(id, likes);
    return this.likesLength();
  };

  ProductItemController.prototype.likesLength = function() {
    return this.$scope.likesCount = this.likesService.likesLength();
  };

  ProductItemController.prototype.addCart = function() {
    if (!this.$scope.ctrl.color || !this.$scope.ctrl.size) {
      angular.element('.error').removeClass('m-hide-top');
      setTimeout((function() {
        return angular.element('.error').addClass('m-hide-top');
      }), 1500);
    }
    if (!this.$scope.ctrl.color) {
      angular.element('.selectColor').removeClass('m-hide');
    } else {
      angular.element('.selectColor').addClass('m-hide');
    }
    if (!this.$scope.ctrl.size) {
      angular.element('.selectSize').removeClass('m-hide');
    } else {
      angular.element('.selectSize').addClass('m-hide');
    }
    if (this.$scope.ctrl.color && this.$scope.ctrl.size) {
      return this.cartService.addCart(this.$scope.id, this.$scope.ctrl.color, this.$scope.ctrl.size, this.$scope.product.mainImageSrc, this.$scope.product.name, this.$scope.product.articol, this.$scope.product.price);
    }
  };

  return ProductItemController;

})();

angular.module('app.productItem.controllers').controller('productItemController', ProductItemController);

var ProductItemDirectives;

ProductItemDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/productItem/templates/product_item.html',
    controller: ProductItemController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.productItem.directives').controller('productItemController', ProductItemController).directive('productItem', ProductItemDirectives);

var ProductItemService;

ProductItemService = (function() {
  ProductItemService.$inject = ['$http', '$q', '$injector'];

  function ProductItemService($http, $q, $injector) {
    this.$http = $http;
    this.$q = $q;
    this.ProductModel = $injector.get('ProductModel');
  }

  ProductItemService.prototype.getProducts = function() {
    var deferred;
    deferred = this.$q.defer();
    this.$http({
      url: '/built/products.json',
      method: 'GET'
    }).success((function(_this) {
      return function(response) {
        var products;
        products = response.map(function(product) {
          return new _this.ProductModel(product);
        });
        return deferred.resolve(products);
      };
    })(this)).error(function(reason) {
      console.log(reason);
      return deferred.reject(reason);
    });
    return deferred.promise;
  };

  ProductItemService.prototype.sendProducts = function(products) {
    return console.log(products);
  };

  return ProductItemService;

})();

angular.module('app.productItem.services').service('productItemService', ProductItemService);

var ProductsController;

ProductsController = (function() {
  ProductsController.$inject = ['$injector', '$scope', '$rootScope', '$stateParams'];

  function ProductsController($injector, $scope, $rootScope, $stateParams) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    this.productModel = $injector.get('ProductModel');
    this.productsService = $injector.get('productsService');
    this.likesService = $injector.get('likesService');
    this.init();
  }

  ProductsController.prototype.init = function() {
    this.$rootScope.title = false;
    this.$rootScope.filter = false;
    this.$rootScope.likeIcon = true;
    this.$rootScope.cartIcon = true;
    this.$scope.categoryName = this.$stateParams.categoryName;
    if (this.$scope.categoryName) {
      this.$rootScope.title = this.$scope.categoryName;
    }
    this.getProducts();
    this.$scope.likes = this.likesService.getLikes();
    return this.likesLength();
  };

  ProductsController.prototype.getProducts = function() {
    return this.productsService.getProducts().then((function(_this) {
      return function(products) {
        return _this.products = products;
      };
    })(this));
  };

  ProductsController.prototype.like = function(id) {
    var likes;
    likes = this.$scope.likes;
    this.$scope.likes = this.likesService.setLikes(id, likes);
    return this.likesLength();
  };

  ProductsController.prototype.likesLength = function() {
    return this.$scope.likesCount = this.likesService.likesLength();
  };

  ProductsController.prototype.saveProducts = function() {
    return this.productsService.sendProducts(this.products);
  };

  return ProductsController;

})();

angular.module('app.products.controllers').controller('productsController', ProductsController);

var FavoritesDirectives;

FavoritesDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/products/templates/favorites_list.html',
    controller: ProductsController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.favorites.directives').controller('productsController', ProductsController).directive('favoritesList', FavoritesDirectives);

var ProductsDirectives;

ProductsDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/products/templates/products_list.html',
    controller: ProductsController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.products.directives').controller('productsController', ProductsController).directive('productsList', ProductsDirectives);

var ProductModel;

ProductModel = (function() {
  function ProductModel(product) {
    this.id = product.id, this.name = product.name, this.articol = product.articol, this.mainImageSrc = product.mainImageSrc, this.price = product.price, this.category = product.category, this.rusCategory = product.rusCategory, this.allImages = product.allImages, this.description = product.description, this.composition = product.composition, this.colors = product.colors, this.sizes = product.sizes;
  }

  return ProductModel;

})();

angular.module('app.products.models').factory('ProductModel', function() {
  return ProductModel;
});

var LikesService;

LikesService = (function() {
  LikesService.$injector = ['$http', '$q', '$injector', 'localStorageService'];

  function LikesService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  LikesService.prototype.getLikes = function() {
    return this.localStorageService.get('likes');
  };

  LikesService.prototype.setLikes = function(id, likes) {
    likes = likes != null ? likes : {};
    if (likes[id] === 'like_active') {
      likes[id] = 'like_empty';
    } else {
      likes[id] = 'like_active';
    }
    this.localStorageService.set('likes', likes);
    return likes;
  };

  LikesService.prototype.likesLength = function() {
    var i, j, len, likeKeys, likes, likesCount;
    likes = this.getLikes();
    if (likes) {
      likeKeys = Object.keys(likes);
      likesCount = 0;
      for (j = 0, len = likeKeys.length; j < len; j++) {
        i = likeKeys[j];
        if (likes[i] === 'like_active') {
          likesCount++;
        }
      }
    }
    return likesCount;
  };

  return LikesService;

})();

angular.module('app.likes.services').service('likesService', LikesService);

var ProductsService;

ProductsService = (function() {
  ProductsService.$inject = ['$http', '$q', '$injector'];

  function ProductsService($http, $q, $injector) {
    this.$http = $http;
    this.$q = $q;
    this.ProductModel = $injector.get('ProductModel');
  }

  ProductsService.prototype.getProducts = function() {
    var deferred;
    deferred = this.$q.defer();
    this.$http({
      url: '/built/products.json',
      method: 'GET'
    }).success((function(_this) {
      return function(response) {
        var products;
        products = response.map(function(product) {
          return new _this.ProductModel(product);
        });
        return deferred.resolve(products);
      };
    })(this)).error(function(reason) {
      console.log(reason);
      return deferred.reject(reason);
    });
    return deferred.promise;
  };

  ProductsService.prototype.sendProducts = function(products) {
    return console.log(products);
  };

  return ProductsService;

})();

angular.module('app.products.services').service('productsService', ProductsService);

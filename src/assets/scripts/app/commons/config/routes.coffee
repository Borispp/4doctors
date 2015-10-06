# TODO: не фанатеть от директив. Писать напрямую templateUrl

class Routes
	@$inject = ['$stateProvider', '$urlRouterProvider']

	constructor: ($stateProvider, $urlRouterProvider) ->
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise('/badlink')

		$stateProvider
			.state 'home',
				url: '/',
				views:
	        "header": { template: "<main-header>" },
	        "productsList": { template: "<products-list>" }
	        "filterCount": { template: "<filter-count>" }
			.state 'category',
				url: '/category/:categoryName',
				views:
	        "header": { template: "<main-header>" },
	        "productsList": { template: "<products-list>" }
			.state 'product',
				url: '/product/:id',
				views:
	        "header": { template: "<main-header>" },
	        "productItem": { template: "<product-item>" }
			.state 'favorites',
				url: '/favorites',
				views:
	        "header": { template: "<main-header>" },
	        "favoritesList": { template: "<favorites-list>" }
			.state 'filter',
				url: '/filter',
				views:
	        "header": { template: "<main-header>" },
	        "filter": { template: "<filter>" }
			.state 'cart',
				url: '/cart',
				views:
	        "header": { template: "<main-header>" },
	        "cart": { template: "<cart>" }
			.state 'customer',
				url: '/customer',
				views:
	        "header": { template: "<main-header>" },
	        "customer": { template: "<customer>" }
			.state 'location',
				url: '/location',
				views:
	        "header": { template: "<main-header>" },
	        "location": { template: "<location>" }
			.state 'delivery',
				url: '/delivery',
				views:
	        "header": { template: "<main-header>" },
	        "delivery": { template: "<delivery>" }
			.state 'address',
				url: '/address',
				views:
	        "header": { template: "<main-header>" },
	        "address": { template: "<address>" }
			.state 'payment_method',
				url: '/payment_method',
				views:
	        "header": { template: "<main-header>" },
	        "payment": { template: "<payment>" }
			.state 'submit',
				url: '/submit',
				views:
	        "header": { template: "<main-header>" },
	        "submit": { template: "<submit>" }
			.state 'pay_order',
				url: '/pay_order',
				views:
	        "header": { template: "<main-header>" },
	        "payOrder": { template: "<pay-order>" }

angular.module 'app.commons.config'
	.config Routes

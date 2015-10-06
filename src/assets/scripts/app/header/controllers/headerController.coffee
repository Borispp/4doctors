class HeaderController
	@$inject = ['$injector', '$scope', '$rootScope', '$stateParams', '$window', '$state']

	constructor: ($injector, @$scope, @$rootScope, @$stateParams, @$window, @$state) ->
		@likesService = $injector.get 'likesService'
		@filterService = $injector.get 'filterService'
		@cartService = $injector.get 'cartService'
		@init()

	init: ->
		# Dirty hook for main page menu
		if @$state.is('home')
			angular.element('body').addClass('nav_active')
			angular.element('.main_menu').removeClass('m-hide-left')
		else
			angular.element('body').removeClass('nav_active')
			angular.element('.main_menu').addClass('m-hide-left')

		@$scope.likesCount = => @likesService.likesLength()
		@$scope.cartCount = => @cartService.cartLength()
		@$rootScope.$on '$stateChangeSuccess', (ev, to, toParams, from, fromParams) =>
		  @$rootScope.previousState = from.name
		  @$rootScope.currentState = to.name

	back: ->
		if @$rootScope.previousState?
			@$window.history.go(-1)
		else
			@$window.location.href = '#/'

	filterSet: ->
		@$scope.$parent.$broadcast 'filterAccept'

	filterUnset: ->
		# console.log 'Filter Unset'


angular.module('app.header.controllers')
	.controller('headerController', HeaderController)

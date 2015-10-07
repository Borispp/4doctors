class FilterController
	@$inject = ['$injector', '$scope', '$rootScope', '$state']

	constructor: ($injector, @$scope, @$rootScope, @$state) ->
		@filterService = $injector.get 'filterService'
		@filterLocal = @filterService.filterGet()
		@init()

	init: ->

		# Dirty. TODO: this things in routes
		if @$state.is('filter')
			@$rootScope.title = 'Фильтр'
			@$rootScope.filter = true
			
		# Set Settings
		@$scope.filterSettings = @filterLocal

		@$scope.$on 'filterAccept', =>
		  @filterAccept()

	filterGet: ->
		@filterService.filterGet()

	filterAccept: ->
		@filterService.filterSet @$scope.filterSettings

	filterUnset: ->
		@filterService.filterUnset()

angular.module('app.filter.controllers')
	.controller('filterController', FilterController)

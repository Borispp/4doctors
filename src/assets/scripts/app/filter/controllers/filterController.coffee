class FilterController
	@$inject = ['$injector', '$scope', '$rootScope', '$stateParams']

	constructor: ($injector, @$scope, @$rootScope, $stateParams) ->
		@filterService = $injector.get 'filterService'
		@filterLocal = @filterService.filterGet()
		@init()

	init: ->
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

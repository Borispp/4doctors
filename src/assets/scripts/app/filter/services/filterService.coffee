class FilterService
	@$inject = ['$http', '$q', '$injector', 'localStorageService']

	constructor: (@$http, @$q, $injector, @localStorageService) ->
		# init

	filterUnset: ->
		@localStorageService.set 'filter', null
		console.log @filterGet()

	filterSet: (data) ->
		@localStorageService.set 'filter', data
		console.log @filterGet()

	filterGet: ->
		return @localStorageService.get 'filter'


angular.module('app.filter.services')
	.service('filterService', FilterService)

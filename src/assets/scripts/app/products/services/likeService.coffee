class LikesService
	@$injector = ['$http', '$q', '$injector', 'localStorageService']

	constructor: (@$http, @$q, $injector, @localStorageService) ->
		#

	getLikes: ->
		@localStorageService.get 'likes'

	setLikes: (id, likes) ->
		likes = likes ? {}
		if likes[id] == 'like_active' then likes[id] = 'like_empty' else likes[id] = 'like_active'

		@localStorageService.set 'likes', likes

		return likes

	likesLength: ->
		likes = @getLikes()
		if likes
			likeKeys = Object.keys(likes)
			likesCount = 0
			for i in likeKeys
				if (likes[i] == 'like_active')
					likesCount++

		return likesCount

angular.module 'app.likes.services'
	.service 'likesService', LikesService

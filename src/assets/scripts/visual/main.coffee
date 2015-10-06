# Dirty JS for visual effects.
# TODO: make pretty classes

class OpenPopup
	constructor: (@$el, @$data) ->
		@init()
	init: ->
		@$el.on 'click', =>
			if @$data.hasClass 'm-hide'
				@open(@$data)
			else
				@close(@$data)

	open: ($data) ->
		$data.removeClass 'm-hide'
		$body.addClass 'popup_active'
	close: ($data) ->
		$data.addClass 'm-hide'
		$body.removeClass 'popup_active'

class OpenNav
	constructor: (@$el, @$data, @$closeEl) ->
		@init()
	init: ->
		$body.on 'click', '.nav_open', (e) =>
			$el = $(e.target)
			$data = $($el.data 'open')
			if $data.hasClass 'm-hide-left'
				@open($data)
			else
				@close()

		$body.on 'click', '#main, .main_menu--links a', =>
			@close()

	open: ($data) ->
		$data.removeClass 'm-hide-left'
		setTimeout (->
		  $body.addClass 'nav_active'
		  return
		), 200
	close: () ->
		$('.left_nav').addClass 'm-hide-left'
		$body.removeClass 'nav_active'

class OpenSliderImage
	constructor: () ->
		@$increase = $('.increase')
		@init()
	init: ->
		$body.on 'click', '.increase', =>
			@$images = $('.slide--content img')
			partialView = []

			for img in @$images
				$img = $(img)
				if $img.visible()
					fullView = $img
					break
				else if $img.visible(true)
					partialView.push $img

			if fullView
				@open fullView
			else
				@open partialView[1]

		$body.on 'click', '.open_image', (e) =>
			@open $(e.target)
	open: ($img) ->
		$popupImage.removeClass 'm-hide'
		$popupImageContainer.html $img.clone()
		$body.addClass 'popup_active'

class OpenLike
	constructor: ->
		@init()
	init: ->
		$('#main_content').on 'click', '.like_active', (e) ->
			e.preventDefault()
			$overlay.fadeIn(300)
			$biglike.removeClass 'm-hide-left'
			$body.addClass 'popup_overlay'
		$('#main_content').on 'click', '.like_empty', (e) ->
			e.preventDefault()
			$overlay.fadeIn(300)
			$bigdislike.removeClass 'm-hide-left'
			$body.addClass 'popup_overlay'

		$overlay.on 'click', ->
			$popupLikes.addClass 'm-hide-left'
			$body.removeClass 'popup_overlay'
			$overlay.fadeOut(300)

$('a.popup, a.popup_image').on 'click', (e) ->
	e.preventDefault()

$popupClose.on 'click', ->
	$popups.addClass 'm-hide'
	$body.removeClass 'popup_active'

$('.popup_open').each ->
	$el = $(@)
	$data = $($el.data 'open')
	new	OpenPopup($el, $data)

$("#overlay, .popup_like").on("touchmove", false)

new	OpenNav
new OpenSliderImage
new OpenLike

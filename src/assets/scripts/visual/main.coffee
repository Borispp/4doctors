class OpenPopup
	constructor: (@$el, @$data) ->
		@init()
	init: ->
		@$el.on 'click', =>
			if @$data.hasClass('m-hide')
				@open(@$data)
			else
				@close(@$data)

	open: ($data) ->
		$data.removeClass('m-hide')
		$body.addClass 'nav_active'
	close: ($data) ->
		$data.addClass('m-hide')
		$body.removeClass 'nav_active'

class OpenNav
	constructor: (@$el, @$data) ->
		@init()
	init: ->
		@$el.on 'click', =>
			if @$data.hasClass('m-show_top')
				@close(@$data)
			else
				@open(@$data)

	open: ($data) ->
		$data.addClass('m-show_top')
		$body.addClass 'nav_active'
	close: ($data) ->
		$data.removeClass('m-show_top')
		$body.removeClass 'nav_active'

class OpenSliderImage
	constructor: () ->
		@$increase = $('.increase')
		@$images = $('.slide--content img')
		@init()
	init: ->
		@$increase.on 'click', =>
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

		$openImage.on 'click', (e) =>
			@open $(e.target)
	open: ($img) ->
		$popupImage.removeClass 'm-hide'
		$popupImageContainer.html $img.clone()
		$body.addClass 'popup_active'

$body = $('body')
$popups = $('.popup')
$popupImage = $('.popup_image')
$openImage = $('.open_image')
$popupImageContainer = $('.popup_image--container')
$popupClose = $('.popup_close')

$('a.popup, a.popup_image').on 'click', (e) ->
	e.preventDefault()

$('.fake_placeholder input, .fake_placeholder textarea').on 'blur', ->
  val = $(this).val()
  if val
    $(this).parents('p').addClass 'nonempty'
  else
    $(this).parents('p').removeClass 'nonempty'
  return

$('.fake_select').on 'blur', ->
	select = $(@)
	selected = select.find('option:selected').text()

	select.find('+ .select_label').addClass('active')
	select.find('+ .select_label .select_label--result').html selected


$('.popup_open').each ->
	$el = $(@)
	$data = $($el.data 'open')
	new	OpenPopup($el, $data)

$('.nav_open').each ->
	$el = $(@)
	$data = $($el.data 'open')
	new	OpenNav($el, $data)

new OpenSliderImage

$popupClose.on 'click', ->
	$popups.addClass 'm-hide'
	$body.removeClass 'popup_active'

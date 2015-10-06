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

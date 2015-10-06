$('.fake_placeholder input, .fake_placeholder textarea').on 'blur', ->
  val = $(this).val()
  if val
    $(this).parents('p').addClass 'nonempty'
  else
    $(this).parents('p').removeClass 'nonempty'
  return

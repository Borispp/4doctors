$('.fake_placeholder input, .fake_placeholder textarea').on('blur', function() {
  var val;
  val = $(this).val();
  if (val) {
    $(this).parents('p').addClass('nonempty');
  } else {
    $(this).parents('p').removeClass('nonempty');
  }
});

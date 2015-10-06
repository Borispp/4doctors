$('.fake_placeholder input, .fake_placeholder textarea').on('blur', function() {
  var val;
  val = $(this).val();
  if (val) {
    $(this).parents('p').addClass('nonempty');
  } else {
    $(this).parents('p').removeClass('nonempty');
  }
});

$('.fake_select').on('blur', function() {
  var select, selected;
  select = $(this);
  selected = select.find('option:selected').text();
  select.find('+ .select_label').addClass('active');
  return select.find('+ .select_label .select_label--result').html(selected);
});

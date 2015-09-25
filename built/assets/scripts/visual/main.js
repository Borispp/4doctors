var $body, $openImage, $popupClose, $popupImage, $popupImageContainer, $popups, OpenNav, OpenPopup, OpenSliderImage;

OpenPopup = (function() {
  function OpenPopup($el1, $data1) {
    this.$el = $el1;
    this.$data = $data1;
    this.init();
  }

  OpenPopup.prototype.init = function() {
    return this.$el.on('click', (function(_this) {
      return function() {
        if (_this.$data.hasClass('m-hide')) {
          return _this.open(_this.$data);
        } else {
          return _this.close(_this.$data);
        }
      };
    })(this));
  };

  OpenPopup.prototype.open = function($data) {
    $data.removeClass('m-hide');
    return $body.addClass('nav_active');
  };

  OpenPopup.prototype.close = function($data) {
    $data.addClass('m-hide');
    return $body.removeClass('nav_active');
  };

  return OpenPopup;

})();

OpenNav = (function() {
  function OpenNav($el1, $data1) {
    this.$el = $el1;
    this.$data = $data1;
    this.init();
  }

  OpenNav.prototype.init = function() {
    return this.$el.on('click', (function(_this) {
      return function() {
        if (_this.$data.hasClass('m-show_top')) {
          return _this.close(_this.$data);
        } else {
          return _this.open(_this.$data);
        }
      };
    })(this));
  };

  OpenNav.prototype.open = function($data) {
    $data.addClass('m-show_top');
    return $body.addClass('nav_active');
  };

  OpenNav.prototype.close = function($data) {
    $data.removeClass('m-show_top');
    return $body.removeClass('nav_active');
  };

  return OpenNav;

})();

OpenSliderImage = (function() {
  function OpenSliderImage() {
    this.$increase = $('.increase');
    this.$images = $('.slide--content img');
    this.init();
  }

  OpenSliderImage.prototype.init = function() {
    this.$increase.on('click', (function(_this) {
      return function() {
        var $img, fullView, i, img, len, partialView, ref;
        partialView = [];
        ref = _this.$images;
        for (i = 0, len = ref.length; i < len; i++) {
          img = ref[i];
          $img = $(img);
          if ($img.visible()) {
            fullView = $img;
            break;
          } else if ($img.visible(true)) {
            partialView.push($img);
          }
        }
        if (fullView) {
          return _this.open(fullView);
        } else {
          return _this.open(partialView[1]);
        }
      };
    })(this));
    return $openImage.on('click', (function(_this) {
      return function(e) {
        return _this.open($(e.target));
      };
    })(this));
  };

  OpenSliderImage.prototype.open = function($img) {
    $popupImage.removeClass('m-hide');
    $popupImageContainer.html($img.clone());
    return $body.addClass('popup_active');
  };

  return OpenSliderImage;

})();

$body = $('body');

$popups = $('.popup');

$popupImage = $('.popup_image');

$openImage = $('.open_image');

$popupImageContainer = $('.popup_image--container');

$popupClose = $('.popup_close');

$('a.popup, a.popup_image').on('click', function(e) {
  return e.preventDefault();
});

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

$('.popup_open').each(function() {
  var $data, $el;
  $el = $(this);
  $data = $($el.data('open'));
  return new OpenPopup($el, $data);
});

$('.nav_open').each(function() {
  var $data, $el;
  $el = $(this);
  $data = $($el.data('open'));
  return new OpenNav($el, $data);
});

new OpenSliderImage;

$popupClose.on('click', function() {
  $popups.addClass('m-hide');
  return $body.removeClass('popup_active');
});

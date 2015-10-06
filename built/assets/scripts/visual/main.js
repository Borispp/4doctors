var OpenLike, OpenNav, OpenPopup, OpenSliderImage;

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
    return $body.addClass('popup_active');
  };

  OpenPopup.prototype.close = function($data) {
    $data.addClass('m-hide');
    return $body.removeClass('popup_active');
  };

  return OpenPopup;

})();

OpenNav = (function() {
  function OpenNav($el1, $data1, $closeEl) {
    this.$el = $el1;
    this.$data = $data1;
    this.$closeEl = $closeEl;
    this.init();
  }

  OpenNav.prototype.init = function() {
    $body.on('click', '.nav_open', (function(_this) {
      return function(e) {
        var $data, $el;
        $el = $(e.target);
        $data = $($el.data('open'));
        if ($data.hasClass('m-hide-left')) {
          return _this.open($data);
        } else {
          return _this.close();
        }
      };
    })(this));
    return $body.on('click', '#main, .main_menu--links a', (function(_this) {
      return function() {
        return _this.close();
      };
    })(this));
  };

  OpenNav.prototype.open = function($data) {
    $data.removeClass('m-hide-left');
    return setTimeout((function() {
      $body.addClass('nav_active');
    }), 200);
  };

  OpenNav.prototype.close = function() {
    $('.left_nav').addClass('m-hide-left');
    return $body.removeClass('nav_active');
  };

  return OpenNav;

})();

OpenSliderImage = (function() {
  function OpenSliderImage() {
    this.$increase = $('.increase');
    this.init();
  }

  OpenSliderImage.prototype.init = function() {
    $body.on('click', '.increase', (function(_this) {
      return function() {
        var $img, fullView, i, img, len, partialView, ref;
        _this.$images = $('.slide--content img');
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
    return $body.on('click', '.open_image', (function(_this) {
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

OpenLike = (function() {
  function OpenLike() {
    this.init();
  }

  OpenLike.prototype.init = function() {
    $('#main_content').on('click', '.like_active', function(e) {
      e.preventDefault();
      $overlay.fadeIn(300);
      $biglike.removeClass('m-hide-left');
      return $body.addClass('popup_overlay');
    });
    $('#main_content').on('click', '.like_empty', function(e) {
      e.preventDefault();
      $overlay.fadeIn(300);
      $bigdislike.removeClass('m-hide-left');
      return $body.addClass('popup_overlay');
    });
    return $overlay.on('click', function() {
      $popupLikes.addClass('m-hide-left');
      $body.removeClass('popup_overlay');
      return $overlay.fadeOut(300);
    });
  };

  return OpenLike;

})();

$('a.popup, a.popup_image').on('click', function(e) {
  return e.preventDefault();
});

$popupClose.on('click', function() {
  $popups.addClass('m-hide');
  return $body.removeClass('popup_active');
});

$('.popup_open').each(function() {
  var $data, $el;
  $el = $(this);
  $data = $($el.data('open'));
  return new OpenPopup($el, $data);
});

$("#overlay, .popup_like").on("touchmove", false);

new OpenNav;

new OpenSliderImage;

new OpenLike;

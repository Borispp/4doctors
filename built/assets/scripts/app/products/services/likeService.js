var LikesService;

LikesService = (function() {
  LikesService.$injector = ['$http', '$q', '$injector', 'localStorageService'];

  function LikesService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
  }

  LikesService.prototype.getLikes = function() {
    return this.localStorageService.get('likes');
  };

  LikesService.prototype.setLikes = function(id, likes) {
    likes = likes != null ? likes : {};
    if (likes[id] === 'like_active') {
      likes[id] = 'like_empty';
    } else {
      likes[id] = 'like_active';
    }
    this.localStorageService.set('likes', likes);
    return likes;
  };

  LikesService.prototype.likesLength = function() {
    var i, j, len, likeKeys, likes, likesCount;
    likes = this.getLikes();
    if (likes) {
      likeKeys = Object.keys(likes);
      likesCount = 0;
      for (j = 0, len = likeKeys.length; j < len; j++) {
        i = likeKeys[j];
        if (likes[i] === 'like_active') {
          likesCount++;
        }
      }
    }
    return likesCount;
  };

  return LikesService;

})();

angular.module('app.likes.services').service('likesService', LikesService);

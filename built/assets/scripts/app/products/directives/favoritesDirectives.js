var FavoritesDirectives;

FavoritesDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/products/templates/favorites_list.html',
    controller: ProductsController,
    controllerAs: 'ctrl'
  };
};

angular.module('app.favorites.directives').controller('productsController', ProductsController).directive('favoritesList', FavoritesDirectives);

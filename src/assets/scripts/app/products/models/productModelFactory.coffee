class ProductModel
	constructor: (product) ->
		{ @id,
			@name,
			@articol,
			@mainImageSrc,
			@price,
			@category,
			@rusCategory,
			@allImages,
			@description,
			@composition,
			@colors,
			@sizes
		} = product

angular.module('app.products.models')
	.factory('ProductModel', () -> ProductModel)

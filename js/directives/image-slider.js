directives.directive('imageSlider', function(){
	return {
		restrict: 'A',
		replace: true,
		scope: {
			images: '=',
			projectPath: '='
		},
		templateUrl: 'partials/includes/image-slider.html',
		link: function(scope, elem, attrs){

			//reference: http://www.sitepoint.com/creating-slide-show-plugin-angularjs/

			scope.currentIndex = 1;
			
			scope.next = function(){
				scope.currentIndex < scope.images.length ? scope.currentIndex++ : scope.currentIndex = 1;
			}

			scope.prev = function(){
				scope.currentIndex > 1 ? scope.currentIndex-- : scope.currentIndex = scope.images.length;
			}

			if(scope.images.length){
				scope.imageProxy = [];

				scope.images.forEach(function(image){
					var proxyObj = {
						visible: false
					}
					scope.imageProxy.push(proxyObj);
				});

				scope.$watch('currentIndex', function(){
					scope.imageProxy.forEach(function(proxy){
						proxy.visible = false;
					});

					scope.imageProxy[scope.currentIndex-1].visible = true;
				});
			}

		}
	}
})
directives.directive('slider', function(){
	return {
		restrict: 'A',
		replace: true,
		scope: {
			images: '=',
			projectPath: '='
		},
		link: function(scope, elem, attrs){

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

		},
		templateUrl: 'partials/includes/slider.html'
	}
})
directives.directive('videoSlider', ['$sce', function($sce){
	return {
		restrict: 'A',
		replace: true,
		scope: {
			videos: '=',
		},
		templateUrl: 'partials/includes/video-slider.html',
		link: function(scope, element, attrs){
			
			angular.element(element).find('.slide').bind(function(){
				console.log(this);
				this.fitVids();
			});

			scope.currentIndex = 1;

			scope.next = function(){
				scope.currentIndex < scope.videos.length ? scope.currentIndex++ : scope.currentIndex = 1;
			}

			scope.prev = function(){
				scope.currentIndex > 1 ? scope.currentIndex-- : scope.currentIndex = scope.videos.length;
			}

			scope.makeHTMLSafe = function(code){
				if(code != ''){
					return $sce.trustAsHtml(code);
				}else{
					return null;
				}
			}

			if(typeof scope.videos != 'undefined'){
				scope.videoProxy = [];

				scope.videos.forEach(function(video){
					var proxyObj = {
						embed: $sce.trustAsHtml(video),
						visible: false
					}
					scope.videoProxy.push(proxyObj);
				});

				scope.$watch('currentIndex', function(){
					scope.videoProxy.forEach(function(proxy){
						proxy.visible = false;
					});

					scope.videoProxy[scope.currentIndex-1].visible = true;
				});
			}
		}
	}
}]);
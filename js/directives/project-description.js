directives.directive('projectDescription', ['$window', function($window){
	return{
		link: function(scope, element, attrs){
			scope.affixed = false;
			scope.offset = 0;

			angular.element($window).on('scroll', checkPosition);
			angular.element($window).on('resize', function(){
				scope.$apply(function(){
					scope.affixed = false;
				});
				checkPosition();
			});

			function checkPosition(){
				scope.$apply(function(){
					scope.offset = {width: $(element).parent().width()+'px'}
					scope.affixed = 265 <= angular.element($window).scrollTop(); //378
				});
			}
		}
	}
}]);
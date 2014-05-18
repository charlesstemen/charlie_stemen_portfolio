directives.directive('activeStatus', [function(){
	return {
		link: function(scope, element, attrs){

			scope.$on('$routeChangeStart', function(){
				element.removeClass('active');
			});

			scope.$on('FILTER_APPLIED', function(e, filter2Apply){
				if(filter2Apply == attrs.category){
					element.addClass('active');
				}
			});

		}
	}
}]);
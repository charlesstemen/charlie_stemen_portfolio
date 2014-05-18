controllers.controller('HomeCtrl', ['$scope', '$routeParams', '$location', 'ProjectService', function($scope, $routeParams, $location, ProjectService){

	$scope.filterApplied = $routeParams.category;
	if($scope.filterApplied){
		$scope.$root.$broadcast('FILTER_APPLIED', $routeParams.category);
	}

	$scope.categoryFilter = function(item){
		if($scope.filterApplied){
			var found = false;
			$.each(item.categories, function(index, category){
				if(category.slug == $routeParams.category){
					//if we've found a slug that matches change found status to reflect
					found = true;
				}
			});
			return found;
		}else{
			//if no category selected, all pass filter
			return true;
		}
	}

	$scope.clearFilters = function(){
		$location.path('/');
		$scope.$root.$broadcast('ROUTE_CHANGE_X_MENU');
	}

	if(ProjectService.isInit()){
		$scope.projects = ProjectService.getAllProjects();
	}else{
		ProjectService.initData()
			.then(function(data){
				$scope.projects = data;
			});
	}

}]);
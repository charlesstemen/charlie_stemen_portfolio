controllers.controller('HomeCtrl', ['$scope', '$routeParams', 'ProjectService', function($scope, $routeParams, ProjectService){

	$scope.categoryFilter = function(item){
		if($routeParams.category){
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

	if(ProjectService.isInit()){
		$scope.projects = ProjectService.getAllProjects();
	}else{
		ProjectService.initData()
			.then(function(data){
				$scope.projects = data;
			});
	}

}]);
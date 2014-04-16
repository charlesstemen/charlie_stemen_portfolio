controllers.controller('HomeCtrl', ['$scope', '$routeParams', 'ProjectService', function($scope, $routeParams, ProjectService){

	$scope.categoryFilter = function(item){
		if($routeParams.category){
			$.each(item.categories, function(index, category){
				if(category.slug == $routeParams.category){
					//if the slug is found return true
					return true;
				}
			});
			//if we've exited the loop without returning, then the slug hasn't been found
			return false;
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
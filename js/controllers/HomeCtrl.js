controllers.controller('HomeCtrl', ['$scope', '$routeParams', 'ProjectService', function($scope, $routeParams, ProjectService){

	$scope.categoryFilter = function(item){
		if($routeParams.category){
			if(item.categories.indexOf($routeParams.category) != -1){
				//if current category exists in item's category array - allow to pass filter
				return true;
			}else{
				//dont allow to pass
				return false;
			}
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
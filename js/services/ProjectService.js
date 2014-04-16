services.factory('ProjectService', ['$http', '$q', function($http, $q){
	var _projects = null;
	var _isInit = function(){
		if(_projects != null){
			return true;
		}else{
			return false;
		}
	};

	var _initData = function(){
		var deferred = $q.defer();

		$http({method: 'GET', url: 'projects.json'})
			.then(function(result){
				_projects = result.data;
				deferred.resolve(result.data);
			}, function(response){
				console.log(response);
				deferred.reject(response);
			});
		return deferred.promise;
	}

	var _getAllProjects = function(){
		return _projects;
	}

	var _getProjectById = function(projectId, data){
		var found = null;
		$.each(_projects, function(index, item){
			if(item.id == projectId){
				found = item;
			}
		});
		return found;
	}

	return {
		isInit: _isInit,
		initData: _initData,
		getAllProjects: _getAllProjects,
		getProjectById: _getProjectById
	}
}]);
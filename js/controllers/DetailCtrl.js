controllers.controller('DetailCtrl', ['$scope', '$sce', 'theProject', function($scope, $sce, theProject){

	$scope.project = theProject;

	$scope.makeHTMLSafe = function(code){
		if(code != ''){
			return $sce.trustAsHtml(code);
		}else{
			console.log('here');
			return null;
		}
	}

}]);
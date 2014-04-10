controllers.controller('DetailCtrl', ['$scope', '$sce', 'theProject', function($scope, $sce, theProject){

	$scope.project = theProject;

	$scope.firstSection = theProject.sections[0];

	$scope.projectDescription = $sce.trustAsHtml($scope.project.description);

}]);
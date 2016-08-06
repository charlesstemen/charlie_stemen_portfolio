controllers.controller('DashboardCtrl', ['$scope', 'ProjectFactory', function ($scope, ProjectFactory) {
  $scope.projects = ProjectFactory.getProjects();
  console.log($scope.projects);
  $scope.id = null;
}]);

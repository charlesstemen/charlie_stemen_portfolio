controllers.controller('DashboardCtrl', ['$scope', 'ProjectFactory', function ($scope, Projects) {
  $scope.projects = Projects;
}]);

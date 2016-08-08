controllers.controller('DashboardCtrl', ['$scope', 'Projects', function ($scope, Projects) {
  $scope.projects = Projects;
}]);

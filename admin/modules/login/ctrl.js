controllers.controller('LoginCtrl', ['$scope', 'CMSAuth', function ($scope, CMSAuth) {
  $scope.login = function () {
    if ($scope.form.$valid) {
      CMSAuth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password);
    }
  }
}]);

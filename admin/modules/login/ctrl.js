controllers.controller('LoginCtrl', ['$scope', '$location', 'CMSAuth', function ($scope, $location, CMSAuth) {
  var auth = new CMSAuth();

  $scope.login = function () {
    console.log('logging in');
    if ($scope.form.$valid) {
      auth.signIn($scope.user.email, $scope.user.password);
    }
  }
}]);

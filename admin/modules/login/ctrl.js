controllers.controller('LoginCtrl', ['$scope', '$location', 'CMSAuth', 'currentAuth', function ($scope, $location, CMSAuth, currentAuth) {
  console.log('here');
  if (currentAuth != null) {
    console.log('not null');
    $location.path('/dashboard');
  }

  $scope.login = function () {
    if ($scope.form.$valid) {
      CMSAuth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password)
        .then(function () {
          $location.path('/dashboard');
        });
    }
  }
}]);

services.factory('CMSAuth', ['$rootScope', '$location', '$firebaseAuth', function ($rootScope, $location, $firebaseAuth) {
  $firebaseAuth().$onAuthStateChanged(function (user) {
    if (user) {
      $rootScope.$broadcast('CMSAuth.signedIn');
    } else {
      $rootScope.$broadcast('CMSAuth.signedOut');
    }
  })

  return $firebaseAuth();
}]);

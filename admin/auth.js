services.factory('CMSAuth', ['$q', '$location', '$rootScope', function ($q, $location, $rootScope) {
  var init = $q.defer();

  function CMSAuth () {
    return this;
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('hey');
      init.resolve(user);
      $location.path('/dashboard').replace();
      $rootScope.$broadcast('auth.signedIn');
      $rootScope.$apply();
    } else {
      init.reject('auth.error');
      $location.path('/').replace();
      $rootScope.$broadcast('auth.signedOut');
      $rootScope.$apply();
    }
  });


  CMSAuth.prototype.requireAuth = function () {
    var deferred = $q.defer();

    if (init.promise.$$state.status === 0) {
      return init.promise;
    } else if (firebase.auth().currentUser) {
      deferred.resolve(firebase.auth().currentUser);
    } else {
      deferred.reject('auth.error');
    }
  }

  CMSAuth.prototype.signIn = function (email, password) {
    return $q(function (resolve, reject) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
          resolve();
        }, function (error) {
          reject(error);
        });
    });
  }

  CMSAuth.prototype.signOut = function () {
    firebase.auth().signOut();
  }

  return CMSAuth;
}]);

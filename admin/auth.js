services.factory('CMSAuth', ['$q', '$location', function ($q, $location) {
  function CMSAuth () {
    return this;
  }

  firebase.auth().onAuthStateChanged(function (user) {
    console.log('checking');
    console.log(user);
    if (user) {
      $location.path('/dashboard');
    } else {
      $location.path('/');
    }
  });


  CMSAuth.prototype.requireAuth = function () {
    return $q(function (resolve, reject) {
      if (firebase.auth().currentUser) {
        resolve(firebase.auth().currentUser);
      } else {
        reject('auth.error');
      }
    });
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

  return CMSAuth;
}]);

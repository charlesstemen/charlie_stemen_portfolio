services.factory('ProjectFactory', ['$firebaseArray', function ($firebaseArray) {
  this.ref = firebase.database().ref().child('projects');

  return $firebaseArray(this.ref);
}]);

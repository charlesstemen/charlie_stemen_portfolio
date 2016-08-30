services.factory('PageFactory', ['$firebaseArray', function ($firebaseArray) {
  this.ref = firebase.database().ref().child('pages');

  return $firebaseArray(this.ref);
}])

services.factory('UploadFactory', [function () {
  var storage = firebase.storage();
  var storageRef = storage.ref();

  var imagesRef = storageRef.child('images');

  this.uploadFile = function (path, file) {
    return imagesRef.child(path).put(file);
  }

  return this;
}]);

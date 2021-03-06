directives.directive('fileUpload', ['UploadFactory', function (UploadFactory) {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      uploadModel: '=',
      inputId: '@',
      parent: '@parentIndex',
      index: '@modelIndex'
    },
    templateUrl: 'directives/upload/index.html',
    link: function (scope, element, attrs) {
      var targetSize = 'http://placehold.it/'+ attrs.targetSize +'/3b3b3b/cccccc',
          input = element.find('input'),
          currentTask;

      scope.progress = 0;
      scope.preview = scope.uploadModel || targetSize;
      scope.uploading = false;
      scope.inputId = attrs.inputId;

      scope.uploadFile = function () {
        var file = this.files[0];

        scope.uploading = true;
        currentTask = UploadFactory.uploadFile(file.name, file);

        currentTask.on('state_changed', updateProgress, handleUploadError, handleUploadSuccess);
      }

      scope.deleteImage = function () {
        if (scope.parent) {
          scope.$emit('upload.deleteImage', parseInt(scope.parent), parseInt(scope.index));
        } else {
          scope.uploadModel = '';
          scope.preview = targetSize;
        }
      }

      function updatePreview (url) {
        if (url) {
          scope.preview = url;
          scope.uploadModel = url;
        }

        scope.$apply();
      }

      function updateProgress (snapshot) {
        scope.progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
        scope.$apply();
      }

      function handleUploadSuccess () {
        scope.uploading = false;
        updatePreview(currentTask.snapshot.downloadURL);
      }

      function handleUploadError (error) {
        console.log(error);
        scope.uploading = false;

        scope.$apply();
      }

      input.bind('change', scope.uploadFile);
    }
  }
}]);

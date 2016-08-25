directives.directive('fileUpload', ['UploadFactory', function (UploadFactory) {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      uploadModel: '='
    },
    templateUrl: 'includes/upload/index.html',
    link: function (scope, element, attrs) {
      var targetSize = 'http://placehold.it/'+ attrs.targetSize +'/3b3b3b/cccccc',
          input = element.find('input'),
          currentTask;

      scope.progress = 0;
      scope.preview = scope.uploadModel || targetSize;
      scope.uploading = false;
      scope.inputId = attrs.inputId;

      scope.uploadFile = function () {
        console.log('here');
        var file = this.files[0];

        scope.uploading = true;
        currentTask = UploadFactory.uploadFile(file.name, file);

        currentTask.on('state_changed', updateProgress, handleUploadError, handleUploadSuccess);
      }

      function updatePreview (url) {
        if (url) {
          scope.preview = url;
          scope.uploadModel = url;
        }

        scope.$apply();
      }

      function updateProgress (snapshot) {
        console.log('updating');
        console.log(snapshot);
        scope.progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
        console.log(scope.progress);
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

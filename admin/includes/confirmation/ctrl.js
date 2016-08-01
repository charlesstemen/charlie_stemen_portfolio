controllers.controller('ConfirmationModalCtrl', ['$scope', '$modalInstance', 'msg', function($scope, $modalInstance, msg) {
  $scope.msg = msg;

  $scope.ok = function() {
    $modalInstance.close();
  }

  $scope.cancel = function() {
    $modalInstance.dismiss();
  }
}])
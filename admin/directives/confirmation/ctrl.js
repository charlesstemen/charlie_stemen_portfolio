controllers.controller('ConfirmationModalCtrl', ['$scope', '$uibModalInstance', 'msg', function($scope, $uibModalInstance, msg) {
  $scope.msg = msg;

  $scope.ok = function() {
    $uibModalInstance.close();
  }

  $scope.cancel = function() {
    $uibModalInstance.dismiss();
  }
}])

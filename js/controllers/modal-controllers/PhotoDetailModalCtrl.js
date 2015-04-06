controllers.controller('PhotoDetailModalCtrl', ['$scope', '$modalInstance', 'photo', function($scope, $modalInstance, photo){
	
	$scope.photo = photo;

	$scope.closeModal = function(){
		$modalInstance.close();
	}
	
}]);
controllers.controller('AboutMeModalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance){
	
	$scope.closeModal = function(){
		$modalInstance.close();
	}
	
}])
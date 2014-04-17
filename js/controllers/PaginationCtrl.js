controllers.controller('PaginationCtrl', ['$scope', function($scope){
	console.log($scope.section);

	$scope.currPage = 1;
	$scope.itemsPerPage = 1;
	$scope.pageCount = $scope.section.assets.length;
	$scope.prevPage = function(){
		if($scope.currPage > 1){
			$scope.currPage--;
		}else{
			$scope.currPage == $scope.pageCount;
		}
	}
	$scope.nextPage = function(){
		if($scope.currPage < $scope.pageCount){
			$scope.currPage++;
		}else{
			$scope.currPage = 1;
		}
	}
}])
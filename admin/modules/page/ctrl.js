controllers.controller('PageCtrl',
  ['$scope', '$routeParams', '$timeout', '$firebaseObject', 'Pages',
  function ($scope, $routeParams, $timeout, $firebaseObject, Pages) {
    $scope.pageTitle = $routeParams.pageType;
    $scope.page = $firebaseObject(Pages.$ref().child($scope.pageTitle));
    $scope.submitText = 'Update Page';


    $scope.addSection = function () {
      if (typeof $scope.page.sections === 'undefined') {
        $scope.page.sections = [];
      }

      $scope.page.sections.push({images: [], videos: []});
    }

    $scope.addImage = function (index) {
      if (typeof $scope.page.sections[index].images === 'undefined') {
        $scope.page.sections[index].images = [];
      }

      $scope.page.sections[index].images.push({});
    }

    $scope.addVideo = function (index) {
      if (typeof $scope.page.sections[index].videos === 'undefined') {
        $scope.page.sections[index].videos = [];
      }

      $scope.page.sections[index].videos.push({});
    }

    $scope.submit = function () {
      $scope.updating = true;

      $scope.page.$save()
        .then(function () {
          $scope.success = true;

          $timeout(function () {
            $scope.success = false;
            $scope.updating = false;
          }, 2000);
        })
        .catch(function () {
          $scope.error = true;

          $timeout(function () {
            $scope.error = false;
            $scope.updating = false;
          }, 2000);
        });
    }
  }]
);

controllers.controller('ProjectCtrl',
  ['$scope', '$routeParams', '$location', '$firebaseObject', 'ProjectFactory',
  function ($scope, $routeParams, $location, $firebaseObject, Projects) {
    $scope.project = Projects.$getRecord($routeParams.fbKey);

    $scope.$watch('project', setBuffer, true);
    $scope.$watch('buffer', setBufferText, true);

    $scope.submit = function () {
      if (isNewProject()) {
        newProject();
      } else {
        updateProject();
      }
    }

    function setBuffer () {
      console.log('setting buffer');
      console.log($scope.project);
      $scope.buffer = angular.copy($scope.project);
    }

    function setBufferText () {
      console.log('buffering');
      console.log($scope.project);
      $scope.title = isNewProject() ? 'New Project' : 'Editing: ' + $scope.buffer.name;
      $scope.submitText = isNewProject() ? 'Create Project' : 'Save Project';
    }

    function isNewProject () {
      return !($scope.project && $scope.project.$id);
    }

    function newProject () {
      if ($scope.projectForm.$valid) {
        Projects.$add($scope.project)
          .then(function (ref) {
            $location.path('/project/edit/' + ref.key);
          });
      }
    }


    function updateProject () {
      Projects.$save($scope.project)
        .then(function (ref) {
          $scope.buffer = angular.copy(Projects.$getRecord(ref.key));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }]
);

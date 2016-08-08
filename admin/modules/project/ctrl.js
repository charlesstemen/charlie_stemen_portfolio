controllers.controller('ProjectCtrl',
  ['$scope', '$routeParams', '$location', 'Projects',
  function ($scope, $routeParams, $location, Projects) {
    $scope.project = Projects.$getRecord($routeParams.fbKey);

    $scope.$watch('project', init);
    $scope.$watch('buffer', setBufferText, true);

    $scope.submit = function () {
      if (isNewProject()) {
        newProject();
      } else {
        updateProject();
      }
    }

    function init (){
      setBuffer();
      $scope.isNewProject();
    }

    function setBuffer () {
      $scope.buffer = angular.copy($scope.project);
    }

    function setBufferText () {
      $scope.title = $scope.isNewProject() ? 'New Project' : 'Editing Project: ' + $scope.buffer.title;
      $scope.submitText = $scope.isNewProject() ? 'Create Project' : 'Save Project';
    }

    $scope.isNewProject = function () {
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

controllers.controller('ProjectCtrl',
  ['$scope', '$routeParams', '$location', '$uibModal', 'Projects',
  function ($scope, $routeParams, $location, $uibModal, Projects) {
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

    $scope.deleteProject = function () {
      var modalInstance = $uibModal.open ({
        animation: true,
        templateUrl: 'includes/confirmation/index.html',
        controller: 'ConfirmationModalCtrl',
        resolve: {
          msg: function () {
            return 'Are you sure you want to delete the project: "' + $scope.project.title + '"?';
          }
        }
      });

      modalInstance.result.then(function () {
        Projects.$remove($scope.project).then(function () {
          //clean category refs
          $location.path('/dashboard');
        });
      });
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

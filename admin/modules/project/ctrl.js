controllers.controller('ProjectCtrl',
  ['$scope', '$routeParams', '$location', '$uibModal', '$timeout', 'Projects',
  function ($scope, $routeParams, $location, $uibModal, $timeout, Projects) {
    $scope.project = Projects.$getRecord($routeParams.fbKey);

    $scope.$watch('project', setBuffer);
    $scope.$watch('buffer', setBufferText, true);

    $scope.submit = function () {
      if ($scope.isNewProject()) {
        newProject();
      } else {
        updateProject();
      }
    }

    $scope.addSection = function () {
      if (typeof $scope.project.sections === 'undefined') {
        $scope.project.sections = [];
      }

      $scope.project.sections.push({images: [], videos: []});
    }

    $scope.deleteProject = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'directives/confirmation/index.html',
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

    $scope.deleteSection = function (index) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'directives/confirmation/index.html',
        controller: 'ConfirmationModalCtrl',
        resolve: {
          msg: function () {
            return 'Are you sure you want to delete the section: "' + $scope.project.sections[index].title + '"?'
          }
        }
      });

      modalInstance.result.then(function () {
        $scope.project.sections.splice(index, 1);
      });
    }

    $scope.addImage = function (index) {
      console.log('yo');
      if (typeof $scope.project.sections[index].images === 'undefined') {
        $scope.project.sections[index].images = [];
      }

      $scope.project.sections[index].images.push({});
    }

    $scope.addVideo = function (index) {
      if (typeof $scope.project.sections[index].videos === 'undefined') {
        $scope.project.sections[index].videos = [];
      }

      $scope.project.sections[index].videos.push({});
    }

    function setBuffer () {
      if (!$scope.project) {
        $scope.project = {};
      }

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
      $scope.updating = true;

      Projects.$save($scope.project)
        .then(function (ref) {
          $scope.buffer = angular.copy(Projects.$getRecord(ref.key));
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

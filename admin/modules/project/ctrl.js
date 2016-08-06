controllers.controller('ProjectCtrl',
  ['$scope', '$routeParams', '$location', 'ProjectFactory',
  function ($scope, $routeParams, $location, ProjectFactory) {
    $scope.projectKey = 'fbKey' in $routeParams ? $routeParams.fbKey : null;
    $scope.project = $scope.projectKey ? firebase.database().ref('/projects/' + $scope.projectKey) : null;
    $scope.title = $scope.project ? 'Editing: ' + $scope.project.title : 'New Project';
    $scope.submitText = $scope.project ? 'Save Project' : 'Create Project';
    var projects = firebase.database().ref('/projects');

    projects.end.on('child_added', routeToNewProject);
    projects.on('child_changed', updateProject);

    $scope.submit = function () {
      console.log($scope.project);
      var project = $scope.project;

      if ($scope.projectKey) {
        updateProject(project);
      } else {
        newProject(project);
      }
    }

    function newProject (project) {
      ProjectFactory.newProject(project)
        .then(function (results) {
          console.log('promise');
          console.log(results);
          if (results.committed === true) {

          } else {
            console.log('no spaghetti');
            $scope.$root.$broadcast('form.message', {
              type: 'danger',
              msg: 'Submit Error: Check that you\'ve filled all fields correctly'
            });
          }
        });
    }

    function routeToNewProject (snapshot) {
      $location.path('/project/id/' + snapshot.key());
    }



    function updateProject (project) {

    }
  }]
);

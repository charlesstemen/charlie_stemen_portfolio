var app = angular.module('cms', ['ngRoute', 'firebase', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$location', function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
    if (error === 'AUTH_REQUIRED') {
      $location.path('/');
    }
  });

  $rootScope.$on('CMSAuth.signedIn', function () {
    console.log('here');
    $location.path('/dashboard');
  });

  $rootScope.$on('CMSAuth.signedOut', function () {
    $location.path('/');
  });
}]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'modules/login/index.html',
      controller: 'LoginCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'modules/dashboard/index.html',
      controller: 'DashboardCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return CMSAuth.$requireSignIn();
        }]
      }
    })
    .when('/project/new', {
      templateUrl: 'modules/project/index.html',
      controller: 'ProjectCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return CMSAuth.$requireSignIn();
        }]
      }
    })
    .when('/project/id/:fbKey', {
      templateUrl: 'modules/project/index.html',
      controller: 'ProjectCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return CMSAuth.$requireSignIn();
        }]
      }
    })
}])

var app = angular.module('cms', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'firebase', 'ngAnalytics', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$location', 'ngAnalyticsService', function ($rootScope, $location, ngAnalyticsService) {
  $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
    if (error === 'AUTH_REQUIRED') {
      $location.path('/');
    }
  });

  $rootScope.$on('CMSAuth.signedOut', function () {
    $location.path('/');
  });

  //client secret: ukX_AL2b4U4U6Ze_pkSLr5l0
  //ngAnalyticsService.setClientId('940987655008-86t8qsvud3k5i8mgaqqs4fsg0ur16uth.apps.googleusercontent.com');
}]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'modules/login/index.html',
      controller: 'LoginCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return CMSAuth.$waitForSignIn();
        }]
      }
    })
    .when('/dashboard', {
      templateUrl: 'modules/dashboard/index.html',
      controller: 'DashboardCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return CMSAuth.$requireSignIn();
        }],
        'Projects': ['ProjectFactory', function (ProjectFactory) {
          return ProjectFactory.$loaded();
        }]
      }
    })
    .when('/analytics', {
      templateUrl: 'modules/analytics/index.html',
      controller: 'AnalyticsCtrl',
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
        }],
        'Projects': ['ProjectFactory', function (ProjectFactory) {
          return ProjectFactory.$loaded();
        }]
      }
    })
    .when('/project/edit/:fbKey', {
      templateUrl: 'modules/project/index.html',
      controller: 'ProjectCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return CMSAuth.$requireSignIn();
        }],
        'Projects': ['ProjectFactory', function (ProjectFactory) {
          return ProjectFactory.$loaded();
        }]
      }
    })
    .when('/page/edit/:pageType', {
      templateUrl: 'modules/page/index.html',
      controller: 'PageCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return CMSAuth.$requireSignIn();
        }],
        'Pages': ['PageFactory', function (PageFactory) {
          return PageFactory.$loaded();
        }]
      }
    })
}])

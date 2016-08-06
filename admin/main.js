var app = angular.module('cms', ['ngRoute', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$location', function ($rootScope, $location) {
  var config = {
    apiKey: "AIzaSyBxlCx6dzFgqnjAVKJ1mi2BTtCm26Fv-Dc",
    authDomain: "charlie-stemen-portfolio.firebaseapp.com",
    databaseURL: "https://charlie-stemen-portfolio.firebaseio.com",
    storageBucket: "charlie-stemen-portfolio.appspot.com",
  };

  firebase.initializeApp(config);

  $rootScope.signedIn = firebase.auth().currentUser ? true : false;

  $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
    console.log(error);
    if (error = 'auth.error') {
      $location.path('/');
    }
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
          return new CMSAuth().requireAuth();
        }]
      }
    })
    .when('/project/new', {
      templateUrl: 'modules/project/index.html',
      controller: 'ProjectCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return new CMSAuth().requireAuth();
        }]
      }
    })
    .when('/project/id/:fbKey', {
      templateUrl: 'modules/project/index.html',
      controller: 'ProjectCtrl',
      resolve: {
        'currentAuth': ['CMSAuth', function (CMSAuth) {
          return new CMSAuth().requireAuth();
        }]
      }
    })
}])

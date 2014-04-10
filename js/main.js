var app = angular.module('portfolio', ['ngRoute', 'app.controllers']);

var controllers = angular.module('app.controllers', []);
// var services = angular.module('app.services', []);
// var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$route', function($rootScope, $route){
	$rootScope.pageTitle = 'Home | Charles Stemen';

	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.pageTitle = $route.current.pageTitle + ' | Charles Stemen';
	})
}]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/layout/home.html',
		controller: 'HomeCtrl',
		pageTitle: 'Home'
	})
	.when('/show/:category', {
		templateUrl: 'partials/layout/home.html',
		controller: 'HomeCtrl',
		pageTitle: ':category'
	})
	.when('/id/:projectId', {
		templateUrl: 'partials/layout/detail.html',
		controller: 'DetailCtrl',
		pageTitle: ':projectId'
	})
	.when('/error', {
		templateUrl: 'partials/layout/error.html',
		controller: 'ErrorCtrl',
		pageTitle: 'Oh No!'
	})
	.otherwise({
		redirectTo: '/error'
	});
}]);
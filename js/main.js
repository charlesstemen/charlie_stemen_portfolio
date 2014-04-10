var app = angular.module('groceryList', ['ngRoute', 'app.controllers']);

var controllers = angular.module('app.controllers', []);
// var services = angular.module('app.services', []);
// var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$route', function($rootScope, $route){
	$rootScope.pageTitle = 'Home | Grocery List';

	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.pageTitle = $route.current.pageTitle + ' | Grocery List';
	})
}]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/layout/home.html',
		controller: 'HomeCtrl',
		pageTitle: 'Home'
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
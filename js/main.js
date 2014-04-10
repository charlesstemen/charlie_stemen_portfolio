var app = angular.module('portfolio', ['ngRoute', 'ui.bootstrap', 'app.controllers', 'app.services']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
// var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$route', function($rootScope, $route){
	$rootScope.pageTitle = 'Home | Charles Stemen';
	$rootScope.mobileMenuCollapsed = true;

	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.mobileMenuCollapsed = true;
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
	.when('/project/:projectId', {
		templateUrl: 'partials/layout/detail.html',
		controller: 'DetailCtrl',
		pageTitle: ':projectId',
		resolve: {
			theProject: ['$route', '$q', 'ProjectService', function($route, $q, ProjectService){
				var deferred = $q.defer(),
						project = ProjectService.getProjectById($route.current.params.projectId);
				if(project != null){
					deferred.resolve(project);
				}else{
					deferred.reject(null)
				}
				return deferred.promise;
			}]
		}
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

controllers.controller('MainCtrl', ['$scope', function($scope){

	$scope.toggleCollapse = function(){
		$scope.$root.mobileMenuCollapsed = !$scope.$root.mobileMenuCollapsed;
	}

	$scope.closeMenu = function(){
		$scope.$root.mobileMenuCollapsed = true;
	}
}]);

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});
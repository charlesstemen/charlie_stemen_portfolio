var app = angular.module('portfolio', ['ngRoute', 'ui.bootstrap', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', []);
var directives = angular.module('app.directives', []);

app.run(['$rootScope', '$route', function($rootScope, $route){
	$rootScope.pageTitle = 'Home | Charles Stemen';
	$rootScope.mobileMenuCollapsed = true;

	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.mobileMenuCollapsed = true;
		$rootScope.pageTitle = $route.current.pageTitle + ' | Charles Stemen';
	});
	
	$rootScope.$on('$viewContentLoaded', function(){
		setTimeout(function(){
			$('.slide').fitVids();
			// $('.affix-container').affix({
			// 	top: 364
			// });
			$('.affix-container').css({
				width: function(){
					return $(this).parent().width()+'px';
				}
			});
			$(window).on('resize', function(){
				$('.affix-container').css({
					width: function(){
						return $(this).parent().width()+'px';
					}
				});
			});
		}, 200);
  });
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
				var deferred = $q.defer();
				if(ProjectService.isInit()){
					var project = ProjectService.getProjectById($route.current.params.projectId);
					if(project != null){
						deferred.resolve(project);
					}else{
						deferred.reject(null)
					}
				}else{
					ProjectService.initData()
						.then(function(data){
							var project = ProjectService.getProjectById($route.current.params.projectId);
							if(project != null){
								deferred.resolve(project);
							}else{
								deferred.reject(null)
							}
						}, function(response){
							deferred.reject(null);
						})
				}
				return deferred.promise;
			}]
		}
	})
	.when('/contact', {
		templateUrl: 'partials/layout/contact.html',
		controller: 'ErrorCtrl',
		pageTitle: 'Contact'
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

controllers.controller('MainCtrl', ['$scope', '$location', '$modal', function($scope, $location, $modal){

	$scope.launchVideo = function(){
		var modalInstance = $modal.open({
			templateUrl: 'partials/modals/aboutMeModal.html',
			controller: 'AboutMeModalCtrl'
		});
	}

	$scope.toggleCollapse = function(){
		$scope.$root.mobileMenuCollapsed = !$scope.$root.mobileMenuCollapsed;
	}

	$scope.closeMenu = function(){
		$scope.$root.mobileMenuCollapsed = true;
	}

	$scope.clearFilters = function(){
		$location.path('/');
		$scope.$root.$broadcast('ROUTE_CHANGE_X_MENU');
	}
}]);

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});
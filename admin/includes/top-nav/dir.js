directives.directive('topNav', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'includes/top-nav/index.html',
    link: function(scope, element, attrs) {
      scope.$on('auth.signedIn', function () {
        element.addClass('in');
      });

      scope.$on('auth.signedOut', function () {
        element.removeClass('in');
      });
    }
  }
}]);

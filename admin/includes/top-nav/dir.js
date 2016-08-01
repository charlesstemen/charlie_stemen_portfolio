directives.directive('topNav', ['CMSAuth', function (CMSAuth) {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'includes/top-nav/index.html',
    link: function(scope, element, attrs) {
      var auth = new CMSAuth();

      scope.$on('auth.signedIn', function () {
        element.addClass('in');
      });

      scope.$on('auth.signedOut', function () {
        element.removeClass('in');
      });

      scope.signOut = function () {
        console.log('signing out');
        auth.signOut();
      }
    }
  }
}]);

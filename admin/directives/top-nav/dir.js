directives.directive('topNav', ['CMSAuth', function (CMSAuth) {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'directives/top-nav/index.html',
    link: function(scope, element) {
      scope.$on('CMSAuth.signedIn', function () {
        element.addClass('in');
      });

      scope.$on('CMSAuth.signedOut', function () {
        element.removeClass('in');
      });

      scope.signOut = function () {
        CMSAuth.$signOut();
      }
    }
  }
}]);

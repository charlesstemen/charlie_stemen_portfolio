directives.directive('formMessage', [function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'includes/form-message/index.html',
    link: function(scope, element, attrs) {
      scope.alerts = [];

      scope.$on('form.message', function(e, msgObj) {
        scope.alerts.push(msgObj);
      });

      scope.closeAlert = function(index) {
        scope.alerts.splice(index, 1);
      }
    }
  }
}]);
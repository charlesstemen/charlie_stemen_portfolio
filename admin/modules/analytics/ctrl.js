controllers.controller('AnalyticsCtrl', ['$scope', function ($scope) {
  $scope.weeklyChart = {
    reportType: 'ga',
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:date',
      'start-date': '7daysAgo',
      'end-date': 'today'
    },
    chart: {
      container: 'weekly-chart',
      type: 'LINE',
      options: {
        width: '100%'
      }
    }
  }

  $scope.yearlyChart = {
    reportType: 'ga',
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:date',
      'start-date': '365daysAgo',
      'end-date': 'today'
    },
    chart: {
      container: 'yearly-chart',
      type: 'LINE',
      options: {
        width: '100%'
      }
    }
  }
}])

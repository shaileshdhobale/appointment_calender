
var app = angular.module('phonecatApp', ['ngRoute', 'ui.bootstrap.datetimepicker']);

app.config(['$locationProvider' ,'$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'views/calender.html', 
    })
    .otherwise('/', {
        templateUrl : "views/calender.html"
    });
  }]
);
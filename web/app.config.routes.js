
var app = angular.module('phonecatApp', ['ngRoute', 'ui.bootstrap.datetimepicker']);

app.config(['$locationProvider' ,'$routeProvider',
  function($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');
    $routeProvider.
    when('/addAppointment', {
      templateUrl: 'views/addAppointment.html', 
      controller: 'addAppointmentController' 
    }).
    when('/phone', {
    	templateUrl: 'views/phone-list.html',
    	controller: 'PhoneController'
    }).
    when('/phone/:phoneId', {
      templateUrl: 'views/phone-details.html',
      controller: 'PhoneDetailsController'
    }).
    when('/', {
      templateUrl: 'views/calender.html', 
      // controller: 'LoginController' 
    });
  }]
);
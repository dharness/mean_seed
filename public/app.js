 var myapp = angular.module('myapp', ['ngRoute']);

 // configure our routes
 myapp.config(function($routeProvider) {
     $routeProvider
     // home page
     .when('/', {
         templateUrl: 'pages/index.html',
         controller: 'mainController'
     })


 });
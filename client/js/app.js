var app = angular.module("moveApp",[ngRoute]);
app.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when('/movies',{
    templateUrl:"templates/movies/index.html",
    controller: "MoviesController"
  })
  .otherwise({redirectTo:'/movies'});
  $locationProvider.html5Mode(true);
});
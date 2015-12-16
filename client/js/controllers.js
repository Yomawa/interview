app.controller("MovieController", function($scope, $location,$http){
  $scope.sreach={
  $scope.message = "Search";

  $scope.movieSearch = function(title){
    $http.get(http:'//www.omdbapi.com/?'+title)
    .then(function(res){

      $scope.moveies.res.movieSearch;
    });
  
  
});
var appname = angular.module('appname', []);
appname.controller('appCtrl', ['$scope',
  function($scope) {
   $scope.header = "header.html"; 
   $scope.app = {
      default : "default.html",
      resume : "resume.html"
    }
    $scope.visible = 'default';
    
    $scope.change = function(view) {
      $scope.visible = view;
      $('.navbar-toggler').click();
    }
}]);

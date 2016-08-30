var app = angular.module('devggApp', ['ngRoute', 'ngResource']);

app.controller('socialMediaController',function($scope, $http){
    $scope.accounts = {};
    $http.get("client/json/social-media.json").then(function(res) {
         $scope.accounts = res.data;
    });
//    console.log($scope.accounts);
});

app.controller('menuController',function($scope, $http){
    $scope.menu = {};
});

/*
app.controller('socialMediaController',function(socialAccountService, $scope, $rootScope){
	$scope.accounts = socialAccountService.query();
    console.log($scope.accounts);
//    $scope.accounts = ["twitter","facebook","instagram","youtube"];
});
*/




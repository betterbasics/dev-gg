var app = angular.module('devggApp', ['ngRoute', 'ngResource', 'ui.router', 'angular-loading-bar', 'angularUtils.directives.dirPagination']);

app.config(['$stateProvider','$urlRouterProvider','$locationProvider',
	function ($stateProvider,$urlRouterProvider,$locationProvider) {
//app.config(['$stateProvider','$urlRouterProvider',
//	function ($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "templates/main.html"
			})
			.state('Products', {
				url: "/products",
				templateUrl: "templates/products.html"
			})
			.state('Brands', {
				url: "/brands",
				templateUrl: "templates/brands.html"
			})
			.state('Promise', {
				url: "/promise",
				templateUrl: "templates/promise.html"
			})
			.state('Support', {
				url: "/help",
				templateUrl: "templates/support.html"
			})
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
	}
]);

app.controller('socialMediaController',function($scope, $http){
    $scope.accounts = {};
    $http.get("client/json/social-media.json").then(function(res) {
         $scope.accounts = res.data;
    });
//    console.log($scope.accounts);
});

app.controller('menuController',function($scope, $http, $location){
    $scope.navmenu = {};
    $http.get("client/json/nav-menu.json").then(function(res) {
         $scope.navmenu = res.data;
    });
//    $scope.baseurl = $location.absUrl();
//    console.log($scope.baseurl);
});

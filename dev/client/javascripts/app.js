var app = angular.module('devggApp', ['ngRoute', 'ngResource', 'ui.router', 'angular-loading-bar', 'angularUtils.directives.dirPagination']);

app.config(['$stateProvider','$urlRouterProvider',
	function ($stateProvider,$urlRouterProvider) {
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
	}
]);


//app.config(function($routeProvider){
//	$routeProvider
//		//homepage
//		.when('/dev', {
//			templateUrl: 'templates/main.html',
//		})
//		//products
//		.when('/dev/abc', {
//			templateUrl: 'templates/products',
//		});
//});

//app.config(['$stateProvider','$urlRouterProvider',
//	function ($stateProvider,$urlRouterProvider) {
//		$urlRouterProvider.otherwise('/home');
//		$stateProvider
//			.state('home', {
//				url: "/home",
//				templateUrl: "templates/home.html"
//			})
//			.state('Products', {
//				url: "/product",
//				templateUrl: "templates/products.html"
//			})
//			.state('Editbook', {
//				url: "/editbook",
//				templateUrl: "templates/editbook.html"
//			})
//	}
//]);

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

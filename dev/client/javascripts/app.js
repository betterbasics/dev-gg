var app = angular.module('devggApp', ['ngRoute', 'ngResource', 'ui.router', 'angular-loading-bar', 'angularUtils.directives.dirPagination']);

app.config(['$stateProvider','$urlRouterProvider','$locationProvider',
	function ($stateProvider,$urlRouterProvider,$locationProvider) {
//app.config(['$stateProvider','$urlRouterProvider',
//	function ($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('Home', {
				url: "/",
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

app.directive('testTemp', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/test-temp.html'
    }
});

app.directive('homePage', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/home-page.html'
    }
});

app.directive('variationTile', function(){
   return{
        restrict: 'E',
        templateUrl: 'templates/variation-tile.html',
        scope: {
            variation: "="
        },
        replace: !0,
        link: function(e, t) {
            var r, n;
            return (null != (r = e.variation) && null != (n = r.brand) ? n.name : void 0) ? t.addClass("brand-" + e.variation.brand.name, "brandOverride") : void 0
        }
   }
});

app.directive("backImg", function() {
    return {
        restrict: "E",
        scope: {
            ngSrc: "=",
            cover: "=?"
        },
        link: function(e, t) {
            var r;
            return t.css({
                    opacity: 0,
                    transition: "opacity 400ms"
                }), r = function() {
                    return t.css({
                            opacity: ""
                        }), setTimeout(function() {
                            return t.css({
                                transition: ""
                            })
                        }, 400)
                }, e.$watch("ngSrc", function(n) {
                    var o;
                    return n ? (t.css({
                        "background-image": "url('" + n + "')"
                        }), t.addClass("backImg"), o = new Image, o.src = e.ngSrc, o.complete ? r() : o.addEventListener("load", r)) : void 0
                }), e.$watch("cover", function(e) {
                    return t.css({
                        "background-size": e ? "cover" : "contain"
                    })
                })
        }
    }
});

app.directive('brandSlider', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/brand-slider.html'
    }
});

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

app.controller('featuredVariationsController',function($scope, $http){
    $scope.featuredVariations = {};
    $http.get("client/json/featured-variations.json").then(function(res) {
         $scope.featuredVariations = res.data;
    });
});


/*
app.directive("brandSlider", ["Brand", "$location", "$rootScope", function(e) {
    return {
        templateUrl: "templates/brand-slider.html",
        restrict: "E",
        scope: {
            brand: "="
        },
        replace: !0,
        link: function(t) {
            return t.brands = e.query(function() {
                var e, r, n, o, a;
                for (o = t.brands, a = [], r = 0, n = o.length; n > r; r++) e = o[r], a.push(e.slug = slug(e.name.toLowerCase()));
                return a
            }), setInterval(function() {
                return t.posLeft = $(".innerWrapper").scrollLeft(), t.posRight = $(".innerWrapper").outerWidth(!0), t.tileSize = $(".brandTile").outerWidth(!0)
            }, 100), t.checkPos = function() {
                return setTimeout(function() {
                    return t.posLeft - 10 <= 0 ? $(".leftArrow").addClass("disabled") : $(".leftArrow").removeClass("disabled"), t.posLeft + t.tileSize + 10 >= t.posRight ? $(".rightArrow").addClass("disabled") : $(".rightArrow").removeClass("disabled")
                }, 0)
            }, $(".leftArrow").click(function() {
                return 0 !== t.posLeft ? (t.posLeft -= t.tileSize, $(".innerWrapper").animate({
                    scrollLeft: "-=" + t.tileSize
                }, 800, t.checkPos)) : console.log("left arrow is disabled")
            }), $(".rightArrow").click(function() {
                return t.posLeft <= t.posRight ? (t.posLeft += t.tileSize, $(".innerWrapper").animate({
                    scrollLeft: "+=" + t.tileSize
                }, 800, t.checkPos)) : console.log("right arrow is disabled")
            }), $(window).on("resize", function() {
                return $(".innerWrapper").animate({
                    scrollLeft: "=0"
                }, 800, t.checkPos)
            })
        }
    }
}])
*/

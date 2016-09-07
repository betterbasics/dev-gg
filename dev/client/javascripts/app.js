var app = angular.module('devggApp', ['ngRoute', 'ngResource', 'ui.router', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ngSanitize', 'slugifier', 'angular-bind-html-compile']);

//, 'ui.utils', 'util', 'filters', 'angular-bind-html-compile', 'brands'
//'variations', 'charities', 'reviewTeam', 'brands', 'blogPosts', 'products', 'customers', 'careers', 'ipCookie', 'duScroll', 'angular-amazon-login', 'angular-parallax',

app.config(['$stateProvider','$urlRouterProvider','$locationProvider',
	function ($stateProvider,$urlRouterProvider,$locationProvider) {
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
			.state('Brand', {
				url: "/:brand",
				templateUrl: "templates/brand.html"
			})
        //use the HTML5 History API
        $locationProvider.html5Mode(true);
	}
]);


app.directive('testTemp', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/test-temp.html'
    }
});

app.directive('theHeader', function(){
    return{
        restrict: 'EA',
        templateUrl: 'templates/the-header.html',
        replace: !0,
        link: function(scope, element) {
            document.addEventListener("scroll",function (event) {
                var body = document.body.scrollTop;
                //console.log(body);
                if (body > 36){
                    element.addClass("ui-scrollfix");
                } else{
                    element.removeClass("ui-scrollfix");
                }
            });
            return setTimeout(function() {
                return element.addClass("transitionActive")
            }, 0)
        }
    }
});

app.directive('homePage', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/home-page.html',
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
            return (null != (r = e.variation) && null != (n = r.brand) ? n.name : void 0) ? t.addClass("brand-" + slug(e.variation.brand.name.toLowerCase()), "brandOverride") : void 0
        }
   }
});

app.directive('brandTile', function(){
   return{
        restrict: 'E',
        templateUrl: 'templates/brand-tile.html',
        scope: {
            brand: "="
        },
        replace: !0,
        link: function(e) {
            return e.iconClass = "icon-" + slug(e.brand.name.toLowerCase()), e.brandClass = "brand-" + slug(e.brand.name.toLowerCase())
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
        templateUrl: 'templates/brand-slider.html',
        replace: !0,
        link: function(t) {
            return setInterval(function() {
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
});

app.directive('brandsPage', ["$routeParams", "$location", "Brand", function(e, t, r){
    return{
        restrict: 'E',
        templateUrl: 'templates/brands-page.html',
        replace: !0,
        link: function(e) {
            return e.brands = r.query({
                scope: "name shortDescription image hidden"
            }, function() {
                var t, r, n, o, a;
                for (o = e.brands, a = [], r = 0, n = o.length; n > r; r++) t = o[r], t.slug = slug(t.name.toLowerCase()), t.iconClass = "icon-" + slug(t.name.toLowerCase()), a.push(t.brandClass = "brand-" + slug(t.name.toLowerCase()));
                return a
            })
        }
    }
}]);

app.directive('brandPage', ["$routeParams", "Brand", "$sce", "$location", function(e, t, r, n) {
    return{
        restrict: 'E',
        templateUrl: 'templates/brand-page.html',
        controller: 'brandController',
        replace: !0,
        /*
        link: function(o) {


            o.brands = t.query({
                populate: "charity"
            }, function() {
                //n.path("/dev/");
                console.log(n.path());
                var t, a, i, u, s, l, c;
                for (i = null, l = o.brands, a = u = 0, s = l.length; s > u; a = ++u) t = l[a], t.slug = slug(t.name.toLowerCase()), t.description = r.trustAsHtml(null != (c = t.description) ? c : ""), e.brand === t.slug && (i = a, _.assign(o.brand, t), o.brand.iconClass = "icon-" + t.slug);

                //console.log(o.brands.splice(i, 1), o.brands.splice(3));
                //console.log(o.brands);

                //return o.brands.splice(i, 1), o.brands.splice(3), null == i ? n.path("/").search("fsfsdferror", "1") : void 0
                //return void 0
            }), o.brand = {
                $promise: o.brands.$promise
            },  //console.log(o.brand);
                o.displayVideo = function() {
                var e;
                return e = o.$watch("videoPlayer.playVideo", function(t) {
                    return t ? (o.videoDisplay = !0, o.videoPlayer.playVideo(), e()) : void 0
                })
            }, o.$on("youtube.player.buffering", function() {
                return o.posterWasClicked = !0
            }), o.$on("youtube.player.playing", function() {
                return o.posterWasClicked = !0
            }), o.thisIsMattsFault = function() {
                return $("body").animate({
                    scrollTop: $(window).height() - 64
                }, 800)
            }
            //console.log(o.brands);
        }
        */
    }
}]);

app.controller('brandController',function($scope, $http){
    $scope.brand = {slug: "test-onlyou"}
});


app.factory("Brand", ["$resource", function(e) {
    return e("server/api/brands/:_id", {
        _id: "@_id"
    })
}]);

app.controller('socialMediaController',function($scope, $http){
    $scope.accounts = {};
    $http.get("client/json/social-media.json").then(function(res) {
        $scope.accounts = res.data;
    });
    //console.log($scope.accounts);
});

app.controller('menuController',function($scope, $http, $location){
    $scope.navmenu = {};
    $http.get("client/json/nav-menu.json").then(function(res) {
        $scope.navmenu = res.data;
    });
    //$scope.baseurl = $location.absUrl();
    //console.log($scope.baseurl);
    //console.log($location.path());
    $scope.isActive = function(destination){
        return destination === $location.path();
    }
});

app.controller('featuredVariationsController',function($scope, $http){
    $scope.featuredVariations = {};
    $http.get("client/json/featured-variations.json").then(function(res) {
        $scope.featuredVariations = res.data;
        for (x in $scope.featuredVariations)
            $scope.featuredVariations[x].slug = slug($scope.featuredVariations[x].name.toLowerCase());
    });
});

app.controller('brandsController',function($scope, $http){
    $scope.brands = {};
    $http.get("client/json/brands.json").then(function(res) {
        $scope.brands = res.data;
        //console.log($scope.brands);
        for (x in $scope.brands)
            $scope.brands[x].slug = slug($scope.brands[x].name.toLowerCase());
        //console.log($scope.brands);
    });
});

app.filter("titlecase", function() {
    return function(e) {
        var t, r;
        return null == e && (e = ""), r = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i, e = e.toLowerCase(), t = function(e, t) {
            return t === !0 && r.test(e) ? e : e[0] ? e[0].toUpperCase() + e.slice(1).toLowerCase() : ""
        }, e.toLowerCase().split(" ").map(t).join(" ")
    }
});

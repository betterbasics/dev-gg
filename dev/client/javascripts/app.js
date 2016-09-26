var app = angular.module('devggApp', ['ngRoute', 'ngResource', 'ui.router', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ngSanitize', 'slugifier', 'angular-bind-html-compile', 'youtube-embed', 'ngTouch', 'ui.bootstrap']);

//app.config(["$routeProvider", "$locationProvider", "$httpProvider", function(e, t, r) {
//        return e.when = _.wrap(e.when, function(e, t, r) {
//            return _.defaults(r, {
//                caseInsensitiveMatch: !0
//            }), e(t, r)
//        }), e.otherwise({
//            redirectTo: "/"
//        })
//}]);

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
				templateUrl: "templates/help.html"
			})
			.state('Careers', {
				url: "/careers",
				templateUrl: "templates/careers.html"
			})
			.state('Career', {
				url: "/careers/{id}",
				templateUrl: "templates/career.html"
			})
			.state('Admin', {
				url: "/admin",
				templateUrl: "templates/admin.html"
			})
			.state('Brand', {
				url: "/{brand}",
				templateUrl: "templates/brand.html"
			})
			.state('Brand Products', {
				url: "/{brand}/products",
				templateUrl: "templates/products.html"
			})
			.state('Brand Product', {
				url: "/{brand}/product/{sku}/{slug}",
				templateUrl: "templates/product.html"
			})
			.state('Brand Help', {
				url: "/{brand}/help",
				templateUrl: "templates/help.html"
			})
        //use the HTML5 History API
        $locationProvider.html5Mode(true);
	}
]);


/**/
app.run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
    $rootScope.$on("$locationChangeSuccess", function() {
        //console.log("AnchorScroll");
        $anchorScroll();
        //window.scrollTo(500, 0);
        $('html, body').animate({ scrollTop: -10000 }, 100);
    });
}]);
/**/
/**
app.run(["$rootScope", "$location", "$route", "ipCookie", function(e, t, r, n) {
    var o, a, i, u, s;
    return i = t.path, a = 0, e.$on("$locationChangeStart", function() {
        return a = document.body.scrollTop || document.documentElement.scrollTop
    }), t.path = function(n, o) {
        var u, s;
        return o === !1 ? (u = r.current, s = e.$on("$locationChangeSuccess", function() {
            return r.current.$$route = u.$$route, s()
        }), i.apply(t, [n]).replace()) : (s = e.$on("$locationChangeSuccess", function() {
            return setTimeout(function() {
                return document.body.scrollTop = document.documentElement.scrollTop = a > 36 ? 37 : 0
            }, 0), s()
        }), i.apply(t, [n]))
    }, e.$on("$locationChangeSuccess", function() {
        return t.path() !== t.path().toLowerCase() ? t.path(t.path().toLowerCase(), !1) : void 0
    })
}]);
/**/

app.run(["$uibModal", function(e) {
    var t;
    return t = e.open, e.open = function(e) {
        var r, n;
        return n = e.controller, r = null, e.controller = ["$scope", "$injector", function(e, t) {
            "ngInject";
            return t.invoke(n, r, {
                $scope: e
            }), setTimeout(function() {
                return $(".modal-backdrop").on("click", function() {
                    return e.$apply(function() {
                        return r.dismiss()
                    })
                })
            }, 0)
        }], r = t(e)
    }
}]);


app.directive('testTemp', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/test-temp.html'
    }
});

app.directive('theHeader', ["$location", "$rootScope", "Brand", function(e, r, n) {
    return{
        templateUrl: 'templates/the-header.html',
        restrict: 'EA',
        replace: !0,
        link: function(a, i) {
            /**
            //link: function(scope, element) {
            document.addEventListener("scroll",function (event) {
                var body = document.body.scrollTop;
                //console.log(body);
                if (body > 36){
                    i.addClass("ui-scrollfix");
                } else{
                    i.removeClass("ui-scrollfix");
                }
            });
            return setTimeout(function() {
                return i.addClass("transitionActive")
            }, 0)
            /**/
            var u, s, l, c;
            //console.log(s);
            return document.addEventListener("scroll",function (event) {
                var body = document.body.scrollTop;
                //console.log(body);
                if (body > 36){
                    i.addClass("ui-scrollfix");
                } else{
                    i.removeClass("ui-scrollfix");

                }
            }), setTimeout(function() {
                return i.addClass("transitionActive")
            }, 0), s = $("#links-wrapper a"), l = {
                "/[^/]*/product.*/getting-started": "#help",
                "/brands": "#brands",
                "/[^/]*/product.*": "#products",
                "/products": "#products",
                "/promise": "#promise",
                "/help": "#help",
                "/blog": "#blog"
            }, u = n.query({
                scope: "name"
            }, function() {
                var t, n, o, a;
                for (o = 0, a = u.length; a > o; o++) n = u[o], n.slug = slug(n.name.toLowerCase()), l["/" + n.slug] = "#brands";
                return t = function() {
                    var t, r, n;
                    r = e.path();
                    for (n in l)
                        if (t = l[n], new RegExp(n).test(r)) return s.removeClass("active"), void $(t).addClass("active")
                }, r.$on("$locationChangeSuccess", function() {
                    return t()
                }), t()
            })
        }
    }
}]);

app.directive("theFooter", ["$location", function(e) {
    return {
        templateUrl: "templates/the-footer.html",
        restrict: "EA",
        replace: !0,
        link: function(t) {
            return "1" === e.search().a ? t.hideFooter = !0 : void 0
        }
    }
}]);

app.directive('homePage', ["Variation", "ourPromiseModal", "errorModal", "$routeParams", function(e, t, r, n) {
    return{
        templateUrl: 'templates/home-page.html',
        restrict: 'E',
        link: function(o) {
            var a;
            return o.ourPromiseModal = t, "1" === n.error && r.open(), o.showError = !0, o.headerVideos = [{
                type: "video",
                url: "https://www.youtube.com/watch?v=N7TkK2joi4I",
                thumbUrl: "https://i.ytimg.com/vi/N7TkK2joi4I/1.jpg"
            }], a = {
                scope: "name msrp image brand sku featured providers comingSoon",
                populate: "brand",
                query: {
                    featured: {
                        $ne: null
                    }
                }
            }, o.featuredVariations = e.query(a, function() {
                var e, t, r, n;
                for (n = o.featuredVariations, t = 0, r = n.length; r > t; t++) e = n[t], e.slug = slug(e.name.toLowerCase());
                return o.featuredVariations.sort(function(e, t) {
                    return e.featured < t.featured ? -1 : e.featured > t.featured ? 1 : 0
                })
            }), o.displayVideo = function() {
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
        }
    }
}]);

/**
app.directive('homePage', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/home-page.html',
    }
});
/**/

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

app.directive('brandSlider', ["Brand", "$location", "$rootScope", function(e) {
    return{
        restrict: 'E',
        templateUrl: 'templates/brand-slider.html',
        replace: !0,
        link: function(t) {
            //console.log(t);
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
}]);

app.directive("productsPage", ["Brand", "$location", "$stateParams", "$q", function(e, t, r, n) {
    return {
        templateUrl: "templates/products-page.html",
        restrict: "EA",
        replace: !0,
        link: function(o, a) {
            var i, u;
            return i = n.defer(), o.brand = {
                name: r.brand,
                $promise: i.promise
            }, o.brand.$promise.then(function(e) {
                return _.assign(o.brand, e)
            }), u = $("select", a), u.selectpicker(), o.brands = e.query({
                scope: "name"
            }, function() {
                var e, t, n, a, s;
                for (a = o.brands, t = 0, n = a.length; n > t; t++) e = a[t], e.slug = slug(e.name.toLowerCase());
                return o.selectedBrand = null != (s = _.find(o.brands, {
                    slug: r.brand
                })) ? s.name : void 0, i.resolve(_.find(o.brands, {
                    slug: r.brand
                })), o.brands.unshift(void 0), setTimeout(function() {
                    return u.selectpicker("refresh"), u.on("change", function() {
                        var e, t, r;
                        t = u.val();
                        //console.log(t);
                        var brand_slug = t.split(":")[1];
                        var selected_brand = _.find(o.brands, {
                            slug: slug(brand_slug.toLowerCase())
                        });
                        //console.log(selected_brand);
//                        return e = null != (r = selected_brand) ? r.name : void 0, o.$apply(function() {
//                            //console.log(e);
//                            return o.brandSelected(e)
//                        })
//
//                        console.log(u.val());
                        return e = null != (r = selected_brand) ? r.name : void 0, o.$apply(function() {
                            //console.log("brand selected: " + e);
                            //console.log("r selected: " + r);
                            return o.brandSelected(e)
                        })
                    })
                }, 0)
            }), o.brandSelected = function(e) {
                var r;
                return o.selectedBrand = e, r = e ? "/" + slug(e.toLowerCase()) + "/products" : "/products", t.path(r)
            }
        }
    }
}]);

//app.directive("productPage", ["$stateParams", "Variation", "$location", "faqModal", "$sce", function(e, t, r, n, o) {
app.directive("productPage", ["$stateParams", "Variation", "$location", "$sce", function(e, t, r, o) {
    return {
        templateUrl: "templates/product-page.html",
        restrict: "E",
        replace: !0,
        link: function(a) {
            //return a.faqModal = n, a.variation = t.get({
            return a.variation = t.get({
                expectOne: !0,
                query: {
                    sku: e.sku
                },
                populate: "brand charity product buyingGuide"
            }, function() {
                var t, n, i, u;
                return a.variation.product.staticHTML = o.trustAsHtml(null != (i = a.variation.product.staticHTML) ? i : ""), a.variation.staticProductHTML = o.trustAsHtml(null != (u = a.variation.staticProductHTML) ? u : ""), n = slug(a.variation.name.toLowerCase()), t = slug(a.variation.brand.name.toLowerCase()), a.variation.slug = n, a.variation.brand.slug = t, a.variation.brand.name = slug(a.variation.brand.name.toLowerCase()), (e.slug !== n || e.brand !== t) && r.path("/" + t + "/product/" + a.variation.sku + "/" + n, !1), a.variation.brand.iconClass = "icon-" + slug(a.variation.brand.name.toLowerCase())
            }), a.variation.$promise["catch"](function(e) {
                return 404 === e.status ? r.path("/products") : void 0
            })
        }
    }
}]);

app.directive("productTileList", ["Product", "Brand", "$location", function(e) {
    return {
        templateUrl: "templates/product-tile-list.html",
        restrict: "EA",
        replace: !0,
        scope: {
            brand: "=?",
            products: "=?",
            ngClick: "=?",
            limit: "@?"
        },
        link: function(t) {
            var r, n;
            return null == t.limit && (t.limit = 1 / 0), n = {
                select: "name brand frontman hideSale",
                populate: "brand frontman"
            }, r = function() {
                return t.products = e.query(n, function() {
                    var e, r, n, o, a;
                    console.log(t.products);
                    for (t.products.splice(t.limit), o = t.products, a = [], r = 0, n = o.length; n > r; r++) e = o[r], e.slug = slug(e.name.toLowerCase()), a.push(e.brand.slug = slug(e.brand.name.toLowerCase()));
                    return a
                })
            }, null != t.ngClick && (t.click = t.ngClick), null != t.brand ? t.brand.$promise.then(function() {
                var e;
                return (null != (e = t.brand) ? e._id : void 0) && (null == n.query && (n.query = {}), n.query.brand = t.brand._id), r()
            }) : r()
        }
    }
}]);

app.directive("productTile", ["$location", "$rootScope", function() {
    return {
        templateUrl: "templates/product-tile.html",
        restrict: "E",
        scope: {
            product: "="
        },
        replace: !0,
        link: function(e, t) {
            var r, n;
            return (null != (r = e.product) && null != (n = r.brand) ? n.name : void 0) ? t.addClass("brand-" + e.product.brand.name, "brandOverride") : void 0
        }
    }
}]);

app.directive("productView", ["$routeParams", "Variation", "$location", function(e, t, r) {
    return {
        templateUrl: "templates/product-view.html",
        restrict: "E",
        scope: {
            product: "=",
            redirectOnVariantSelection: "&"
        },
        link: function(e, n) {
            var o, a, i, u;
            return e.swipeRight = function() {
                return e.galleryIndex > 0 ? e.galleryIndex-- : void 0
            }, e.swipeLeft = function() {
                return e.galleryIndex < e.gallery.length - 1 ? e.galleryIndex++ : void 0
            }, e.gallery = [], i = function() {
                for (var t, r, n, o, a; e.gallery.length;) e.gallery.pop();
                for (e.gallery.push(e.product.primaryVideo ? {
                        video: e.product.primaryVideo,
                        image: e.product.image.image
                    } : {
                        image: e.product.image.image
                    }), o = e.product.secondaryImages, a = [], r = 0, n = o.length; n > r; r++) t = o[r], a.push(_.find(e.gallery, function(e) {
                    return e.image === t.image
                }) ? void 0 : e.gallery.push(t));
                return a
            }, o = function() {
                var t, r, n, o, a, i, u, s, l, c, d, m, p, f, g;
                t = {}, g = e.product.product.variants.values;
                for (l in g)
                    if (s = g[l], 0 === _.size(t))
                        for (n = d = 0, p = s.length; p > d; n = ++d) u = s[n], t[u] = [n + ""];
                    else
                        for (a = t, t = {}, n = m = 0, f = s.length; f > m; n = ++m) {
                            u = s[n];
                            for (o in a) i = a[o], c = _.clone(i), c.push(n + ""), t[o + " " + u] = c
                        }
                    return r = _.invert(e.product.product.variants.bindings), t[r[e.product._id]]
            }, u = function() {
                return setTimeout(function() {
                    var t, r, o, a, i, u, s;
                    for (u = null != (i = e.product.product.variants.variables) ? i : [], s = [], t = o = 0, a = u.length; a > o; t = ++o) r = u[t], s.push(function(t) {
                        var r;
                        return r = $("select#selector" + t, n), r.selectpicker(), r.on("change", function() {
                            var n;
                            return n = r.val(), e.$apply(function() {
                                return e.variantSelection[t] = n
                            })
                        })
                    }(t));
                    return s
                }, 0)
            }, a = function() {
                var n, a, s, l, c, d, m;
                if (e.toggleSpecsAndDetails = function(t) {
                        return e.specsAndDetailsActive = !e.specsAndDetailsActive, "specs" === t ? (e.specsActive = !e.specsActive, e.detailsActive = !1) : (e.detailsActive = !e.detailsActive, e.specsActive = !1)
                    }, i(), u(), e.product.product.variants) {
                    for (a = e.product.product.variants.values, e.variantSelection = o(), d = e.product.product.variants.variables, m = [], n = l = 0, c = d.length; c > l; n = ++l) s = d[n], m.push(e.$watch("variantSelection[" + n + "]", function(o, a) {
                        var s, l, c, d, m, p, f;
                        if (null != a && a !== o) {
                            for (s = [], f = e.product.product.variants.variables, n = m = 0, p = f.length; p > m; n = ++m) c = f[n], s.push(e.product.product.variants.values[c][e.variantSelection[n]]);
                            return s = s.join(" "), l = e.product.product.variants.bindings[s], d = t.get({
                                expectOne: !0,
                                query: {
                                    _id: l
                                },
                                populate: "brand charity product"
                            }, function() {
                                return e.product = d, i(), u(), e.redirectOnVariantSelection ? r.path("/" + slug(e.product.brand.name.toLowerCase()) + "/product/" + e.product.sku + "/" + slug(e.product.name.toLowerCase()), !1) : void 0
                            })
                        }
                    }));
                    return m
                }
            }, e.product.$promise ? e.product.$promise.then(function() {
                return a()
            }) : a()
        }
    }
}]);

app.directive("gallery", ["$rootScope", function() {
    return {
        templateUrl: "templates/gallery.html",
        replace: !0,
        restrict: "E",
        scope: {
            gallery: "=",
            currentIndex: "=?"
        },
        link: function(e) {
            return e.currentIndex = 0, e.$watch("currentIndex", function(t) {
                return e.currentMedia = e.gallery[t]
            }), e.changeCurrent = function(t, r) {
                return e.currentIndex = r, e.currentMedia = t, e.videoDisplay = !1, e.videoPlayer.stopVideo()
            }, e.$watch("gallery[0]", function(t) {
                return e.currentMedia = t, e.videoDisplay = !1
            }), e.displayVideo = function() {
                var t;
                return t = e.$watch("videoPlayer.playVideo", function(r) {
                    return r ? (e.videoDisplay = !0, e.videoPlayer.playVideo(), t()) : void 0
                })
            }
        }
    }
}]);

app.directive('brandsPage', ["$stateParams", "$location", "Brand", function(e, t, r){
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

app.directive('brandPage', ["$stateParams", "Brand", "$sce", "$location", function(e, t, r, n) {
    return{
        templateUrl: 'templates/brand-page.html',
        restrict: 'E',
        //controller: 'brandController',
        replace: !0,
        link: function(o) {
            //console.log(o);
            return o.brands = t.query({
                populate: "charity"
            }, function() {
                var t, a, i, u, s, l, c;
                for (i = null, l = o.brands, a = u = 0, s = l.length; s > u; a = ++u) t = l[a], t.slug = slug(t.name.toLowerCase()), t.description = r.trustAsHtml(null != (c = t.description) ? c : ""), e.brand === t.slug && (i = a, _.assign(o.brand, t), o.brand.iconClass = "icon-" + t.slug);
                return o.brands.splice(i, 1), o.brands.splice(3), null == i ? n.path("/").search("error", "1") : void 0
            }), o.brand = {
                $promise: o.brands.$promise
            }, o.displayVideo = function() {
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
        }
    }
}]);

app.directive('thePromise', function(){
   return{
        restrict: 'E',
        templateUrl: 'templates/the-promise.html'
   }
});

app.directive("page", ["$stateParams", function(e) {
    return {
        templateUrl: "templates/page.html",
        restrict: "E",
        replace: !0,
        transclude: !0,
        link: function(t) {
            //console.log(e.brand);
            var r;
            return r = $("body"), t.stateParams = e, t.$watch("stateParams.brand", function(e) {
                return r.attr("class", function(e, t) {
                    return null != t ? t.replace(/(^|\s)brand-\S+/g, "") : void 0
                }), e ? r.addClass("brand-" + e.toLowerCase()) : void 0
            }), setTimeout(function() {
                return r.addClass("brandTransitionsEnabled")
            }, 500)
        }
    }
}]);

app.directive("helpPage", ["$stateParams", "$location", "$q", "Brand", "$window", "Variation", function(e, t, r, n, o, a) {
    return {
        templateUrl: "templates/help-page.html",
        restrict: "E",
        replace: !0,
        link: function(o, i) {
            var u, s, l, c;
            //c = $("select", i);
            //console.log(o.variations);
            return o.selectedBrand = e.brand, u = r.defer(), o.brand = {
                name: e.brand,
                $promise: u.promise
            }, o.brand.$promise.then(function(e) {
                return _.assign(o.brand, e)
            }), c = $("select", i), c.selectpicker(), o.brands = n.query({
                scope: "name"
            }, function() {
                var t, r, n, a;
                for (a = o.brands, r = 0, n = a.length; n > r; r++) t = a[r], t.slug = slug(t.name.toLowerCase());
                return u.resolve(_.find(o.brands, {
                    slug: e.brand
                })), o.brands.unshift(void 0), setTimeout(function() {
                    return c.selectpicker("refresh"), c.on("change", function() {
                        var e, t, r;
                        t = c.val();
                        var brand_slug = t.split(":")[1];
                        var selected_brand = _.find(o.brands, {
                            slug: brand_slug
                        });
                        return e = null != (r = selected_brand) ? r.name : void 0, o.$apply(function() {
                            //console.log(e);
                            return o.brandSelected(e)
                        })
                    })
                }, 0)
            }), o.brandSelected = function(e) {
                var r;
                return r = e ? "/" + slug(e.toLowerCase()) + "/help" : "/help", t.path(r)
            }, l = {
                scope: "name image brand sku hidden",
                populate: "brand product",
                query: {
                    comingSoon: {
                        $ne: !0
                    }
                },
                populateChildren: !0
            },  s = function() {
                //console.log(o);
                //console.log(o.variations);
                return o.variations = a.query(l, function() {
                    var e, t, r, n, a;
                    //for (n = o.variations, a = [], t = 0, r = n.length; r > t; t++) e = n[t], e.slug = slug('testing sample'), e.brand.slug = slug('testing sample 123'), e.search = e.name + e.brand.name + e.sku, a.push(e.search += e.search.replace(/[^a-zA-Z0-9]/g, ""));
                    for (n = o.variations, a = [], t = 0, r = n.length; r > t; t++) e = n[t], e.slug = slug(e.name.toLowerCase()), e.brand.slug = slug(e.brand.name.toLowerCase()), e.search = e.name + e.brand.name + e.sku, a.push(e.search += e.search.replace(/[^a-zA-Z0-9]/g, ""));
                    //console.log(n);
                    return a
                })
            }, null != o.brand && o.brand.$promise.then(function() {
                var e;
                //console.log(o.brand);
                return (null != (e = o.brand) ? e._id : void 0) && (null == l.query && (l.query = {}), l.query.brand = o.brand._id), s()
            }), "1" === t.search().a && (o.amazonSearch = "?a=1"), o.$watch("lookupSKU", function(e, t) {
                return /^\d{0,4}$/.test(e) ? void 0 : o.lookupSKU = t
            })
        }
    }
}]);

app.directive("careersPage", ["$stateParams", "$location", "Career", function(e, t, r) {
    return {
        templateUrl: "templates/careers-page.html",
        restrict: "E",
        replace: !0,
        link: function(e) {
            return e.careers = r.query({
                scope: "jobTitle summary hidden"
            })
        }
    }
}]);

app.directive("careerPage", ["$stateParams", "$location", "Career", function(e, t, r) {
    return {
        templateUrl: "templates/career-page.html",
        restrict: "E",
        replace: !0,
        link: function(t) {
            var n;
            return n = e.id, t.career = r.get({
                expectOne: !0,
                query: {
                    _id: n
                }
            }), console.log(e.id)
        }
    }
}]);


app.factory("Product", ["$resource", function(e) {
    return e("server/api/products/:_id", {
        _id: "@_id"
    })
//        , {
//        lock: {
//            method: "POST",
//            url: "https://api.greatergoods.com/products/lock"
//        },
//        unlock: {
//            method: "POST",
//            url: "https://api.greatergoods.com/products/unlock"
//        }
//    })
}]);

app.factory("Brand", ["$resource", function(e) {
    return e("server/api/brands/:_id", {
        _id: "@_id"
    })
}]);

app.factory("Variation", ["$resource", function(e) {
    return e("server/api/variations/:_id", {
        _id: "@_id"
    })
}]);

app.factory("ourPromiseModal", ["$uibModal", function(e) {
    return {
        open: function() {
            var t;
            return t = e.open({
                templateUrl: "templates/our-promise-modal.html",
                size: "lg",
                controller: ["$scope", function(e) {
                    return e.close = t.close
                }]
            })
        }
    }
}]);

app.factory("errorModal", ["$uibModal", "$http", function(e) {
    return {
        open: function() {
            var t;
            return t = e.open({
                templateUrl: "templates/error-modal.html",
                controller: ["$scope", function(e) {
                    return e.close = t.close
                }]
            })
        }
    }
}]);

app.factory("Career", ["$resource", function(e) {
    return e("server/api/careers/:_id", {
        _id: "@_id"
    })
//        , {
//        policy: {
//            method: "GET",
//            url: "https://api.greatergoods.com/s3Policy"
//        }
//    })
}]);


/* brandController - no use for now */
app.controller('brandController',function($stateParams, $scope, $http, $location){
    //console.log($stateParams.brand);
    $scope.brand = {};

    /**/
    $http.get("server/api/brands").then(function(res){
        //console.log(res);
        var brands = res.data;
        for (x in brands)
            brands[x].slug = slug(brands[x].name.toLowerCase());
        $scope.brand = _.find(brands, {slug:$stateParams.brand});
        //console.log($scope.brand);
        if ($scope.brand == null){
            $location.path("/").search("error", "1");
        }
	}, function(res){
        //console.log('Error status: ' + res.status);
        $scope.brand = {};
    });
    /**/

    /**
    $http.get("client/json/brands.json").then(function(res) {
        var brands = res.data;
        for (x in brands)
            brands[x].slug = slug(brands[x].name.toLowerCase());
        $scope.brand = _.find(brands, {slug:$stateParams.brand});
        //console.log($scope.brand);
        if ($scope.brand == null){
            $location.path("/").search("error", "1");
        }
    });
    /**/
});

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
    /**/
    $http.get("server/api/brands").then(function(res){
        //console.log(res);
        $scope.brands = res.data;
	}, function(res){
        //console.log('Error status: ' + res.status);
        $scope.brands = {};
    });
    /**/

    /**
    $http.get("client/json/brands.json").then(function(res) {
        $scope.brands = res.data;
        //console.log($scope.brands);
        //for (x in $scope.brands)
        //    $scope.brands[x].slug = slug($scope.brands[x].name.toLowerCase());
        //console.log($scope.brands);
    });
    /**/
});

app.filter("titlecase", function() {
    return function(e) {
        var t, r;
        return null == e && (e = ""), r = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i, e = e.toLowerCase(), t = function(e, t) {
            return t === !0 && r.test(e) ? e : e[0] ? e[0].toUpperCase() + e.slice(1).toLowerCase() : ""
        }, e.toLowerCase().split(" ").map(t).join(" ")
    }
});

app.filter("searchFilter", ["$filter", function(e) {
    return function(t, r, n) {
        var o, a;
        return null == r && (r = ""), null == n && (n = "AND"), a = r.toLowerCase().split(/\s+/), "AND" === n ? (o = t, a.forEach(function(t) {
            //console.log(o);
            return o = e("filter")(o, t)
        })) : (o = [], a.forEach(function(r) {
            return o = o.concat(e("filter")(t, r))
        })), o
    }
}]);

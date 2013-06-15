'use strict';

//angular.module('siteApp', [])
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  });

var siteApp = angular.module('siteApp', ['ui.state'])

siteApp.config(function($stateProvider, $routeProvider){
    $stateProvider
        .state('index', {
            url: "", // root route
            views: {
                "viewA": {
                    templateUrl: "views/home.main.html"
                },
                "viewB": {
                    templateUrl: "views/home.footer.html"
                }
            }
        })
        .state('contact', {
            url: "/contact",
            views: {
                "viewA": {
                    templateUrl: "views/contact.main.html"
                },
                "viewB": {
                    templateUrl: "views/contact.footer.html"
                }
            }
        })
        .state('route2', {
            url: "/route2",
            views: {
                "viewA": {
                    templateUrl: "route2.viewA.html"
                },
                "viewB": {
                    templateUrl: "route2.viewB.html"
                }
            }
        })
})
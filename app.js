var app = angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url : "/home",
    templateUrl: "/home.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('menu', {
    url : "/menu",
    templateUrl: "/menu.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('apps', {
    url : "/apps",
    templateUrl: "./menuItems/apps.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('beverages', {
    url : "/beverages",
    templateUrl: "./menuItems/beverages.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('desserts', {
    url : "/desserts",
    templateUrl: "./menuItems/desserts.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('entrees', {
    url : "/entrees",
    templateUrl: "./menuItems/entrees.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('sides', {
    url : "/sides",
    templateUrl: "./menuItems/sides.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('specialOrders', {
    url : "/specialOrders",
    templateUrl: "/specialRequestForm.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('services', {
    url : "/services",
    templateUrl: "/services.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('about', {
    url : "/about",
    templateUrl: "/about.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('contact', {
    url : "/contact",
    templateUrl: "/contact.html",
    controller: "mainCtrl"
  })

  $stateProvider.state('shoppingCart', {
    url: "/shoppingCart",
    templateUrl: "/shoppingCart.html",
    controller: "mainCtrl"
  })


//takes the wrong url to home
  $urlRouterProvider.otherwise('/home')

});

'use strict';

/**
 * @ngdoc overview
 * @name 1104MessagingProtoApp
 * @description
 * # 1104MessagingProtoApp
 *
 * Main module of the application.
 */
angular
  .module('MessagingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'rmnProtoServices',
    'zumba.angular-waypoints'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/merchants.html',
        controller: 'merchantListCtrl'
      })
      .when('/merchants', {
        templateUrl: 'views/merchants.html',
        controller: 'merchantListCtrl'
      })
      .when('/design1/:merchantId', {
        templateUrl: 'views/design1.html',
        controller: 'dealsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

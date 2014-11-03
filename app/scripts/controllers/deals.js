'use strict';

/**
 * @ngdoc function
 * @name 1104MessagingProtoApp.controller:MainCtrl
 * @description
 * # Merchant List Control
 * Controller of the MessagingApp
 */

angular.module('MessagingApp')
  .controller('dealsCtrl', ['$scope', '$routeParams', 'Deal', 'Merchant', '$filter',
   function ($scope, $routeParams, Deal, Merchant, $filter) {
    $scope.deals = Deal.query({merchantId: $routeParams.merchantId});

    var merchants = Merchant.query();
    merchants.$promise.then(function(merchants) {
     	$scope.merchant = $filter('filter')(merchants, {id: $routeParams.merchantId})[0];
    });

    $scope.typeFilter = '';

    $scope.showDetails = false;
    $scope.favorited = false;
    $scope.showSection = true;

  }]);